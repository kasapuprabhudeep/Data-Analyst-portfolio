import React, { useState } from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';
import { TrendingUp, Database, ArrowUpRight, BarChart2, ShieldCheck } from 'lucide-react';
import { liveSalesData } from '../../data/portfolioData';

export default function MetricPreviewChart() {
  const [activeMetric, setActiveMetric] = useState('sales');

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-900/95 border border-cyan-500/40 px-3 py-2 rounded-lg shadow-xl text-xs backdrop-blur-md">
          <p className="font-semibold text-slate-300">{label}</p>
          <p className="text-cyan-400 font-bold text-sm">
            ${payload[0].value.toLocaleString()}
          </p>
          <span className="text-[10px] text-slate-400">Validated SQL Metric</span>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="relative rounded-2xl glass-card p-5 md:p-6 shadow-2xl overflow-hidden border border-slate-700/50 dark:border-slate-800">
      {/* Background glow */}
      <div className="absolute -top-16 -right-16 w-44 h-44 bg-electric-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-44 h-44 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Widget Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-700/40 dark:border-slate-800/80">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-electric-500/10 border border-electric-500/30 flex items-center justify-center text-cyan-400">
            <BarChart2 className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
              Interactive Analytics Preview
            </h4>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Real-time Business Intelligence Model
            </p>
          </div>
        </div>

        {/* Query pill */}
        <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-[10px] font-mono text-cyan-300">
          <Database className="w-3 h-3 text-cyan-400" />
          <span>SQL + Power BI Engine</span>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 gap-3 my-4">
        <div 
          onClick={() => setActiveMetric('sales')}
          className={`cursor-pointer p-3 rounded-xl border transition-all ${
            activeMetric === 'sales'
              ? 'bg-electric-500/15 border-electric-500/50 text-white shadow-sm'
              : 'bg-slate-800/30 border-slate-700/40 text-slate-400 hover:border-slate-600'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-medium text-slate-400">Total Analyzed Sales</span>
            <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
          </div>
          <div className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mt-1">
            $478,000
          </div>
          <span className="text-[10px] text-cyan-500 font-medium">8 Months Trend</span>
        </div>

        <div 
          onClick={() => setActiveMetric('profit')}
          className={`cursor-pointer p-3 rounded-xl border transition-all ${
            activeMetric === 'profit'
              ? 'bg-electric-500/15 border-electric-500/50 text-white shadow-sm'
              : 'bg-slate-800/30 border-slate-700/40 text-slate-400 hover:border-slate-600'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-medium text-slate-400">Net Profit Margin</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
          </div>
          <div className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mt-1">
            $162,100
          </div>
          <span className="text-[10px] text-emerald-400 font-medium">33.9% Average</span>
        </div>
      </div>

      {/* Visual Recharts Area */}
      <div className="h-44 w-full mt-2">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={liveSalesData} margin={{ top: 5, right: 10, left: -25, bottom: 0 }}>
            <defs>
              <linearGradient id="metricGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#38BDF8" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#0284C7" stopOpacity={0.0} />
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="month" 
              stroke="#64748B" 
              fontSize={10} 
              tickLine={false}
              axisLine={false}
            />
            <YAxis 
              stroke="#64748B" 
              fontSize={10} 
              tickLine={false}
              axisLine={false}
              tickFormatter={(v) => `$${v / 1000}k`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey={activeMetric}
              stroke="#38BDF8"
              strokeWidth={2.5}
              fillOpacity={1}
              fill="url(#metricGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Footer live status */}
      <div className="mt-3 pt-3 border-t border-slate-700/40 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Sample Analytics Pipeline Active</span>
        </div>
        <span className="font-mono text-[10px] text-cyan-400/80">SQL • DAX • Python</span>
      </div>
    </div>
  );
}
