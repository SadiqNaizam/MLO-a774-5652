import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { CalendarDays, ChevronDown } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, Legend, Area, AreaChart } from 'recharts';

interface LineChartDataPoint {
  month: string;
  closedWon: number;
  closedLost: number;
}

const lineChartData: LineChartDataPoint[] = [
  { month: 'March', closedWon: 88, closedLost: 65 },
  { month: 'April', closedWon: 62, closedLost: 40 },
  { month: 'May', closedWon: 75, closedLost: 45 },
  { month: 'June', closedWon: 65, closedLost: 8 }, // Sharp drop for lost
  { month: 'July', closedWon: 82, closedLost: 42 },
  { month: 'August', closedWon: 105, closedLost: 60 }, // Peak for won
];

interface LineChartCardProps {
  className?: string;
}

const LineChartCard: React.FC<LineChartCardProps> = ({ className }) => {
  return (
    <Card className={cn('w-full', className)}>
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <CardTitle className="text-lg font-semibold text-foreground mb-2 sm:mb-0">Leads tracking</CardTitle>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="text-muted-foreground text-xs h-8 w-full sm:w-auto">
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
        </div>
        <div className="flex items-baseline space-x-6 mt-2">
          <div>
            <span className="text-3xl font-bold text-foreground">680</span>
            <span className="ml-1 text-sm text-muted-foreground">total closed</span>
          </div>
          <div>
            <span className="text-3xl font-bold text-foreground">70</span>
            <span className="ml-1 text-sm text-muted-foreground">total lost</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="h-[300px] w-full pt-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={lineChartData} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
            <defs>
              <linearGradient id="colorClosedWon" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#14B8A6" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="#14B8A6" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorClosedLost" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#EF4444" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#EF4444" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
            <XAxis 
              dataKey="month" 
              tickLine={false} 
              axisLine={false} 
              tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
            />
            <YAxis 
              tickLine={false} 
              axisLine={false} 
              tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
              domain={[0, 'dataMax + 10']}
            />
            <RechartsTooltip 
              contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: 'var(--radius)'}}
              itemStyle={{ color: 'hsl(var(--card-foreground))' }}
            />
            <Legend 
              verticalAlign="bottom" 
              height={36} 
              iconType="plainline"
              wrapperStyle={{ fontSize: '12px', color: 'hsl(var(--muted-foreground))' }}
              formatter={(value, entry) => {
                const color = entry.color;
                return <span style={{ color }}>{value}</span>;
              }}
            />
            <Area type="monotone" dataKey="closedWon" name="Closed won" stroke="#14B8A6" fillOpacity={1} fill="url(#colorClosedWon)" strokeWidth={2.5} dot={{ r: 4, fill: '#14B8A6', strokeWidth: 0 }} activeDot={{ r: 6, fill: '#14B8A6', strokeWidth: 0 }} />
            <Area type="monotone" dataKey="closedLost" name="Closed lost" stroke="#EF4444" fillOpacity={1} fill="url(#colorClosedLost)" strokeWidth={2.5} dot={{ r: 4, fill: '#EF4444', strokeWidth: 0 }} activeDot={{ r: 6, fill: '#EF4444', strokeWidth: 0 }} />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default LineChartCard;
