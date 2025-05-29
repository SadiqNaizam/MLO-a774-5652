import React from 'react';
import { cn } from '@/lib/utils';
import TopHeaderOrganism from '../Dashboard/TopHeader';

interface HeaderProps {
  className?: string;
  // Note: The 'pageTitle' prop is not actively used by TopHeaderOrganism as it currently
  // hardcodes its title ("Dashboard"). If TopHeaderOrganism were refactored to accept a dynamic title,
  // a prop (e.g., `pageTitle?: string;`) would be passed from MainAppLayout through this Header component.
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  // The TopHeaderOrganism component (organism) from context already implements the necessary
  // fixed positioning (top-0, left-64, right-0, z-10), height (h-[70px]),
  // layout (flex, items-center, justify-between, px-6), and background (bg-card, which maps to --surface)
  // styling as per the Layout Requirements.
  // This Header layout component serves as a structural wrapper.
  return <TopHeaderOrganism className={cn(className)} />;
};

export default Header;
