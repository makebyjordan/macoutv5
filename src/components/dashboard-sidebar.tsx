"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { MacOutLogo } from "./icons";
import { LayoutDashboard, Package, Wallet, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

const navItems = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Resumen" },
  { href: "/dashboard/equipos", icon: Package, label: "Gestionar Equipos" },
  { href: "/dashboard/finanzas", icon: Wallet, label: "Gestión Financiera" },
];

export function DashboardSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    sessionStorage.removeItem("mac-out-auth");
    router.push('/');
  }

  return (
    <Sidebar>
      <SidebarHeader>
        <Link href="/dashboard" className="flex items-center gap-2">
          <MacOutLogo className="h-8 w-8 text-accent" />
          <span className="font-headline text-xl font-semibold">Mac-Out</span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton
                asChild
                isActive={pathname === item.href}
                className="font-headline"
              >
                <Link href={item.href}>
                  <item.icon className="h-5 w-5" />
                  {item.label}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
           <SidebarMenuItem>
                <SidebarMenuButton onClick={handleLogout}>
                    <LogOut className="h-5 w-5" />
                    Cerrar Sesión
                </SidebarMenuButton>
           </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
