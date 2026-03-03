"use client";

import { Sidebar } from "@/components/dashboard/Sidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { SummaryBar } from "@/components/dashboard/SummaryBar";
import { SeverityCards } from "@/components/dashboard/SeverityCards";
import { ScansTable } from "@/components/dashboard/ScansTable";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-[#0F0F0F]">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <DashboardHeader />
          <SummaryBar />
          <SeverityCards />
          <ScansTable />
        </div>
      </main>

    </div>
  );
}