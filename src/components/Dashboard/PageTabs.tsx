import React from 'react';
import { cn } from '@/lib/utils';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

interface PageTabsProps {
  className?: string;
}

const PageTabs: React.FC<PageTabsProps> = ({ className }) => {
  return (
    <div className={cn(className)}>
      <Tabs defaultValue="leads" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:w-[200px] bg-muted p-1 rounded-md">
          <TabsTrigger value="sales" className="data-[state=active]:bg-card data-[state=active]:text-foreground data-[state=active]:shadow-sm rounded-sm">Sales</TabsTrigger>
          <TabsTrigger value="leads" className="data-[state=active]:bg-card data-[state=active]:text-foreground data-[state=active]:shadow-sm rounded-sm">Leads</TabsTrigger>
        </TabsList>
        {/* TabsContent can be added here if needed for actual content switching */}
        {/* <TabsContent value="sales">Sales Content</TabsContent> */}
        {/* <TabsContent value="leads">Leads Content</TabsContent> */}
      </Tabs>
    </div>
  );
};

export default PageTabs;
