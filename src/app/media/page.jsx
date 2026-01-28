"use client";

import React, { useEffect, useRef } from "react";
import mediaData from "@/Data/media.json";
import Link from "next/link";

const MediaPage = () => {
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
        data: mediaData,
        pageLength: 20,
        pagingType: "numbers",
        lengthChange: true,
        ordering: true,
        searching: true,
        info: true,
        destroy: true,

        // ✅ Layout matching your image and VariationsPage
        dom:
          "<'dt-top flex justify-between items-center p-4'<'dt-left flex items-center'l<'ml-4 delete-btn'>>f>" +
          "t" +
          "<'dt-bottom flex justify-between items-center p-4'i p>",

        columns: [
          {
            data: null,
            orderable: false,
            className: "text-center",
            render: () =>
              `<input type="checkbox" class="checkbox checkbox-sm row-checkbox" />`,
          },
          { data: "id", className: "text-gray-500" },
          {
            data: "thumbnail",
            orderable: false,
            render: (data) => `<div class="avatar">
                                <div class="w-10 h-10 rounded border">
                                  <img src="${data || "/placeholder.png"}" alt="Thumb" />
                                </div>
                              </div>`,
          },
          { data: "filename", className: "font-medium text-gray-700" },
          {
            data: "created",
            className: "text-left text-gray-500",
          },
        ],

        language: {
          search: "",
          searchPlaceholder: "Search here...",
          lengthMenu: "Show _MENU_ entries",
        },
      });

      // ✅ Inject Delete button with trash icon style from image
      $(".delete-btn").html(`
        <button class="btn btn-outline btn-sm normal-case flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
          </svg>
          Delete
        </button>
      `);

      // ✅ Selection Logic
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
    <div className="p-6 bg-[#f8f9fa] min-h-screen">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-slate-800">Media</h1>
      </div>

      {/* ✅ New File Upload Input Field (Matching Image) */}
      <div className="bg-white rounded-lg border-2 border-dashed border-gray-200 mb-8 p-16 flex flex-col items-center justify-center transition-hover hover:border-primary">
        <input type="file" className="hidden" id="fileInput" multiple />
        <label
          htmlFor="fileInput"
          className="cursor-pointer text-gray-500 text-lg"
        >
          Drop files here or click to upload
        </label>
      </div>

      {/* DataTable Container */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="datatable-container">
          <table ref={tableRef} className="display w-full border-b">
            <thead>
              <tr className="bg-gray-50">
                <th className="w-10"></th>
                <th>ID</th>
                <th>Thumbnail</th>
                <th>Filename</th>
                <th>Created</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MediaPage;
