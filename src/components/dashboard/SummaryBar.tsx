import React from "react";
import { RefreshCw } from "lucide-react";

export function SummaryBar() {
  const stats = [
    { label: "Org", value: "Project X" },
    { label: "Owner", value: "Nammagiri" },
    { label: "Total Scans", value: "100" },
    { label: "Scheduled", value: "1000" },
    { label: "Rescans", value: "100" },
    { label: "Failed Scans", value: "100" },
  ];

  return (
    <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-slate-500 dark:text-slate-400 py-2">
      {stats.map((stat, i) => (
        <div key={i} className="flex items-center gap-2">
          <span>{stat.label}:</span>
          <span className="font-semibold text-slate-900 dark:text-slate-100">{stat.value}</span>
          {i !== stats.length - 1 && <span className="ml-4 w-px h-4 bg-slate-300 dark:bg-zinc-700 hidden sm:block" />}
        </div>
      ))}
      <div className="flex items-center gap-1 ml-auto text-teal-600 dark:text-teal-400 font-medium w-full sm:w-auto mt-2 sm:mt-0">
        <RefreshCw className="w-4 h-4" />
        <span>10 mins ago</span>
      </div>
    </div>
  );
}