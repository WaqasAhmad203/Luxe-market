"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
import { Eye, Package } from "lucide-react"

// Mock Order Data
const initialOrders = [
    {
        id: "ORD-001",
        customer: "John Doe",
        date: "2024-03-15",
        total: 120.00,
        status: "PENDING",
        items: 2,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=999&auto=format&fit=crop"
    },
    {
        id: "ORD-002",
        customer: "Jane Smith",
        date: "2024-03-14",
        total: 450.50,
        status: "PAID",
        items: 1,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: "ORD-003",
        customer: "Mike Johnson",
        date: "2024-03-12",
        total: 85.00,
        status: "SHIPPED",
        items: 3,
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=1000&auto=format&fit=crop"
    },
]

const statusColors = {
    PENDING: "secondary",
    PAID: "gold",
    SHIPPED: "default",
    DELIVERED: "default",
    CANCELLED: "destructive"
}

export default function VendorOrdersPage() {
    const [orders, setOrders] = useState(initialOrders)

    const updateStatus = (orderId, newStatus) => {
        setOrders(orders.map(order =>
            order.id === orderId ? { ...order, status: newStatus } : order
        ))
    }

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-serif font-bold text-charcoal">Orders</h1>
                <p className="text-gray-500">Manage and fulfill customer orders.</p>
            </div>

            <Card className="border-none shadow-md overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-gray-500 uppercase bg-gray-50 border-b">
                            <tr>
                                <th className="px-6 py-3">Order ID</th>
                                <th className="px-6 py-3">Customer</th>
                                <th className="px-6 py-3">Date</th>
                                <th className="px-6 py-3">Items</th>
                                <th className="px-6 py-3">Total</th>
                                <th className="px-6 py-3">Status</th>
                                <th className="px-6 py-3 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order) => (
                                <tr key={order.id} className="bg-white border-b hover:bg-gray-50">
                                    <td className="px-6 py-4 font-medium text-charcoal flex items-center gap-3">
                                        <img src={order.image} alt="Product" className="w-10 h-10 rounded object-cover" />
                                        {order.id}
                                    </td>
                                    <td className="px-6 py-4">{order.customer}</td>
                                    <td className="px-6 py-4">{order.date}</td>
                                    <td className="px-6 py-4">{order.items}</td>
                                    <td className="px-6 py-4 font-semibold">${order.total.toFixed(2)}</td>
                                    <td className="px-6 py-4">
                                        <select
                                            value={order.status}
                                            onChange={(e) => updateStatus(order.id, e.target.value)}
                                            className="text-xs px-2 py-1 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gold"
                                        >
                                            <option value="PENDING">Pending</option>
                                            <option value="PAID">Paid</option>
                                            <option value="SHIPPED">Shipped</option>
                                            <option value="DELIVERED">Delivered</option>
                                            <option value="CANCELLED">Cancelled</option>
                                        </select>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <Link href={`/vendor/orders/${order.id}`}>
                                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                                <Eye className="h-4 w-4 text-gray-500" />
                                            </Button>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>
        </div>
    )
}
