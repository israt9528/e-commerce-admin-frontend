"use client";

import React, { useEffect, useRef, useState } from "react";
import products from "@/Data/products.json";

const AllProducts = () => {
  const tableRef = useRef(null);
  const [dateFilter, setDateFilter] = useState("");

  useEffect(() => {
    let table;
    let $;

    const initTable = async () => {
      $ = (await import("jquery")).default;
      const DataTable = (await import("datatables.net-dt")).default;

      if (!$.fn.DataTable) {
        DataTable(window, $);
      }

      $.fn.dataTable.ext.search.push(function (settings, data, dataIndex) {
        const selectedDate = $("#dateInput").val();
        if (!selectedDate) return true;

        const rowDate = data[4];
        const formattedRowDate = rowDate.split(".").reverse().join("-"); // converts 02.11.2026 to 2026-11-02
        return formattedRowDate === selectedDate;
      });

      table = $(tableRef.current).DataTable({
        data: products,
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
              `<input type="checkbox" class="checkbox checkbox-xs rounded border-gray-300 row-checkbox" />`,
          },
          {
            data: "name",
            render: (data, type, row) => `
              <div class="flex items-center gap-4">
                <div class="w-10 h-10 rounded border border-gray-100 p-1 flex items-center justify-center bg-white shadow-sm overflow-hidden">
                  <img src="${row.image}" alt="${data}" class="object-contain max-h-full" />
                </div>
                <span class="text-xs font-medium text-slate-600 truncate max-w-xs">${data}</span>
              </div>
            `,
          },
          {
            data: "price",
            className: "text-xs font-bold text-slate-700",
            render: (data) => `$${data}`,
          },
          {
            data: "status",
            className: "text-xs font-bold text-slate-700",
          },
          {
            data: "date",
            className: "text-xs text-slate-400 font-medium",
            defaultContent: "02.11.2026",
          },
          {
            data: null,
            orderable: false,
            className: "text-right px-6",
            render: () => `
              <div class="flex justify-end gap-2">
                <button class="btn btn-xs h-7 bg-[#007b70] hover:bg-[#005f56] text-white border-none normal-case px-3 rounded text-[10px] font-bold flex items-center gap-1">Edit</button>
                <button class="btn btn-xs h-7 bg-white border border-gray-200 text-slate-400 hover:bg-red-50 hover:text-red-500 hover:border-red-200 normal-case px-2 rounded">Delete</button>
              </div>
            `,
          },
        ],
        language: {
          search: "",
          searchPlaceholder: "Search products...",
          lengthMenu: "Show _MENU_ entries",
        },
      });

      $("#dateInput").on("change", function () {
        table.draw();
      });

      $("#categoryFilter").on("change", function () {
        table
          .column(1)
          .search(this.value === "All category" ? "" : this.value)
          .draw();
      });
      $("#statusFilter").on("change", function () {
        table
          .column(3)
          .search(this.value === "Status" ? "" : this.value)
          .draw();
      });

      $(".delete-btn").html(
        `<button class="btn btn-outline btn-sm border-gray-300 text-slate-500">Delete Selected</button>`,
      );

      $(tableRef.current).on("click", "tbody tr", function (e) {
        if ($(e.target).is("input")) return;
        $(this).toggleClass("selected");
        $(this)
          .find(".row-checkbox")
          .prop("checked", $(this).hasClass("selected"));
      });
    };

    initTable();

    return () => {
      if (table) table.destroy();
      if ($) $.fn.dataTable.ext.search.pop();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#f8fafc] p-4 md:p-10 font-sans text-slate-700">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-primary">Products List</h1>
          <p className="text-xs text-slate-400 mt-1 italic">
            Manage your product inventory.
          </p>
        </div>
        <div className="flex gap-2">
          <button className="btn btn-sm h-10 bg-white border-gray-300 text-slate-500 normal-case font-medium px-4">
            Export
          </button>
          <button className="btn btn-sm h-10 bg-[#007b70] hover:bg-[#005f56] text-white border-none px-6 font-medium shadow-md">
            Create new
          </button>
        </div>
      </div>

      <div className="bg-[#f1f4f9] p-3 rounded-t-lg border border-gray-200 flex flex-wrap gap-4 items-center justify-between">
        <div className="flex gap-4 items-center">
          <div className="relative w-48">
            <select
              id="categoryFilter"
              className="select select-xs w-full bg-white border-gray-200 font-normal h-8 min-h-0 rounded text-[11px]"
            >
              <option>All category</option>
              <option>Electronics</option>
              <option>Fashion</option>
            </select>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="relative w-48">
            <div className="flex items-center bg-white border border-gray-200 rounded h-8 px-2 gap-2">
              <input
                type="date"
                id="dateInput"
                className="text-[11px] text-slate-500 bg-transparent outline-none w-full cursor-pointer"
              />
            </div>
          </div>
          <div className="relative w-40">
            <select
              id="statusFilter"
              className="select select-xs w-full bg-white border-gray-200 font-normal h-8 min-h-0 rounded text-[11px]"
            >
              <option>Status</option>
              <option>Active</option>
              <option>Draft</option>
            </select>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-b-lg border-x border-b border-gray-200 shadow-sm overflow-hidden datatable-container">
        <table
          ref={tableRef}
          className="display w-full border-separate border-spacing-0"
        >
          <thead>
            <tr>
              <th></th>
              <th>Product</th>
              <th>Price</th>
              <th>Status</th>
              <th>Date</th>
              <th className="text-right">Action</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
};

export default AllProducts;
