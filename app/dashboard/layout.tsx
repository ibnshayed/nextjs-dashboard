import { AppSidebar } from "@/app/dashboard/_components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import Header from "../../components/headers/Header";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Header />
        <main className="p-4 border-t border-gray-200 dark:border-gray-700 rounded-t-xl">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
