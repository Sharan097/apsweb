
"use client";

import { Sidebar } from "@/components/dashboard/Sidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { ScansView } from "@/components/scans/ScansView";

export default function ScansPage() {
  return (
    <div className="flex h-screen w-full bg-slate-50 dark:bg-[#0a0d14]">
      <Sidebar />

      <main className="flex-1 p-6 space-y-6">
        <DashboardHeader />
        <ScansView />
      </main>
    </div>
  );
}