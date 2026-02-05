"use client";

import React, { useEffect, useRef } from "react";
import { FiPlus } from "react-icons/fi";
import sellers from "@/Data/seller.json";

const SellerList = () => {
  const tableRef = useRef(null);

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
        data: sellers,
        pageLength: 10,
        pagingType: "numbers",
        lengthChange: true,
        ordering: true,
        searching: true,
        info: true,
        destroy: true,
        dom:
          "<'dt-top flex justify-between items-center p-4'<'dt-left flex items-center'l<'ml-4 delete-btn'>>f>" +
          "t" +
          "<'dt-bottom flex justify-between items-center p-4'i p>",

        columns: [
          {
            data: null,
            orderable: false,
            className: "text-center w-12",
            render: () =>
              `<input type="checkbox" class="checkbox checkbox-sm rounded border-gray-300 row-checkbox" />`,
          },
          {
            data: "name",
            render: (data, type, row) => `
              <div class="flex items-center gap-3">
                <div class="avatar">
                  <div class="w-10 h-10 rounded-full border border-gray-100 shadow-sm overflow-hidden">
                    <img src="${row.avatar}" alt="${data}" />
                  </div>
                </div>
                <div>
                  <div class="font-bold text-sm text-[#425466] whitespace-nowrap">${data}</div>
                  <div class="text-[11px] text-slate-400 font-medium">Seller ID: ${row.sellerId}</div>
                </div>
              </div>
            `,
          },
          {
            data: "email",
            className: "text-xs text-slate-500 italic",
          },
          {
            data: "status",
            className: "text-center",
            render: (data) => `
              <span class="text-xs font-medium ${data === "Active" ? "text-slate-600" : "text-slate-400"}">
                ${data || "Active"}
              </span>
            `,
          },
          {
            data: "registered",
            className: "text-xs text-slate-500 font-medium text-center",
          },
          {
            data: null,
            orderable: false,
            className: "text-right px-6",
            render: () => `
              <button class="btn bg-[#007b70] hover:bg-[#005f56] text-white border-none normal-case h-8 min-h-0 px-4 rounded text-[11px] font-medium shadow-sm">
                View details
              </button>
            `,
          },
        ],
        language: {
          search: "",
          searchPlaceholder: "Search sellers...",
          lengthMenu: "Show _MENU_ entries",
        },
      });

      $(".delete-btn").html(`
        <button class="btn btn-outline btn-sm border-gray-300 text-slate-500">
          Delete Selected
        </button>
      `);

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
    };

    initTable();

    return () => {
      if (table) table.destroy();
      if ($) $(tableRef.current).off();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#f8fafc] p-4 md:p-10 font-sans text-slate-700">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-primary">Sellers list</h1>
        <button className="btn bg-[#007b70] hover:bg-[#005f56] text-white border-none normal-case h-10 min-h-0 px-4 rounded shadow-sm flex items-center gap-2 font-medium">
          <FiPlus className="text-lg" /> Create new
        </button>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden datatable-container">
        <table
          ref={tableRef}
          className="display w-full border-separate border-spacing-0"
        >
          <thead>
            <tr className="text-[#425466] text-xs font-bold uppercase tracking-wider bg-white">
              <th></th>
              <th>Seller</th>
              <th>Email</th>
              <th className="text-center">Status</th>
              <th className="text-center">Registered</th>
              <th className="text-right">Action</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
};

export default SellerList;
