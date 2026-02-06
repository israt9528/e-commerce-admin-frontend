import { X } from "lucide-react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export default function SortableSection({
  instance,
  selectedInstanceId,
  setSelectedInstanceId,
  setSelectedSection,
  useHomeSections,
  removeSection,
}) {
  const {
    setNodeRef,
    setActivatorNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: instance.instanceId,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.6 : 1,
  };

  const meta = useHomeSections[instance.sectionId];
  const variation = meta.variations.find((v) => v.id === instance.variationId);
  const Comp = variation.Component;

  const isSelected = selectedInstanceId === instance.instanceId;

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`relative mb-4 border rounded bg-white shadow ${
        isSelected ? "ring-2 ring-teal-400" : ""
      }`}
      onClick={() => {
        setSelectedInstanceId(instance.instanceId);
        setSelectedSection(instance.sectionId);
      }}>
      {/* Label */}
      <div className="absolute top-1 left-1 text-xs bg-gray-100 px-2 py-0.5 rounded">
        {meta.label}
      </div>

      {/* Drag Handle */}
      <div
        ref={setActivatorNodeRef}
        {...attributes}
        {...listeners}
        onClick={(e) => e.stopPropagation()}
        className="absolute top-1 right-10 text-xs px-2 py-1 bg-gray-100 rounded cursor-grab">
        Drag
      </div>

      {/* Delete */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          removeSection(instance.instanceId);
        }}
        className="absolute top-1 right-1 text-red-500">
        <X size={14} />
      </button>

      {/* Component */}
      <Comp />
    </div>
  );
}
