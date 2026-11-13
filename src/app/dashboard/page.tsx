import DashboardLayout from "@/components/layout/DashboardLayout";
import StatCard from "@/components/dashboard/StatCard";
import RevenueChart from "@/components/dashboard/RevenueChart";
import RecentInvoices from "@/components/dashboard/RecentInvoices";

export default function DashboardPage() {
  return (
    <DashboardLayout title="Dashboard">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Overview</h2>
        <p className="mt-1 text-sm text-gray-500">
          Here is what&apos;s happening with your business.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Total Revenue"
          value="$24,500"
          description="+12.5% from last month"
        />

        <StatCard
          title="Active Subscriptions"
          value="1,240"
          description="+8.2% from last month"
        />

        <StatCard
          title="Total Customers"
          value="856"
          description="+5.4% from last month"
        />

        <StatCard
          title="Pending Invoices"
          value="24"
          description="8 overdue invoices"
        />
      </div>


      <div className="mt-6">
          <RevenueChart  />
      </div>

      <div className="mt-6">
        <RecentInvoices />
      </div>
    </DashboardLayout>
  );
}