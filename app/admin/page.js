"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { Users, Package, ShoppingBag, DollarSign, TrendingUp, AlertCircle } from "lucide-react"

export default function AdminDashboard() {
    const stats = [
        { label: "Total Revenue", value: "$45,231", change: "+12.5%", icon: DollarSign, color: "text-green-600" },
        { label: "Total Orders", value: "1,234", change: "+8.2%", icon: ShoppingBag, color: "text-blue-600" },
        { label: "Active Vendors", value: "45", change: "+3", icon: Users, color: "text-purple-600" },
        { label: "Total Products", value: "892", change: "+24", icon: Package, color: "text-orange-600" },
    ]

    const pendingVendors = [
        { id: 1, name: "Artisan Crafts", email: "contact@artisan.com", date: "2025-11-20" },
        { id: 2, name: "Tech Innovations", email: "info@techinno.com", date: "2025-11-21" },
        { id: 3, name: "Fashion Forward", email: "hello@fashionfw.com", date: "2025-11-22" },
    ]

    const recentOrders = [
        { id: "ORD-1234", customer: "John Doe", amount: "$450", status: "Pending" },
        { id: "ORD-1235", customer: "Jane Smith", amount: "$280", status: "Shipped" },
        { id: "ORD-1236", customer: "Bob Johnson", amount: "$120", status: "Delivered" },
    ]

    return (
        <div className="p-8">
            <div className="mb-8">
                <h1 className="text-3xl font-serif font-bold text-charcoal">Admin Dashboard</h1>
                <p className="text-gray-500 mt-1">Welcome back! Here's what's happening today.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => {
                    const Icon = stat.icon
                    return (
                        <Card key={index} className="border-none shadow-md">
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <div className={`p-3 rounded-lg bg-gray-100 ${stat.color}`}>
                                        <Icon className="h-6 w-6" />
                                    </div>
                                    <div className="flex items-center gap-1 text-sm text-green-600">
                                        <TrendingUp className="h-4 w-4" />
                                        {stat.change}
                                    </div>
                                </div>
                                <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
                                <p className="text-2xl font-bold text-charcoal">{stat.value}</p>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Pending Vendors */}
                <Card className="border-none shadow-md">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="font-serif">Pending Vendor Approvals</CardTitle>
                        <Badge variant="gold" className="gap-1">
                            <AlertCircle className="h-3 w-3" />
                            {pendingVendors.length}
                        </Badge>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {pendingVendors.map(vendor => (
                                <div key={vendor.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                    <div>
                                        <p className="font-medium text-charcoal">{vendor.name}</p>
                                        <p className="text-sm text-gray-500">{vendor.email}</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <button className="px-3 py-1 text-sm bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                                            Approve
                                        </button>
                                        <button className="px-3 py-1 text-sm bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
                                            Reject
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Recent Orders */}
                <Card className="border-none shadow-md">
                    <CardHeader>
                        <CardTitle className="font-serif">Recent Orders</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {recentOrders.map(order => (
                                <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                    <div>
                                        <p className="font-medium text-charcoal">{order.id}</p>
                                        <p className="text-sm text-gray-500">{order.customer}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold text-charcoal">{order.amount}</p>
                                        <Badge
                                            variant={
                                                order.status === "Delivered" ? "secondary" :
                                                    order.status === "Shipped" ? "gold" : "outline"
                                            }
                                            className="text-xs"
                                        >
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
    )
}
