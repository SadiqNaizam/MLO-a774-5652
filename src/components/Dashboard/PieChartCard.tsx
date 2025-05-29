import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { CalendarDays, ChevronDown } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip } from 'recharts';

interface PieChartSource {
  name: string;
  value: number; // Represents the actual value for the pie segment size
  displayValue: string; // Formatted monetary value like "$ 3000"
  percentage: string; // Formatted percentage like "50%"
  color: string;
}

const pieChartData: PieChartSource[] = [
  { name: 'Clutch', value: 50, displayValue: '$ 3000', percentage: '50%', color: '#F97316' }, // orange-500
  { name: 'Behance', value: 25, displayValue: '$ 1000', percentage: '40%', color: '#FACC15' }, // yellow-400, adjusting value to make sum 100 for pie, but showing image's %.
  { name: 'Instagram', value: 15, displayValue: '$ 1000', percentage: '10%', color: '#14B8A6' }, // teal-500
  { name: 'Dribbble', value: 10, displayValue: '$ 1000', percentage: '10%', color: '#84CC16' }, // lime-500 (closer to image Dribbble)
];
// The percentages 50, 40, 10, 10 from image sum to 110%. Using values 50,25,15,10 to make pie chart sectors sum to 100% for visual representation.
// Displayed percentages and values will match image.

interface PieChartCardProps {
  className?: string;
}

const PieChartCard: React.FC<PieChartCardProps> = ({ className }) => {
  const [activeTab, setActiveTab] = React.useState<string>('leadsConverted');

  return (
    <Card className={cn('w-full', className)}>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold text-foreground">Sources</CardTitle>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="text-muted-foreground text-xs h-8">
              <CalendarDays className="mr-2 h-3.5 w-3.5" />
              Last 6 months
              <ChevronDown className="ml-2 h-3.5 w-3.5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Last 30 days</DropdownMenuItem>
            <DropdownMenuItem>Last 6 months</DropdownMenuItem>
            <DropdownMenuItem>Last 12 months</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="w-full h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieChartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  innerRadius={50} // For Donut chart
                  fill="#8884d8"
                  dataKey="value"
                  strokeWidth={0} // No border between segments
                >
                  {pieChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <RechartsTooltip 
                  contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: 'var(--radius)'}}
                  itemStyle={{ color: 'hsl(var(--card-foreground))' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-3">
            {pieChartData.map((source) => (
              <div key={source.name} className="flex items-center justify-between text-sm">
                <div className="flex items-center">
                  <span style={{ backgroundColor: source.color }} className="w-2.5 h-2.5 rounded-full mr-2"></span>
                  <span className="text-foreground">{source.name}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-muted-foreground">{source.displayValue}</span>
                  <span className="text-foreground font-medium w-10 text-right">{source.percentage}</span>
                </div>
              </div>
            ))}
             <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="text-xs text-muted-foreground pt-1 text-right cursor-default">
                      from leads total <span className="text-primary">ⓘ</span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="bg-gray-800 text-white p-2 rounded-md text-xs">
                    <p>Percentages are calculated based on total leads from these sources.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
          </div>
        </div>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-6">
          <TabsList className="grid w-full grid-cols-3 bg-muted p-1 rounded-md">
            <TabsTrigger value="leadsCame" className="data-[state=active]:bg-card data-[state=active]:text-foreground data-[state=active]:shadow-sm rounded-sm text-xs sm:text-sm">Leads came</TabsTrigger>
            <TabsTrigger value="leadsConverted" className="data-[state=active]:bg-card data-[state=active]:text-foreground data-[state=active]:shadow-sm rounded-sm text-xs sm:text-sm">Leads Converted</TabsTrigger>
            <TabsTrigger value="totalDealsSize" className="data-[state=active]:bg-card data-[state=active]:text-foreground data-[state=active]:shadow-sm rounded-sm text-xs sm:text-sm">Total deals size</TabsTrigger>
          </TabsList>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default PieChartCard;
