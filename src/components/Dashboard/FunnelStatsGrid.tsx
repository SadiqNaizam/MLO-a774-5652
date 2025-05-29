import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface FunnelStage {
  id: string;
  name: string;
  count: number;
  value: number;
  days: string;
  color: string;
  showTooltip?: boolean;
}

const funnelData: FunnelStage[] = [
  { id: 'discovery', name: 'Discovery', count: 200, value: 200, days: '2 days', color: 'bg-orange-500' },
  { id: 'qualified', name: 'Qualified', count: 100, value: 100, days: '2 days', color: 'bg-yellow-400', showTooltip: true },
  { id: 'inConversation', name: 'In conversation', count: 50, value: 100, days: 'average time on this stage', color: 'bg-indigo-600' }, // Text changed to match hover
  { id: 'negotiations', name: 'Negotiations', count: 20, value: 50, days: '8 days', color: 'bg-green-500' },
  { id: 'closedWon', name: 'Closed won', count: 20, value: 50, days: '10 days', color: 'bg-purple-600' },
];

const totalFunnelCount = funnelData.reduce((sum, stage) => sum + stage.count, 0);

interface FunnelStatsGridProps {
  className?: string;
}

const FunnelStatsGrid: React.FC<FunnelStatsGridProps> = ({ className }) => {
  return (
    <Card className={cn('w-full', className)}>
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">Funnel count</CardTitle>
        <div className="flex items-baseline space-x-2 mt-1">
          <span className="text-4xl font-bold text-foreground">600</span>
          <span className="text-sm text-muted-foreground">active leads</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex h-3 rounded-full overflow-hidden">
          {funnelData.map((stage) => (
            <div
              key={stage.id}
              className={cn('h-full', stage.color)}
              style={{ width: `${(stage.count / totalFunnelCount) * 100}%` }}
            />
          ))}
        </div>
        <ul className="space-y-3">
          {funnelData.map((stage) => (
            <li key={stage.id} className="grid grid-cols-[auto_1fr_auto_auto_auto] items-center gap-x-3 text-sm">
              <div className={cn('w-2.5 h-2.5 rounded-full', stage.color)} />
              <span className="text-foreground truncate">{stage.name}</span>
              <span className="text-muted-foreground text-right">{stage.count}</span>
              <span className="text-muted-foreground text-right">$ {stage.value}</span>
              {stage.showTooltip ? (
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="text-muted-foreground text-right cursor-default">{stage.days}</span>
                    </TooltipTrigger>
                    <TooltipContent className="bg-gray-800 text-white p-2 rounded-md text-xs">
                      <p>average time on this stage</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ) : (
                <span className="text-muted-foreground text-right">{stage.days}</span>
              )}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default FunnelStatsGrid;
