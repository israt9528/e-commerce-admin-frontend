"use client";
import React, { useState } from "react";
import {
  Download,
  Upload,
  FileText,
  Archive,
  CheckCircle2,
  X,
} from "lucide-react";

const FileDisplay = ({ file, onClear, icon: Icon, colorClass }) => (
  <div
    className={`flex items-center justify-between p-3 rounded-lg border bg-white ${colorClass.border} animate-in fade-in slide-in-from-bottom-2 duration-300`}
  >
    <div className="flex items-center gap-3">
      <div className={`p-2 rounded-md ${colorClass.bg}`}>
        <Icon size={18} className={colorClass.text} />
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-slate-700 truncate max-w-50">
          {file.name}
        </span>
        <span className="text-[10px] text-slate-400">
          {(file.size / 1024).toFixed(1)} KB
        </span>
      </div>
    </div>
    <button
      onClick={onClear}
      type="button"
      className="text-slate-400 hover:text-red-500 hover:bg-red-50 p-1 rounded-full transition-colors"
    >
      <X size={16} />
    </button>
  </div>
);

const ImportPage = () => {
  const [productFile, setProductFile] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [isImporting, setIsImporting] = useState(false);

  const handleImport = (e) => {
    e.preventDefault();
    if (!productFile) {
      alert("Please select a product data file (CSV/Excel) first.");
      return;
    }

    setIsImporting(true);
    // Simulate API upload process
    setTimeout(() => {
      setIsImporting(false);
      alert("Success! Your products are being processed.");
      setProductFile(null);
      setImageFile(null);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-10 font-sans text-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Header & Breadcrumbs */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-primary tracking-tight">
              Import Products
            </h1>
          </div>

          <button className="flex items-center gap-2 bg-white border border-slate-200 text-slate-700 px-6 py-2.5 rounded-xl font-bold hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm active:scale-95">
            <Download size={18} className="text-blue-600" />
            Download Sample
          </button>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 overflow-hidden">
          <div className="p-8 md:p-12">
            <form onSubmit={handleImport} className="space-y-12">
              {/* Row 1: Data File */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-4">
                  <h3 className="text-lg font-bold text-slate-800">
                    Product Spreadsheet
                  </h3>
                  <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                    Upload the{" "}
                    <span className="font-mono text-blue-600 bg-blue-50 px-1 rounded">
                      .csv
                    </span>{" "}
                    or
                    <span className="font-mono text-blue-600 bg-blue-50 px-1 rounded">
                      {" "}
                      .xlsx
                    </span>{" "}
                    file containing your product catalog.
                  </p>
                </div>

                <div className="lg:col-span-8">
                  {productFile ? (
                    <FileDisplay
                      file={productFile}
                      onClear={() => setProductFile(null)}
                      icon={FileText}
                      colorClass={{
                        border: "border-blue-200",
                        text: "text-blue-600",
                        bg: "bg-blue-50",
                      }}
                    />
                  ) : (
                    <div className="relative group">
                      <input
                        type="file"
                        onChange={(e) => setProductFile(e.target.files[0])}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                        accept=".csv, .xlsx"
                      />
                      <div className="flex flex-col items-center justify-center border-2 border-dashed border-slate-200 group-hover:border-blue-400 group-hover:bg-blue-50/40 rounded-2xl p-10 transition-all">
                        <div className="w-12 h-12 bg-slate-100 group-hover:bg-blue-100 rounded-full flex items-center justify-center mb-4 transition-colors">
                          <Upload
                            className="text-slate-400 group-hover:text-blue-600"
                            size={24}
                          />
                        </div>
                        <span className="text-sm font-bold text-slate-700 group-hover:text-blue-700">
                          Click to upload spreadsheet
                        </span>
                        <span className="text-xs text-slate-400 mt-1">
                          or drag and drop here
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Row 2: Images ZIP */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-4">
                  <h3 className="text-lg font-bold text-slate-800">
                    Media Assets
                  </h3>
                  <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                    If your spreadsheet references local images, upload them in
                    a single{" "}
                    <span className="font-mono text-purple-600 bg-purple-50 px-1 rounded">
                      .zip
                    </span>{" "}
                    archive.
                  </p>
                </div>

                <div className="lg:col-span-8">
                  {imageFile ? (
                    <FileDisplay
                      file={imageFile}
                      onClear={() => setImageFile(null)}
                      icon={Archive}
                      colorClass={{
                        border: "border-purple-200",
                        text: "text-purple-600",
                        bg: "bg-purple-50",
                      }}
                    />
                  ) : (
                    <div className="relative group">
                      <input
                        type="file"
                        onChange={(e) => setImageFile(e.target.files[0])}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                        accept=".zip"
                      />
                      <div className="flex flex-col items-center justify-center border-2 border-dashed border-slate-200 group-hover:border-purple-400 group-hover:bg-purple-50/40 rounded-2xl p-10 transition-all">
                        <div className="w-12 h-12 bg-slate-100 group-hover:bg-purple-100 rounded-full flex items-center justify-center mb-4 transition-colors">
                          <Archive
                            className="text-slate-400 group-hover:text-purple-600"
                            size={24}
                          />
                        </div>
                        <span className="text-sm font-bold text-slate-700 group-hover:text-purple-700">
                          Upload images.zip
                        </span>
                        <span className="text-xs text-slate-400 mt-1">
                          Maximum file size: 50MB
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-8 border-t border-slate-100 flex items-center justify-between">
                <p className="text-xs text-slate-400 italic">
                  * Required fields must be filled to begin processing.
                </p>
                <button
                  type="submit"
                  disabled={isImporting || !productFile}
                  className={`flex items-center gap-3 px-12 py-4 rounded-2xl font-black text-white transition-all shadow-lg ${
                    isImporting || !productFile
                      ? "bg-slate-300 cursor-not-allowed shadow-none"
                      : "bg-blue-600 hover:bg-blue-700 hover:shadow-blue-200 active:scale-95"
                  }`}
                >
                  {isImporting ? (
                    <>
                      <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Uploading Data...</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle2 size={20} />
                      <span>Start Import</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportPage;
