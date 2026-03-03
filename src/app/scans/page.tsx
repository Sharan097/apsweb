"use client";

import { Sidebar } from "@/components/dashboard/Sidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { ScansView } from "@/components/scans/ScansView";

export default function ScansPage() {
  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-[#0F0F0F]">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <DashboardHeader />
          <ScansView />
        </div>
      </main>

    </div>
  );
}