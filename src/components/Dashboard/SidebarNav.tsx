import React from 'react';
import { cn } from '@/lib/utils';
import {
  LayoutGrid,
  Users,
  UserSquare,
  FileText,
  Receipt,
  Archive,
  Mail,
  Briefcase,
  CalendarDays,
  HelpCircle,
  Settings,
  Menu as MenuIcon,
  Circle // Using Circle as a placeholder for the logo icon part
} from 'lucide-react';

interface NavItemProps {
  href: string;
  icon: React.ElementType;
  label: string;
  isActive?: boolean;
  isBeta?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ href, icon: Icon, label, isActive }) => {
  return (
    <a
      href={href}
      className={cn(
        'flex items-center px-4 py-2.5 text-sm font-medium rounded-md transition-colors',
        isActive
          ? 'bg-sidebar-primary text-sidebar-primary-foreground'
          : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
      )}
    >
      <Icon className="mr-3 h-5 w-5" />
      {label}
    </a>
  );
};

interface SidebarNavProps {
  className?: string;
}

const SidebarNav: React.FC<SidebarNavProps> = ({ className }) => {
  const navItems: NavItemProps[] = [
    { href: '#', icon: LayoutGrid, label: 'Dashboard', isActive: true },
    { href: '#', icon: Users, label: 'Leads' },
    { href: '#', icon: UserSquare, label: 'Customers' },
    { href: '#', icon: FileText, label: 'Proposals' },
    { href: '#', icon: Receipt, label: 'Invoices' },
    { href: '#', icon: Archive, label: 'Items' },
    { href: '#', icon: Mail, label: 'Mail' },
    { href: '#', icon: Briefcase, label: 'Shoebox' },
    { href: '#', icon: CalendarDays, label: 'Calendar' },
  ];

  const footerNavItems: NavItemProps[] = [
    { href: '#', icon: HelpCircle, label: 'Help' },
    { href: '#', icon: Settings, label: 'Settings' },
  ];

  return (
    <aside className={cn('fixed top-0 left-0 h-screen w-64 bg-sidebar text-sidebar-foreground flex flex-col p-4 space-y-4 border-r border-sidebar-border', className)}>
      <div className="flex items-center justify-between px-2 pt-2 pb-4">
        <div className="flex items-center space-x-2">
          <div className="p-2 bg-primary rounded-full">
            <Circle className="h-6 w-6 text-primary-foreground" /> 
          </div>
          <span className="font-bold text-lg text-foreground">bo</span>
        </div>
        <button className="text-sidebar-foreground hover:text-sidebar-accent-foreground">
          <MenuIcon className="h-6 w-6" />
        </button>
      </div>
      
      <nav className="flex-grow space-y-1.5">
        {navItems.map((item) => (
          <NavItem key={item.label} {...item} />
        ))}
      </nav>

      <div className="mt-auto space-y-1.5 border-t border-sidebar-border pt-4">
        {footerNavItems.map((item) => (
          <NavItem key={item.label} {...item} />
        ))}
      </div>
    </aside>
  );
};

export default SidebarNav;
