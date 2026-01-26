"use client";

import React, { useEffect, useRef } from "react";
import brandsData from "@/Data/brands.json";
import Link from "next/link";
import { FormProvider } from "@/Components/Context/FormContext";

const BrandsPage = () => {
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
        data: brandsData,

        pageLength: 10,
        pagingType: "numbers", // ✅ no double arrows
        lengthChange: true,
        ordering: true,
        searching: true,
        info: true,
        destroy: true,

        // ✅ DataTables v1 layout
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
          { data: "id" },
          {
            data: "logo",
            orderable: false,
            render: (data) => `
              <div class="logo-box">
                <img src="/images/brands/${data}" alt="logo" />
              </div>
            `,
          },
          { data: "name" },
          {
            data: "status",
            render: (data) => `<span class="status-pill">${data}</span>`,
          },
          {
            data: "created",
            className: "text-right",
          },
        ],

        language: {
          search: "",
          searchPlaceholder: "Search here...",
          lengthMenu: "Show _MENU_ entries",
        },
      });

      // ✅ Inject Delete button
      $(".delete-btn").html(`
        <button class="btn btn-outline btn-sm">
          Delete
        </button>
      `);

      // ============================
      // ✅ ROW SELECTION LOGIC
      // ============================

      // Row click → select row
      $(tableRef.current).on("click", "tbody tr", function (e) {
        if ($(e.target).is("input")) return;

        $(this).toggleClass("selected");
        $(this)
          .find(".row-checkbox")
          .prop("checked", $(this).hasClass("selected"));
      });

      // Checkbox click → sync row
      $(tableRef.current).on("click", ".row-checkbox", function (e) {
        e.stopPropagation();

        const row = $(this).closest("tr");
        row.toggleClass("selected", this.checked);
      });
    };

    initTable();

    return () => {
      if (table) {
        table.destroy();
      }
      if ($) {
        $(tableRef.current).off();
      }
    };
  }, []);

  return (
    <FormProvider>
      <div className="p-6 bg-[#f8f9fa] min-h-screen">
        <div className="flex justify-between mb-5">
          <h1 className="text-3xl text-primary font-bold">Brands</h1>
          <div>
            {/* 4. Attach the save function */}
            <Link
              href="/products/brands/create-brand"
              type="button"
              className="btn btn-primary btn-outline"
            >
              Create Brand
            </Link>
          </div>
        </div>
        <div className="datatable-container">
          <table ref={tableRef} className="display w-full">
            <thead>
              <tr>
                <th></th>
                <th>ID</th>
                <th>Logo</th>
                <th>Name</th>
                <th>Status</th>
                <th className="text-right">Created</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </FormProvider>
  );
};

export default BrandsPage;
