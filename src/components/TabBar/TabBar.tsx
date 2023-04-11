import { FC } from "react";
import { Tab, TabBarProps } from "../../types/tabTypes";

const TabBar: FC<TabBarProps> = ({ currentLocation, tabs, onTabClicked }) => {
  const isSelected = (tab: Tab) => tab.link === currentLocation;
  const renderTab = (tab: Tab) => {
    const selectedStyle =
      "text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none text-blue-500 border-b-2 font-medium border-blue-500";
    const defaultStyle =
      "text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none";

    const handleTabClick = (tabLink: string) => onTabClicked(tabLink);

    return (
      <button
        key={tab.link}
        className={isSelected(tab) ? selectedStyle : defaultStyle}
        onClick={() => handleTabClick(tab.link)}
      >
        {tab.label}
      </button>
    );
  };

  return (
    <div className="bg-white">
      <nav className="flex flex-col sm:flex-row">
        {tabs.map((tab) => renderTab(tab))}
      </nav>
    </div>
  );
};

export default TabBar;
