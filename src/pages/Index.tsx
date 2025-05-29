import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import PageTabs from '../components/Dashboard/PageTabs';
import FunnelStatsGrid from '../components/Dashboard/FunnelStatsGrid';
import PieChartCard from '../components/Dashboard/PieChartCard';
import LineChartCard from '../components/Dashboard/LineChartCard';
import LeadDetailsCards from '../components/Dashboard/LeadDetailsCards';

// Per Project Info: {"targetPage": "Leads Overview"}
const PAGE_TITLE = "Leads Overview";

const DashboardPage: React.FC = () => {
  return (
    <MainAppLayout pageTitle={PAGE_TITLE}>
      {/* PageTabs is the first element in the main content flow */}
      <PageTabs />

      {/* 
        Grid for FunnelStatsGrid and PieChartCard. 
        On extra-large screens (xl), FunnelStatsGrid takes 2/5 and PieChartCard takes 3/5 of the width.
        On smaller screens, they stack vertically.
        This div is a direct child of MainAppLayout's inner content wrapper, so it will benefit from the `gap-6`.
      */}
      <div className="grid grid-cols-1 xl:grid-cols-5 gap-6">
        <FunnelStatsGrid className="xl:col-span-2" />
        <PieChartCard className="xl:col-span-3" />
      </div>

      {/* LineChartCard spans the full width available */}
      <LineChartCard />

      {/* LeadDetailsCards also spans the full width available */}
      <LeadDetailsCards />
    </MainAppLayout>
  );
};

export default DashboardPage;
