"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Calendar,
  Printer,
  Download,
  Search,
  ChevronLeft,
  ChevronRight,
  MapPin,
  User,
  CreditCard,
} from "lucide-react";

const reportData = {
  items: [
    {
      name: "T-shirt blue, XXL size",
      price: "$44.25",
      qty: 2,
      total: "$88.50",
    },
    { name: "Winter jacket for men", price: "$7.50", qty: 2, total: "$15.00" },
    { name: "Jeans wear for men", price: "$43.50", qty: 2, total: "$87.00" },
    {
      name: "Product name color and size",
      price: "$99.00",
      qty: 3,
      total: "$297.00",
    },
  ],
  latest: [
    { id: "#456667", paid: "$294.00", date: "18 Jan 2026" },
    { id: "#134768", paid: "$294.00", date: "18 Jan 2026" },
    { id: "#134769", paid: "$294.00", date: "18 Jan 2026" },
    { id: "#134770", paid: "$294.00", date: "18 Jan 2026" },
    { id: "#887780", paid: "$294.00", date: "18 Jan 2026" },
    { id: "#344556", paid: "$294.00", date: "18 Jan 2026" },
    { id: "#998784", paid: "$294.00", date: "18 Jan 2026" },
    { id: "#556667", paid: "$294.00", date: "18 Jan 2026" },
  ],
};

const TransactionDetails = () => {
  const itemListRef = useRef();
  const latestTableRef = useRef();
  const searchInputRef = useRef();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const initDataTables = async () => {
      const $ = (await import("jquery")).default;
      window.jQuery = $;
      const DataTable = (await import("datatables.net-dt")).default;

      await import("datatables.net-buttons-dt");
      await import("datatables.net-buttons/js/buttons.html5.mjs");
      await import("datatables.net-buttons/js/buttons.print.mjs");

      const pdfMake = (await import("pdfmake/build/pdfmake")).default;
      const pdfFonts = (await import("pdfmake/build/vfs_fonts")).default;
      pdfMake.vfs = pdfFonts.pdfMake ? pdfFonts.pdfMake.vfs : pdfFonts.vfs;
      window.pdfMake = pdfMake;

      // 1. ITEM LIST TABLE
      if (itemListRef.current) {
        if ($.fn.DataTable.isDataTable(itemListRef.current)) {
          $(itemListRef.current).DataTable().destroy();
        }
        $(itemListRef.current).DataTable({
          data: reportData.items,
          columns: [
            {
              title: "Product",
              data: "name",
              render: (data) =>
                `<div class="flex items-center gap-4 py-1"><div class="w-10 h-10 bg-slate-100 rounded"></div><span class="font-medium">${data}</span></div>`,
            },
            { title: "Unit Price", data: "price", className: "dt-right" },
            { title: "Quantity", data: "qty", className: "dt-center" },
            { title: "Total", data: "total", className: "dt-right font-bold" },
          ],
          dom: "Bfrtip",
          buttons: [
            { extend: "pdf", text: "Download PDF", className: "dt-btn-teal" },
            { extend: "print", text: "Print", className: "dt-btn-gray" },
          ],
          paging: false,
          searching: false,
          info: false,
        });
      }

      // 2. LATEST TRANSACTIONS SIDEBAR
      if (latestTableRef.current) {
        if ($.fn.DataTable.isDataTable(latestTableRef.current)) {
          $(latestTableRef.current).DataTable().destroy();
        }

        const lTable = $(latestTableRef.current).DataTable({
          data: reportData.latest,
          columns: [
            { title: "Transaction ID", data: "id" },
            { title: "Paid", data: "paid" },
            { title: "Date", data: "date" },
            {
              title: "Action",
              data: null,
              className: "dt-right",
              render: () =>
                `<button class="sidebar-action-btn">Details</button>`,
            },
          ],
          dom: "tp", // 't' for table, 'p' for pagination
          pageLength: 5,
          ordering: false,
          language: {
            paginate: {
              previous: "❮",
              next: "❯",
            },
          },
        });

        $(searchInputRef.current).on("keyup", function () {
          lTable.search(this.value).draw();
        });
      }

      setIsLoaded(true);
    };

    initDataTables();
  }, []);

  return (
    <div className="bg-[#f0f3f4] min-h-screen p-4 md:p-8 font-sans text-[#444]">
      <div className="max-w-350 mx-auto">
        <h1 className="text-2xl font-bold text-primary mb-6">
          Transactions Details
        </h1>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Card */}
          <div className="flex-1 bg-white rounded-lg shadow-sm p-8">
            <div className="flex justify-between items-start mb-10">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-sm text-slate-400 mb-2">
                  <Calendar size={16} /> Wed, Aug 13, 2026, 4:34PM
                </div>
                <p className="text-sm font-semibold text-slate-800">
                  Transaction ID: 3453012
                </p>
                <p className="text-xs text-slate-400">
                  Transaction Hash: 1a7b7c1b33d161f45804730c70b75175dccd9883
                </p>
                <p className="text-sm font-bold mt-2">
                  Status:{" "}
                  <span className="text-emerald-500 italic">Success</span>
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-t border-b border-slate-100 mb-10">
              <section>
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">
                  Payment info
                </h4>
                <div className="flex items-center gap-2 mb-1 text-sm font-bold text-slate-800">
                  <div className="w-8 h-5 bg-orange-500 rounded flex items-center justify-center text-[8px] text-white italic">
                    VISA
                  </div>
                  Master Card **** **** 4768
                </div>
                <p className="text-sm text-slate-500">
                  Business name: Grand Market LLC
                </p>
                <p className="text-sm text-slate-500">
                  Phone: +1 (800) 555-154-52
                </p>
              </section>
              <section>
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">
                  Customer
                </h4>
                <p className="text-sm font-bold text-slate-800">
                  John Alexander
                </p>
                <p className="text-sm text-slate-500 underline">
                  alex@example.com
                </p>
                <p className="text-sm text-slate-500">+998 99 22123456</p>
              </section>
              <section>
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">
                  Deliver to
                </h4>
                <p className="text-sm text-slate-500">
                  City: Tashkent, Uzbekistan
                </p>
                <p className="text-sm text-slate-500">
                  Block A, House 123, Floor 2
                </p>
                <p className="text-sm text-slate-500 font-medium">
                  Po Box 10000
                </p>
              </section>
            </div>

            <div className="mb-8 overflow-x-auto">
              <h4 className="text-sm font-bold text-slate-600 mb-4">
                Item List
              </h4>
              <table
                ref={itemListRef}
                className="display w-full"
                style={{ borderCollapse: "collapse" }}
              />
            </div>

            <div className="flex flex-col items-end border-t border-slate-100 pt-6 space-y-1">
              <div className="flex justify-between w-60 text-sm text-slate-500">
                <span>Subtotal:</span>{" "}
                <span className="font-bold text-slate-800">$973.35</span>
              </div>
              <div className="flex justify-between w-60 text-sm text-slate-500">
                <span>Shipping cost:</span>{" "}
                <span className="font-bold text-slate-800">$10.00</span>
              </div>
              <div className="flex justify-between w-60 text-xl font-bold text-slate-900 pt-2">
                <span>Grand total:</span> <span>$983.00</span>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-96 bg-white rounded-lg shadow-sm p-6 flex flex-col h-fit">
            <h3 className="text-xl font-bold text-slate-700 mb-6">
              Latest Transactions
            </h3>

            <div className="flex gap-2 mb-6">
              <div className="relative flex-1">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300"
                  size={14}
                />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-9 pr-4 py-2 bg-[#f8f9fa] border border-slate-100 rounded text-xs focus:outline-none focus:ring-1 focus:ring-teal-500 transition-all"
                />
              </div>
              <select className="bg-[#f8f9fa] border border-slate-100 text-xs px-2 py-2 rounded focus:outline-none text-slate-500">
                <option>Visa card</option>
              </select>
            </div>

            <div className="latest-table-container">
              <table
                ref={latestTableRef}
                className="display w-full text-xs text-slate-500 row-spacing-table"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        /* 1. ROW SPACING FOR LATEST SECTION */
        .row-spacing-table {
          border-collapse: separate !important;
          border-spacing: 0 12px !important; /* This adds the gap between rows */
          width: 100% !important;
        }
        .row-spacing-table tbody tr {
          background-color: transparent !important;
        }
        .row-spacing-table tbody td {
          background-color: transparent !important;
          padding: 10px 0 !important;
          border-bottom: 1px solid #f1f5f9;
        }

        /* 2. CUSTOM PAGINATION STYLE */
        .dataTables_wrapper .dataTables_paginate {
          margin-top: 25px !important;
          text-align: center !important;
          float: none !important;
          display: flex;
          justify-content: center;
          gap: 5px;
        }
        .dataTables_wrapper .dataTables_paginate .paginate_button {
          border: 1px solid #e2e8f0 !important;
          background: white !important;
          color: #94a3b8 !important;
          border-radius: 6px !important;
          padding: 5px 10px !important;
          font-weight: 600 !important;
          font-size: 12px !important;
          transition: all 0.2s ease;
        }
        .dataTables_wrapper .dataTables_paginate .paginate_button:hover {
          background: #f8fafb !important;
          border-color: #cbd5e1 !important;
          color: #64748b !important;
        }
        .dataTables_wrapper .dataTables_paginate .paginate_button.current {
          background: #007b71 !important; /* Teal from image */
          color: white !important;
          border-color: #007b71 !important;
        }
        .dataTables_wrapper .dataTables_paginate .paginate_button.disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        /* Other Styles */
        .dt-btn-teal {
          background-color: #007b71 !important;
          color: white !important;
          border: none !important;
          padding: 8px 18px !important;
          border-radius: 4px !important;
          font-weight: 500 !important;
          font-size: 13px !important;
          margin-right: 8px !important;
        }
        .dt-btn-gray {
          background-color: #6c757d !important;
          color: white !important;
          border: none !important;
          padding: 8px 18px !important;
          border-radius: 4px !important;
          font-weight: 500 !important;
          font-size: 13px !important;
        }
        .sidebar-action-btn {
          border: 1px solid #ddd;
          color: #666;
          padding: 4px 10px;
          border-radius: 4px;
          font-weight: 600;
          font-size: 10px;
          background: white;
        }
        .dt-right {
          text-align: right !important;
        }
        .dt-center {
          text-align: center !important;
        }
        table.dataTable thead th {
          border-bottom: 1px solid #f1f5f9 !important;
          color: #94a3b8;
          font-weight: bold;
          font-size: 11px;
          text-transform: uppercase;
        }
        table.dataTable.no-footer {
          border-bottom: none !important;
        }
        .dataTables_wrapper .dt-buttons {
          float: right;
          margin-bottom: 25px;
        }
      `}</style>
    </div>
  );
};

export default TransactionDetails;
