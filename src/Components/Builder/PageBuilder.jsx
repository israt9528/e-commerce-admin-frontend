"use client";
import { useState } from "react";
import { useHomeSections, getGroupedSections } from "./Hooks/useHomeSections";

import LeftPanel from "./Panels/LeftPanel";
import MiddlePanel from "./Panels/MiddlePanel";
import RightPanel from "./Panels/RightPanel";
import ExportModal from "./Panels/ExportModal";

export default function PageBuilder() {
  // State management
  const [selectedSection, setSelectedSection] = useState("navbar");
  const [selectedInstanceId, setSelectedInstanceId] = useState("navbar-1"); // Track specific instance

  // Panel collapse states
  const [leftPanelCollapsed, setLeftPanelCollapsed] = useState(false);
  const [rightPanelCollapsed, setRightPanelCollapsed] = useState(false);

  // Changed: sections is now an array of instances with unique IDs
  const [sections, setSections] = useState([
    {
      instanceId: "navbar-1",
      sectionId: "navbar",
      variationId: "navbar-minimal",
    },
  ]);

  const [draggedItem, setDraggedItem] = useState(null);
  const [dragOverIndex, setDragOverIndex] = useState(null);
  const [showExport, setShowExport] = useState(false);

  // Event handlers
  const handleVariationSelect = (instanceId, variationId) => {
    setSections((prev) =>
      prev.map((s) =>
        s.instanceId === instanceId ? { ...s, variationId } : s,
      ),
    );
  };

  // NEW: Add section to the page
  const addSection = (sectionId) => {
    const section = useHomeSections[sectionId];

    // Check if multiple instances are allowed
    if (!section.allowMultiple) {
      const exists = sections.some((s) => s.sectionId === sectionId);
      if (exists) {
        alert(`Only one ${section.label} section is allowed`);
        return;
      }
    }

    const defaultVariation = section.variations[0].id;
    const newInstanceId = `${sectionId}-${Date.now()}`;
    const newInstance = {
      instanceId: newInstanceId,
      sectionId: sectionId,
      variationId: defaultVariation,
    };

    setSections((prev) => [...prev, newInstance]);
    setSelectedSection(sectionId);
    setSelectedInstanceId(newInstanceId); // Select the newly added instance
  };

  // NEW: Remove section from the page
  const removeSection = (instanceId) => {
    setSections((prev) => prev.filter((s) => s.instanceId !== instanceId));

    // If we're removing the selected instance, select another one
    if (selectedInstanceId === instanceId) {
      const remainingInstances = sections.filter(
        (s) => s.instanceId !== instanceId,
      );
      if (remainingInstances.length > 0) {
        setSelectedInstanceId(remainingInstances[0].instanceId);
        setSelectedSection(remainingInstances[0].sectionId);
      }
    }
  };

  // Drag & Drop handlers
  const handleDragStart = (e, index) => {
    setDraggedItem(index);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    setDragOverIndex(index);
  };

  const handleDrop = (e, index) => {
    e.preventDefault();
    if (draggedItem === null || draggedItem === index) return;
    const updated = [...sections];
    const [moved] = updated.splice(draggedItem, 1);
    updated.splice(index, 0, moved);
    setSections(updated);
    setDraggedItem(null);
    setDragOverIndex(null);
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
    setDragOverIndex(null);
  };

  const getExportJSON = () => ({
    version: "1.0",
    generatedAt: new Date().toISOString(),
    pages: [
      {
        id: "main-page",
        sections: sections.map((s) => ({
          instanceId: s.instanceId,
          sectionId: s.sectionId,
          variationId: s.variationId,
        })),
      },
    ],
  });

  // Calculate grid columns based on panel states
  const getGridColumns = () => {
    const leftWidth = leftPanelCollapsed ? "48px" : "260px";
    const rightWidth = rightPanelCollapsed ? "48px" : "350px";
    return `${leftWidth} 1fr ${rightWidth}`;
  };

  return (
    <div
      className="h-screen font-sans bg-white text-gray-300 overflow-hidden grid transition-all duration-150"
      style={{ gridTemplateColumns: getGridColumns() }}>
      <LeftPanel
        selectedSection={selectedSection}
        setSelectedSection={setSelectedSection}
        selectedInstanceId={selectedInstanceId}
        setSelectedInstanceId={setSelectedInstanceId}
        sections={sections}
        addSection={addSection}
        useHomeSections={useHomeSections}
        getGroupedSections={getGroupedSections}
        isCollapsed={leftPanelCollapsed}
        setIsCollapsed={setLeftPanelCollapsed}
      />

      <MiddlePanel
        selectedSection={selectedSection}
        setSelectedSection={setSelectedSection}
        selectedInstanceId={selectedInstanceId}
        setSelectedInstanceId={setSelectedInstanceId}
        sections={sections}
        setDraggedItem={setDraggedItem}
        setDragOverIndex={setDragOverIndex}
        handleDragStart={handleDragStart}
        handleDragOver={handleDragOver}
        handleDrop={handleDrop}
        handleDragEnd={handleDragEnd}
        draggedItem={draggedItem}
        dragOverIndex={dragOverIndex}
        useHomeSections={useHomeSections}
        setShowExport={setShowExport}
        removeSection={removeSection}
      />

      <RightPanel
        selectedSection={selectedSection}
        selectedInstanceId={selectedInstanceId}
        setSelectedInstanceId={setSelectedInstanceId}
        sections={sections}
        handleVariationSelect={handleVariationSelect}
        useHomeSections={useHomeSections}
        isCollapsed={rightPanelCollapsed}
        setIsCollapsed={setRightPanelCollapsed}
      />

      <ExportModal
        showExport={showExport}
        setShowExport={setShowExport}
        getExportJSON={getExportJSON}
      />
    </div>
  );
}
