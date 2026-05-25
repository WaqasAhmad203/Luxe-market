"use client"

import { useSession } from "next-auth/react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { Package, User, MapPin, CreditCard } from "lucide-react"

// Mock Order Data
const orders = [
    { id: "ORD-001", date: "2024-03-15", total: 120.00, status: "Delivered", items: 2 },
    { id: "ORD-002", date: "2024-03-10", total: 450.50, status: "Processing", items: 1 },
    { id: "ORD-003", date: "2024-02-28", total: 85.00, status: "Shipped", items: 3 },
]

export default function UserDashboard() {
    const { data: session } = useSession()

    return (
        <div className="container mx-auto px-4 py-12 space-y-8">
            <div>
                <h1 className="text-3xl font-serif font-bold text-charcoal">My Account</h1>
                <p className="text-gray-500">Manage your profile and view your orders.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Profile Section */}
                <div className="lg:col-span-1 space-y-6">
                    <Card className="border-none shadow-md">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <User className="h-5 w-5 text-gold" />
                                Profile Information
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center text-2xl font-serif text-charcoal">
                                    {session?.user?.name?.[0] || "U"}
                                </div>
                                <div>
                                    <p className="font-medium text-charcoal">{session?.user?.name || "Guest User"}</p>
                                    <p className="text-sm text-gray-500">{session?.user?.email || "guest@example.com"}</p>
                                </div>
                            </div>
                            <div className="pt-4 border-t border-gray-100 space-y-3">
                                <div className="flex items-center gap-3 text-sm text-gray-600">
                                    <MapPin className="h-4 w-4" />
                                    <span>123 Luxury Lane, New York, NY</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-gray-600">
                                    <CreditCard className="h-4 w-4" />
                                    <span>**** **** **** 4242</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Order History Section */}
                <div className="lg:col-span-2">
                    <Card className="border-none shadow-md">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Package className="h-5 w-5 text-gold" />
                                Order History
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {orders.map((order) => (
                                    <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                                        <div className="space-y-1">
                                            <p className="font-medium text-charcoal">Order #{order.id}</p>
                                            <p className="text-sm text-gray-500">{order.date} • {order.items} items</p>
                                        </div>
                                        <div className="text-right space-y-1">
                                            <p className="font-bold text-charcoal">${order.total.toFixed(2)}</p>
                                            <Badge variant={order.status === "Delivered" ? "default" : "secondary"}>
                                                {order.status}
                                            </Badge>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
