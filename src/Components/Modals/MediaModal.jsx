"use client";
import React, { useEffect, useRef } from "react";
import mediaData from "@/Data/media.json";

const MediaModal = ({ isOpen, onClose, onInsert }) => {
  const tableRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    let table;
    let $;

    const initTable = async () => {
      $ = (await import("jquery")).default;
      const DataTable = (await import("datatables.net-dt")).default;

      if (!$.fn.DataTable) DataTable(window, $);

      table = $(tableRef.current).DataTable({
        data: mediaData,
        pageLength: 20,
        pagingType: "numbers",
        lengthChange: true,
        ordering: true,
        searching: true,
        info: true,
        destroy: true,
        dom:
          "<'dt-top flex justify-between items-center p-4 text-sm text-gray-600'<'dt-left flex items-center'l<'ml-4 delete-btn'>>f>" +
          "t" +
          "<'dt-bottom flex justify-between items-center p-4 text-sm text-gray-500'i p>",
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
            render: (data) =>
              `<div class="avatar">
                <div class="w-10 h-10 rounded border">
                  <img src="${data || "/placeholder.png"}" alt="Thumb" />
                </div>
              </div>`,
          },
          { data: "filename", className: "font-medium text-gray-700" },
          { data: "created", className: "text-left text-gray-500" },
          {
            data: null,
            orderable: false,
            className: "text-right",
            render: (data) =>
              `<button class="btn btn-ghost btn-xs bg-gray-100 hover:bg-gray-200 insert-row-btn normal-case px-3" data-img='${JSON.stringify(data)}'>Insert</button>`,
          },
        ],
        language: {
          search: "",
          searchPlaceholder: "Search here...",
          lengthMenu: "Show _MENU_ entries",
        },
      });

      // Inject Delete button
      $(".delete-btn").html(`
        <button class="btn btn-outline btn-sm normal-case flex items-center gap-2 text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
          </svg>
          Delete
        </button>
      `);

      $(tableRef.current).on("click", ".insert-row-btn", function () {
        const data = $(this).data("img");
        onInsert(data);
        onClose();
      });
    };

    initTable();
    return () => {
      if (table) table.destroy();
      if ($) $(tableRef.current).off();
    };
  }, [isOpen]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // Create a mock media object
        const newMedia = {
          id: Date.now(),
          filename: file.name,
          thumbnail: reader.result,
          preview: reader.result,
        };
        onInsert(newMedia);
      };
      reader.readAsDataURL(file);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal modal-open items-start pt-10 pb-10">
      <div className="modal-box w-11/12 max-w-6xl p-0 bg-[#f8f9fa] flex flex-col max-h-[90vh]">
        <div className="flex justify-between items-center p-4 bg-white border-b shrink-0 sticky top-0 z-50">
          <h3 className="font-bold text-lg text-slate-700">File Manager</h3>
          <button className="btn btn-sm btn-circle btn-ghost" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="p-4 overflow-y-auto custom-scrollbar">
          {/* Dropzone Area */}
          <div className="bg-white rounded-lg border-2 border-dashed border-gray-200 mb-8 p-16 flex flex-col items-center justify-center transition-hover hover:border-primary">
            <input
              type="file"
              className="hidden"
              onChange={handleFileChange}
              id="fileInput"
              multiple
            />
            <label
              htmlFor="fileInput"
              className="cursor-pointer text-gray-500 text-lg"
            >
              Drop files here or click to upload
            </label>
          </div>
          {/* Table Container */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-4">
            <div className="datatable-container">
              <table ref={tableRef} className="display w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 text-gray-600">
                    <th className="w-10"></th>
                    <th>ID</th>
                    <th>Thumbnail</th>
                    <th>Filename</th>
                    <th>Created</th>
                    <th className="w-20"></th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Click outside to close (optional background overlay) */}
      <form
        method="dialog"
        className="modal-backdrop bg-black/50"
        onClick={onClose}
      >
        <button>close</button>
      </form>
    </div>
  );
};

export default MediaModal;
