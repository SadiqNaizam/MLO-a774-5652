import React from 'react';
import { cn } from '@/lib/utils';
import SidebarNav from '../Dashboard/SidebarNav';

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  // The SidebarNav component (organism) from context already implements the necessary
  // fixed positioning (top-0, left-0), width (w-64), height (h-screen),
  // and background (bg-sidebar) styling as per the Layout Requirements.
  // This Sidebar layout component primarily serves as a structural wrapper
  // or an integration point within the application's layout system.
  return <SidebarNav className={cn(className)} />;
};

export default Sidebar;
