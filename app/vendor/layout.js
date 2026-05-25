"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Package, ShoppingCart, Settings, LogOut } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/Button"
import { signOut } from "next-auth/react"

const sidebarItems = [
    { icon: LayoutDashboard, label: "Overview", href: "/vendor" },
    { icon: Package, label: "Products", href: "/vendor/products" },
    { icon: ShoppingCart, label: "Orders", href: "/vendor/orders" },
    { icon: Settings, label: "Settings", href: "/vendor/settings" },
]

export default function VendorLayout({ children }) {
    const pathname = usePathname()

    return (
        <div className="min-h-screen flex bg-gray-50">
            {/* Sidebar */}
            <aside className="w-64 bg-charcoal text-white hidden md:flex flex-col">
                <div className="p-6 border-b border-gray-800">
                    <h2 className="text-2xl font-serif font-bold text-gold">Vendor Portal</h2>
                </div>

                <nav className="flex-1 p-4 space-y-2">
                    {sidebarItems.map((item) => {
                        const Icon = item.icon
                        const isActive = pathname === item.href

                        return (
                            <Link key={item.href} href={item.href}>
                                <span className={cn(
                                    "flex items-center gap-3 px-4 py-3 rounded-md transition-colors",
                                    isActive
                                        ? "bg-gold text-charcoal font-medium"
                                        : "text-gray-400 hover:bg-gray-800 hover:text-white"
                                )}>
                                    <Icon className="h-5 w-5" />
                                    {item.label}
                                </span>
                            </Link>
                        )
                    })}
                </nav>

                <div className="p-4 border-t border-gray-800">
                    <Button
                        variant="ghost"
                        className="w-full justify-start text-gray-400 hover:text-white hover:bg-gray-800"
                        onClick={() => signOut({ callbackUrl: '/login' })}
                    >
                        <LogOut className="h-5 w-5 mr-3" />
                        Sign Out
                    </Button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto">
                <div className="p-8">
                    {children}
                </div>
            </main>
        </div>
    )
}
