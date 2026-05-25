"use client"

import { useParams, useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
import { ArrowLeft, Package, User, MapPin } from "lucide-react"

// Mock Order Detail
const orderDetail = {
    id: "ORD-001",
    customer: {
        name: "John Doe",
        email: "john@example.com",
        address: "123 Main St, New York, NY 10001"
    },
    date: "2024-03-15",
    status: "PAID",
    items: [
        {
            id: 1,
            name: "Luxury Silk Scarf",
            price: 120.00,
            quantity: 1,
            image: "https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?q=80&w=991&auto=format&fit=crop"
        },
    ],
    subtotal: 120.00,
    shipping: 0.00,
    total: 120.00
}

export default function OrderDetailPage() {
    const params = useParams()
    const router = useRouter()

    return (
        <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" onClick={() => router.back()}>
                    <ArrowLeft className="h-4 w-4" />
                </Button>
                <div>
                    <h1 className="text-2xl font-serif font-bold text-charcoal">Order #{orderDetail.id}</h1>
                    <p className="text-gray-500">Placed on {orderDetail.date}</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Customer Info */}
                <Card className="border-none shadow-md">
                    <CardHeader>
                        <CardTitle className="text-base flex items-center gap-2">
                            <User className="h-4 w-4 text-gold" />
                            Customer
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm">
                        <p className="font-medium">{orderDetail.customer.name}</p>
                        <p className="text-gray-500">{orderDetail.customer.email}</p>
                    </CardContent>
                </Card>

                {/* Shipping Address */}
                <Card className="border-none shadow-md">
                    <CardHeader>
                        <CardTitle className="text-base flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-gold" />
                            Shipping
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-gray-600">
                        {orderDetail.customer.address}
                    </CardContent>
                </Card>

                {/* Order Status */}
                <Card className="border-none shadow-md">
                    <CardHeader>
                        <CardTitle className="text-base flex items-center gap-2">
                            <Package className="h-4 w-4 text-gold" />
                            Status
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Badge variant="gold" className="text-sm">{orderDetail.status}</Badge>
                    </CardContent>
                </Card>
            </div>

            {/* Order Items */}
            <Card className="border-none shadow-md">
                <CardHeader>
                    <CardTitle>Order Items</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {orderDetail.items.map((item) => (
                            <div key={item.id} className="flex items-center gap-4 pb-4 border-b last:border-0">
                                <img src={item.image} alt={item.name} className="w-20 h-20 rounded object-cover" />
                                <div className="flex-1">
                                    <p className="font-medium text-charcoal">{item.name}</p>
                                    <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                                </div>
                                <p className="font-semibold text-charcoal">${item.price.toFixed(2)}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 pt-4 border-t space-y-2">
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Subtotal</span>
                            <span className="font-medium">${orderDetail.subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Shipping</span>
                            <span className="font-medium">${orderDetail.shipping.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-lg font-bold pt-2 border-t">
                            <span>Total</span>
                            <span className="text-gold">${orderDetail.total.toFixed(2)}</span>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
