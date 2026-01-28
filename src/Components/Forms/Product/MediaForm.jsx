"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { HiOutlinePhotograph, HiPlus, HiX } from "react-icons/hi";
import { useFormState } from "../../Context/FormContext";
import MediaModal from "@/Components/Modals/MediaModal";

const MediaForm = ({ onNext }) => {
  const { formData, saveTabData } = useFormState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [images, setImages] = useState(formData.media?.images || []);

  const { handleSubmit } = useForm();

  const handleSelectMedia = (mediaItem) => {
    const url = mediaItem.thumbnail || mediaItem.preview;

    const updatedImages = [
      ...images,
      {
        id: mediaItem.id || Date.now(),
        url: url,
        filename: mediaItem.filename,
      },
    ];

    setImages(updatedImages);
    setIsModalOpen(false);
  };

  const removeImage = (id) => {
    setImages(images.filter((img) => img.id !== id));
  };

  const onSubmit = (data) => {
    saveTabData("media", { images: images });
    onNext();
  };

  return (
    <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
      <div className="px-4 py-3 border-b border-gray-200 flex justify-between items-center">
        <h2 className="text-gray-700 font-medium">Media</h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="p-6">
        <div className="flex flex-wrap gap-4">
          {images.map((img) => (
            <div
              key={img.id}
              className="w-40 h-40 rounded-lg border border-gray-200 relative group overflow-hidden"
            >
              <img
                src={img.url}
                alt="Selected"
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => removeImage(img.id)}
                className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <HiX size={14} />
              </button>
            </div>
          ))}

          {images.length === 0 && (
            <div
              onClick={() => setIsModalOpen(true)}
              className="w-40 h-40 border-2 border-dashed border-gray-200 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors text-gray-300"
            >
              <HiOutlinePhotograph size={64} strokeWidth={1} />
            </div>
          )}

          {images.length > 0 && (
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="w-40 h-40 border-2 border-dashed border-gray-200 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-primary hover:text-primary transition-all text-gray-400 bg-gray-50/50"
            >
              <HiPlus size={32} />
              <span className="text-xs mt-2 font-medium">Add More</span>
            </button>
          )}
        </div>

        <div className="flex justify-end mt-8 pt-4 border-t border-gray-100">
          <button
            type="submit"
            className="btn bg-primary hover:bg-teal-700 text-white border-none px-8 capitalize"
          >
            Continue to next
          </button>
        </div>
      </form>

      <MediaModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onInsert={handleSelectMedia}
      />
    </div>
  );
};

export default MediaForm;
