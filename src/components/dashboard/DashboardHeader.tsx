import React from "react";
import { Home } from "lucide-react";
import { Button } from "../ui/button";

export function DashboardHeader() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-zinc-800">
      <div className="flex items-center text-sm font-medium text-slate-500 dark:text-slate-400 whitespace-nowrap overflow-x-auto">
        <span className="text-slate-900 dark:text-slate-100 font-semibold">Scan</span>
        <span className="mx-2">/</span>
        <Home className="w-4 h-4 mr-2" />
        Private Assets
        <span className="mx-2">/</span>
        <span className="text-teal-600 dark:text-teal-400">New Scan</span>
      </div>
      
      <div className="flex items-center gap-3">
        <Button variant="outline" className="bg-white dark:bg-zinc-900 border-slate-300 dark:border-zinc-700">
          Export Report
        </Button>
        <Button variant="destructive" className="bg-rose-100 hover:bg-rose-200 text-rose-600 dark:bg-rose-900/30 dark:hover:bg-rose-900/50 dark:text-rose-400 border-none shadow-none">
          Stop Scan
        </Button>
      </div>
    </div>
  );
}