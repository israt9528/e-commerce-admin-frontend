"use client";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function TabbedLayout({ tabs = [], selectedIndex, onChange }) {
  if (tabs.length === 0) return null;
  const isSingleTab = tabs.length === 1;

  return (
    <div className="w-full">
      <TabGroup vertical selectedIndex={selectedIndex} onChange={onChange}>
        <div
          className={classNames(
            "flex min-h-100",
            isSingleTab ? "flex-col" : "flex-row",
          )}
        >
          {!isSingleTab && (
            <TabList className="flex flex-col w-1/4 p-1 lg:p-4 border border-gray-200 bg-white rounded-xl space-y-1">
              {tabs.map((tab) => (
                <Tab
                  key={tab.label}
                  className={({ selected }) =>
                    classNames(
                      "w-full rounded-lg py-2.5 px-1 lg:px-4 text-left text-sm font-medium leading-5 transition-all outline-none",
                      selected
                        ? "bg-secondary text-primary shadow-sm"
                        : "text-gray-500 hover:bg-gray-50 hover:text-gray-700",
                    )
                  }
                >
                  {tab.label}
                </Tab>
              ))}
            </TabList>
          )}

          <TabPanels
            className={classNames("flex-1", !isSingleTab ? "pl-8" : "pl-0")}
          >
            {tabs.map((tab, idx) => (
              <TabPanel key={idx} className="outline-none focus:ring-0">
                {tab.component}
              </TabPanel>
            ))}
          </TabPanels>
        </div>
      </TabGroup>
    </div>
  );
}
