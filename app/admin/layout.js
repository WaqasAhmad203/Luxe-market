"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Users, Package, ShoppingBag, Settings } from "lucide-react"

export default function AdminLayout({ children }) {
    const pathname = usePathname()

    const navItems = [
        { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
        { href: "/admin/vendors", label: "Vendors", icon: Users },
        { href: "/admin/products", label: "Products", icon: Package },
        { href: "/admin/orders", label: "Orders", icon: ShoppingBag },
        { href: "/admin/settings", label: "Settings", icon: Settings },
    ]

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="flex">
                {/* Sidebar */}
                <aside className="w-64 bg-charcoal text-white min-h-screen sticky top-0">
                    <div className="p-6 border-b border-gray-700">
                        <h1 className="text-2xl font-serif font-bold text-gold">Admin Panel</h1>
                        <p className="text-sm text-gray-400 mt-1">LuxeMarket</p>
                    </div>

                    <nav className="p-4 space-y-2">
                        {navItems.map((item) => {
                            const Icon = item.icon
                            const isActive = pathname === item.href

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive
                                            ? "bg-gold text-charcoal font-medium"
                                            : "text-gray-300 hover:bg-gray-800 hover:text-white"
                                        }`}
                                >
                                    <Icon className="h-5 w-5" />
                                    {item.label}
                                </Link>
                            )
                        })}
                    </nav>
                </aside>

                {/* Main Content */}
                <main className="flex-1">
                    {children}
                </main>
            </div>
        </div>
    )
}
