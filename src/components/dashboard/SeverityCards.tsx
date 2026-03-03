import React from "react";
import { Ban, AlertTriangle, Search } from "lucide-react";
import { motion } from "@/lib/mocks";

const severities = [
  { 
    title: "Critical Severity", count: 86, trend: "+2% increase than yesterday", 
    isUp: true, icon: Ban, color: "text-rose-600", bg: "bg-rose-100 dark:bg-rose-900/20",
    trendColor: "text-rose-600 dark:text-rose-400"
  },
  { 
    title: "High Severity", count: 16, trend: "+0.9% increase than yesterday", 
    isUp: true, icon: AlertTriangle, color: "text-orange-500", bg: "bg-orange-100 dark:bg-orange-900/20",
    trendColor: "text-rose-600 dark:text-rose-400"
  },
  { 
    title: "Medium Severity", count: 26, trend: "↓ -0.9% decrease than yesterday", 
    isUp: false, icon: AlertTriangle, color: "text-yellow-600", bg: "bg-yellow-100 dark:bg-yellow-900/20",
    trendColor: "text-emerald-600 dark:text-emerald-400"
  },
  { 
    title: "Low Severity", count: 16, trend: "+0.9% increase than yesterday", 
    isUp: true, icon: Search, color: "text-blue-600", bg: "bg-blue-100 dark:bg-blue-900/20",
    trendColor: "text-rose-600 dark:text-rose-400"
  },
];

export function SeverityCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {severities.map((item, idx) => (
        <motion.div 
          key={idx} 
          className="bg-white dark:bg-zinc-900 p-5 rounded-xl border border-slate-200 dark:border-zinc-800 shadow-sm transition-transform hover:-translate-y-1 duration-200"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-slate-500 dark:text-slate-400 font-medium text-sm">{item.title}</h3>
            <div className={`p-2 rounded-lg ${item.bg} ${item.color}`}>
              <item.icon className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-end gap-3">
            <span className="text-4xl font-bold text-slate-900 dark:text-slate-100">{item.count}</span>
          </div>
          <p className={`text-xs mt-2 font-medium ${item.trendColor}`}>
            {item.isUp ? "↑ " : ""}{item.trend}
          </p>
        </motion.div>
      ))}
    </div>
  );
}