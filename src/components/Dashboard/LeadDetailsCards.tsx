import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Info } from 'lucide-react';

interface ReasonItem {
  percentage: string;
  description: string;
}

const reasonsLostData: ReasonItem[] = [
  { percentage: '40%', description: 'The proposal is unclear' },
  { percentage: '20%', description: 'However venture pursuit' },
  { percentage: '10%', description: 'Other' },
  { percentage: '30%', description: 'The proposal is unclear' }, // As per image
];

interface OtherDataItem {
  value: string;
  description: string;
  hasInfoIcon?: boolean;
  tooltipText?: string;
}

const otherDataItems: OtherDataItem[] = [
  { value: '900', description: 'total leads count' },
  { value: '12', description: 'days in average to convert lead' },
  { value: '30', description: 'inactive leads', hasInfoIcon: true, tooltipText: 'Leads with no activity in the last 30 days.' },
];

interface LeadDetailsCardsProps {
  className?: string;
}

const LeadDetailsCards: React.FC<LeadDetailsCardsProps> = ({ className }) => {
  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-2 gap-6', className)}>
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-foreground">Reasons of leads lost</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-x-6 gap-y-8">
          {reasonsLostData.map((reason, index) => (
            <div key={index}>
              <p className="text-3xl font-bold text-foreground">{reason.percentage}</p>
              <p className="text-sm text-muted-foreground mt-1">{reason.description}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-foreground">Other data</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {otherDataItems.map((item, index) => (
            <div key={index}>
              <p className="text-3xl font-bold text-foreground">{item.value}</p>
              <div className="flex items-center mt-1">
                <p className="text-sm text-muted-foreground">{item.description}</p>
                {item.hasInfoIcon && (
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Info className="h-3.5 w-3.5 text-muted-foreground ml-1.5 cursor-help" />
                      </TooltipTrigger>
                      <TooltipContent className="bg-gray-800 text-white p-2 rounded-md text-xs">
                        <p>{item.tooltipText || 'More information'}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default LeadDetailsCards;
