// store/pageBuilderStore.js
import { create } from "zustand";

// Sample JSON structure
const initialData = {
  homePage: {
    sections: [
      {
        id: "hero",
        label: "Hero Section",
        variations: [
          { id: "hero1", label: "Hero Variation 1", active: true },
          { id: "hero2", label: "Hero Variation 2", active: false },
          { id: "hero3", label: "Hero Variation 3", active: false },
        ],
      },
      {
        id: "features",
        label: "Features Section",
        variations: [
          { id: "features1", label: "Features Variation 1", active: false },
          { id: "features2", label: "Features Variation 2", active: true },
          { id: "features3", label: "Features Variation 3", active: false },
        ],
      },
    ],
  },
};

const usePageBuilderStore = create((set, get) => ({
  pages: initialData,
  selectedPage: "homePage",
  selectedSectionId: "hero",

  setSelectedPage: (page) => set({ selectedPage: page, selectedSectionId: get().pages[page].sections[0].id }),
  setSelectedSection: (sectionId) => set({ selectedSectionId: sectionId }),

  setActiveVariation: (variationId) => {
    const { selectedPage, selectedSectionId, pages } = get();
    const updatedSections = pages[selectedPage].sections.map((sec) => {
      if (sec.id !== selectedSectionId) return sec;
      return {
        ...sec,
        variations: sec.variations.map((v) => ({
          ...v,
          active: v.id === variationId,
        })),
      };
    });
    set({ pages: { ...pages, [selectedPage]: { sections: updatedSections } } });
  },
}));

export default usePageBuilderStore;
