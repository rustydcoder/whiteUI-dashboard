"use client";

import Dashboard from "@/components/dashboard";
import IncomeBreakdown from "@/components/incomeBreakdown";
import IncomeDetails from "@/components/incomeDetails";
import LatestEvents from "@/components/latestEvents";
import LatestUpdates from "@/components/latestUpdates";
import UpcomingEvents from "@/components/upcomingEvents";
import WelcomeNav from "@/components/welcomenav";
import YourSales from "@/components/yourSales";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full pl-20">
      <div className="hidden md:block md:basis-[28%]">
        <WelcomeNav>
          <LatestUpdates />
          <UpcomingEvents />
        </WelcomeNav>
      </div>
      <div className="w-full bg-neutral-100 text-sm md:basis-[72%]">
        <Dashboard>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 py-4 gap-3">
            <YourSales />
            <LatestEvents />
            <IncomeBreakdown />
            <IncomeDetails />
          </div>
        </Dashboard>
      </div>
    </main>
  );
}
