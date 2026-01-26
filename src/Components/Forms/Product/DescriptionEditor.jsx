"use client";
import React from "react";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";

// Dynamic import to prevent SSR errors in Next.js
const ReactQuill = dynamic(() => import("react-quill-new"), {
  ssr: false,
  loading: () => <div className="h-64 bg-gray-50 animate-pulse rounded-md" />,
});

const DescriptionEditor = ({ value, onChange }) => {
  // Full toolbar configuration to match your design
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }], // Paragraph/Header selection
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ align: [] }, { indent: "-1" }, { indent: "+1" }],
      ["link", "image", "video", "code-block"],
      ["clean"], // Remove formatting
    ],
  };

  return (
    <div className="bg-white">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        placeholder="Type description here..."
        className="h-72 mb-12"
      />
    </div>
  );
};

export default DescriptionEditor;
