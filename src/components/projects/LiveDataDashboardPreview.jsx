import React, { useState } from 'react';
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  PieChart, 
  Pie, 
  Cell, 
  CartesianGrid, 
  Legend 
} from 'recharts';
import { categoryBreakdownData, liveSalesData, churnCohortData } from '../../data/portfolioData';

export default function LiveDataDashboardPreview({ type }) {
  const [activeTab, setActiveTab] = useState('monthly');

  if (type === 'retail') {
    return (
      <div className="rounded-xl bg-slate-950/70 border border-cyan-500/30 p-4 font-sans text-xs">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="font-semibold text-slate-200">Power BI Interactive Preview: Retail Performance</span>
          </div>
          <div className="flex items-center gap-1 bg-slate-900 rounded-lg p-0.5 border border-slate-800">
            <button
              onClick={() => setActiveTab('monthly')}
              className={`px-2 py-1 rounded text-[10px] font-medium transition-all ${
                activeTab === 'monthly' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              Monthly Revenue
            </button>
            <button
              onClick={() => setActiveTab('category')}
              className={`px-2 py-1 rounded text-[10px] font-medium transition-all ${
                activeTab === 'category' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              Category Share
            </button>
          </div>
        </div>

        <div className="h-48 w-full">
          {activeTab === 'monthly' ? (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={liveSalesData} margin={{ top: 5, right: 5, left: -25, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" vertical={false} />
                <XAxis dataKey="month" stroke="#64748B" fontSize={10} tickLine={false} />
                <YAxis stroke="#64748B" fontSize={10} tickLine={false} tickFormatter={(v) => `$${v/1000}k`} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0B132B', borderColor: '#0284C7', borderRadius: '8px', fontSize: '11px' }}
                  formatter={(value) => [`$${value.toLocaleString()}`, 'Sales Volume']}
                />
                <Bar dataKey="sales" fill="#38BDF8" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryBreakdownData}
                  cx="50%"
                  cy="50%"
                  innerRadius={38}
                  outerRadius={65}
                  paddingAngle={4}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  fontSize={10}
                >
                  {categoryBreakdownData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0B132B', borderColor: '#0284C7', borderRadius: '8px', fontSize: '11px' }}
                  formatter={(value) => [`${value}% share`, 'Revenue Distribution']}
                />
              </PieChart>
            </ResponsiveContainer>
          )}
        </div>
        <div className="mt-2 text-[10px] text-slate-400 flex items-center justify-between border-t border-slate-800/80 pt-2">
          <span>Source: MySQL Aggregated Sales Views</span>
          <span className="font-mono text-cyan-400">DAX Measures Active</span>
        </div>
      </div>
    );
  }

  if (type === 'churn') {
    return (
      <div className="rounded-xl bg-slate-950/70 border border-cyan-500/30 p-4 font-sans text-xs">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse"></span>
            <span className="font-semibold text-slate-200">Tableau Worksheet Simulation: Churn vs Tenure</span>
          </div>
          <span className="text-[10px] font-mono text-cyan-300 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
            Cohort Retention
          </span>
        </div>

        <div className="h-48 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={churnCohortData} margin={{ top: 5, right: 5, left: -25, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" vertical={false} />
              <XAxis dataKey="tenureGroup" stroke="#64748B" fontSize={10} tickLine={false} />
              <YAxis stroke="#64748B" fontSize={10} tickLine={false} tickFormatter={(v) => `${v}%`} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0B132B', borderColor: '#F43F5E', borderRadius: '8px', fontSize: '11px' }}
                formatter={(value, name) => [`${value}%`, name === 'active' ? 'Retained Rate' : 'Churn Rate']}
              />
              <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '4px' }} />
              <Bar dataKey="active" name="Retained %" fill="#0284C7" stackId="a" radius={[0, 0, 0, 0]} />
              <Bar dataKey="churned" name="Churned %" fill="#F43F5E" stackId="a" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-2 text-[10px] text-slate-400 flex items-center justify-between border-t border-slate-800/80 pt-2">
          <span>Identified High-Risk Cohort: Month-to-Month Contracts (38% churn)</span>
          <span className="font-mono text-rose-400">Attrition Risk Factor</span>
        </div>
      </div>
    );
  }

  // Fallback / Generic preview
  return (
    <div className="h-44 rounded-xl bg-slate-950/70 border border-slate-800 flex flex-col items-center justify-center p-4 text-center">
      <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-2">
        <span className="font-mono text-xs font-bold">&lt;/&gt;</span>
      </div>
      <p className="text-xs font-semibold text-slate-300">Architecture Diagram & Query Schema</p>
      <p className="text-[11px] text-slate-500 max-w-xs mt-1">Dual-database model combining Neo4j graph nodes and MongoDB document records.</p>
    </div>
  );
}
