"use client";

import React, { useEffect, useRef, useState } from "react";
import transactionData from "@/Data/transaction.json";
import { Calendar, RefreshCcw } from "lucide-react";

const TransactionPage = () => {
  const tableRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let table;
    let $;

    const initTable = async () => {
      $ = (await import("jquery")).default;
      const DataTable = (await import("datatables.net-dt")).default;

      if (!$.fn.DataTable) {
        DataTable(window, $);
      }

      table = $(tableRef.current).DataTable({
        data: transactionData,
        pageLength: 10,
        pagingType: "numbers",
        lengthChange: true,
        ordering: true,
        searching: true,
        info: true,
        destroy: true,
        // ✅ Matching BrandsPage Layout (dom)
        dom:
          "<'dt-top flex justify-between items-center p-4'<'dt-left flex items-center'l<'ml-4 delete-btn'>>f>" +
          "t" +
          "<'dt-bottom flex justify-between items-center p-4'i p>",

        columns: [
          // ✅ Added Selection Column
          {
            data: null,
            orderable: false,
            className: "text-center",
            render: () =>
              `<input type="checkbox" class="checkbox checkbox-sm row-checkbox" />`,
          },
          {
            data: null,
            title: "DATE & TIME",
            render: (data) => `
              <div class="flex flex-col">
                <span class="font-bold text-slate-700">${data.date}</span>
                <span class="text-xs text-slate-400">at ${data.time}</span>
              </div>`,
          },
          {
            data: "seller",
            title: "SELLER",
            render: (data) => `
              <div class="flex items-center gap-2">
                <div class="w-8 h-8 rounded border bg-gray-50 flex items-center justify-center text-[10px] font-bold text-gray-400">LOGO</div>
                <span class="font-medium text-slate-600">${data}</span>
              </div>`,
          },
          { data: "sku", title: "SKU", className: "text-slate-500 text-sm" },
          {
            data: "method",
            title: "METHOD",
            className: "text-slate-600 font-medium",
          },
          {
            data: "status",
            title: "STATUS",
            render: (data) => {
              const colors = {
                APPROVED: "bg-blue-100 text-blue-600 border-blue-200",
                WAITING: "bg-teal-100 text-teal-600 border-teal-200",
                CANCELLED: "bg-red-100 text-red-600 border-red-200",
                REJECTED: "bg-gray-100 text-gray-600 border-gray-200",
              };
              return `<span class="px-3 py-1 rounded-full text-[10px] font-black border ${colors[data] || "bg-gray-50"}">${data}</span>`;
            },
          },
          {
            data: "amount",
            title: "AMOUNT",
            className: "font-black text-slate-800 text-right",
            render: (data) => `$${data.toLocaleString()}`,
          },
        ],
        language: {
          search: "",
          searchPlaceholder: "Search here...",
          lengthMenu: "Show _MENU_ entries",
        },
      });

      // ✅ Inject Delete button like BrandsPage
      $(".delete-btn").html(`
        <button class="btn btn-outline btn-sm">
          Delete
        </button>
      `);

      // ✅ ROW SELECTION LOGIC (Copied from BrandsPage)
      $(tableRef.current).on("click", "tbody tr", function (e) {
        if ($(e.target).is("input")) return;
        $(this).toggleClass("selected");
        $(this)
          .find(".row-checkbox")
          .prop("checked", $(this).hasClass("selected"));
      });

      $(tableRef.current).on("click", ".row-checkbox", function (e) {
        e.stopPropagation();
        const row = $(this).closest("tr");
        row.toggleClass("selected", this.checked);
      });

      setIsLoaded(true);
    };

    initTable();

    return () => {
      if (table) table.destroy();
      if ($) $(tableRef.current).off();
    };
  }, []);

  return (
    <div className="p-8 bg-[#f8f9fa] min-h-screen font-sans">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-black text-primary tracking-tight">
            Transactions
          </h1>
          <div className="flex items-center gap-2 text-slate-400 text-sm mt-1 font-medium">
            <RefreshCcw size={14} className="text-blue-500" />
            Data Refresh{" "}
            <span className="text-slate-300 ml-4">
              January 17, 2026 12:38 PM
            </span>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 mb-6 flex justify-between items-center">
        <div className="flex flex-col">
          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">
            Transaction date from:
          </label>
          <div className="flex items-center gap-2 border px-3 py-1.5 rounded-md text-sm text-slate-600 bg-slate-50 cursor-default">
            <Calendar size={14} />
            <span>01/01/2026 - 17/01/2026</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs text-slate-400 font-medium">
            View transactions:{" "}
            <span className="text-slate-800 font-bold">6/12</span>
          </span>
          <select className="border rounded-md px-4 py-1.5 text-sm bg-white text-slate-600 outline-none hover:border-slate-300 cursor-pointer">
            <option>Recent</option>
            <option>Oldest</option>
          </select>
        </div>
      </div>

      <div className="datatable-container">
        {!isLoaded && (
          <div className="flex items-center justify-center p-20 text-slate-400 animate-pulse">
            Loading data...
          </div>
        )}
        <div
          className={`transaction-table ${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
        >
          <table ref={tableRef} className="display w-full">
            <thead>
              <tr>
                <th></th>
                <th>DATE & TIME</th>
                <th>SELLER</th>
                <th>SKU</th>
                <th>METHOD</th>
                <th>STATUS</th>
                <th className="text-right">AMOUNT</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TransactionPage;
