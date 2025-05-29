import React, { useEffect } from 'react';
import { cn } from '@/lib/utils';
import Sidebar from './Sidebar';
import Header from './Header';

interface MainAppLayoutProps {
  children: React.ReactNode;
  pageTitle: string; // Used for document.title. Could also be passed to Header if it supported dynamic titles.
  className?: string;
}

// Extracted from Project Info: {"name": "Leads Dashboard Clone"}
const PROJECT_NAME = "Leads Dashboard Clone";

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, pageTitle, className }) => {
  useEffect(() => {
    if (pageTitle) {
      document.title = `${pageTitle} | ${PROJECT_NAME}`;
    } else {
      document.title = PROJECT_NAME;
    }
  }, [pageTitle]);

  return (
    <div className={cn("bg-background text-foreground min-h-screen", className)}>
      <Sidebar />
      {/* 
        This div acts as the main content wrapper, positioned to the right of the fixed Sidebar.
        - ml-64: Offsets content to account for the Sidebar's width (w-64).
        - flex flex-col: Allows Header and Main content to stack vertically.
        - h-screen: Ensures this container takes full viewport height.
        - overflow-hidden: Prevents this container from showing scrollbars; scrolling is handled by the <main> element.
      */}
      <div className="ml-64 flex flex-col h-screen overflow-hidden">
        <Header /> {/* Header is fixed positioned by TopHeaderOrganism (left-64 ensures it aligns in this column) */}
        <main
          className={cn(
            "flex-1", // Expands to fill available vertical space in its flex container
            "p-6", // Padding as per Layout Requirements (mainContent.layout)
            "mt-[70px]", // Margin-top to account for the fixed Header's height (h-[70px]) (mainContent.layout)
            "overflow-y-auto", // Enables vertical scrolling for content within <main> (overall.sizing.mainContent)
            "min-w-0" // Prevents content from breaking layout (overall.sizing.mainContent)
          )}
        >
          {/* Inner container for stacking children components with consistent spacing (mainContent.container) */}
          <div className="flex flex-col gap-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainAppLayout;
