"use client"

import { Suspense } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/Badge"
import { CheckCircle, Package, Truck, Home } from "lucide-react"

function OrderSuccessContent() {
    const searchParams = useSearchParams()
    const orderId = searchParams.get("orderId") || "ORD-123456"

    return (
        <div className="min-h-screen bg-cream">
            <div className="container mx-auto px-4 py-12">
                <div className="max-w-3xl mx-auto space-y-8">
                    {/* Success Message */}
                    <Card className="border-none shadow-lg text-center">
                        <CardContent className="py-12">
                            <div className="flex justify-center mb-6">
                                <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center">
                                    <CheckCircle className="h-12 w-12 text-green-600" />
                                </div>
                            </div>
                            <h1 className="text-3xl font-serif font-bold text-charcoal mb-2">
                                Order Placed Successfully!
                            </h1>
                            <p className="text-gray-600 mb-6">
                                Thank you for your purchase. Your order has been confirmed.
                            </p>
                            <div className="inline-flex items-center gap-2 bg-gray-100 px-6 py-3 rounded-lg">
                                <span className="text-sm text-gray-600">Order Number:</span>
                                <span className="font-mono font-bold text-charcoal">{orderId}</span>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Order Details */}
                    <Card className="border-none shadow-md">
                        <CardHeader>
                            <CardTitle className="font-serif">Order Details</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <p className="text-sm text-gray-500 mb-1">Estimated Delivery</p>
                                    <p className="font-medium text-charcoal">3-5 Business Days</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 mb-1">Order Status</p>
                                    <Badge variant="gold">Processing</Badge>
                                </div>
                            </div>

                            <div className="border-t pt-4">
                                <p className="text-sm text-gray-500 mb-1">Shipping Address</p>
                                <p className="font-medium text-charcoal">
                                    123 Luxury Lane<br />
                                    New York, NY 10001<br />
                                    United States
                                </p>
                            </div>

                            <div className="border-t pt-4">
                                <p className="text-sm text-gray-500 mb-3">Order Items</p>
                                <div className="space-y-3">
                                    <div className="flex gap-3">
                                        <img
                                            src="https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?q=80&w=991&auto=format&fit=crop"
                                            alt="Product"
                                            className="w-16 h-16 object-cover rounded"
                                        />
                                        <div className="flex-1">
                                            <p className="font-medium text-charcoal">Luxury Silk Scarf</p>
                                            <p className="text-sm text-gray-500">Qty: 1</p>
                                        </div>
                                        <p className="font-bold text-charcoal">$120.00</p>
                                    </div>
                                    <div className="flex gap-3">
                                        <img
                                            src="https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1999&auto=format&fit=crop"
                                            alt="Product"
                                            className="w-16 h-16 object-cover rounded"
                                        />
                                        <div className="flex-1">
                                            <p className="font-medium text-charcoal">Gold Plated Watch</p>
                                            <p className="text-sm text-gray-500">Qty: 1</p>
                                        </div>
                                        <p className="font-bold text-charcoal">$450.00</p>
                                    </div>
                                </div>
                            </div>

                            <div className="border-t pt-4 space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Subtotal</span>
                                    <span className="font-medium">$570.00</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Shipping</span>
                                    <span className="font-medium text-green-600">FREE</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Tax</span>
                                    <span className="font-medium">$57.00</span>
                                </div>
                                <div className="flex justify-between text-lg font-bold pt-2 border-t">
                                    <span>Total</span>
                                    <span className="text-gold">$627.00</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Order Tracking Timeline */}
                    <Card className="border-none shadow-md">
                        <CardHeader>
                            <CardTitle className="font-serif">Track Your Order</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="h-10 w-10 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                                        <CheckCircle className="h-5 w-5 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-medium text-charcoal">Order Confirmed</p>
                                        <p className="text-sm text-gray-500">Your order has been placed</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 opacity-50">
                                    <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                                        <Package className="h-5 w-5 text-gray-500" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-medium text-charcoal">Processing</p>
                                        <p className="text-sm text-gray-500">We're preparing your items</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 opacity-50">
                                    <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                                        <Truck className="h-5 w-5 text-gray-500" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-medium text-charcoal">Shipped</p>
                                        <p className="text-sm text-gray-500">Your order is on the way</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 opacity-50">
                                    <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                                        <Home className="h-5 w-5 text-gray-500" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-medium text-charcoal">Delivered</p>
                                        <p className="text-sm text-gray-500">Package delivered</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/dashboard" className="flex-1">
                            <Button variant="gold" size="lg" className="w-full">
                                View Order in Dashboard
                            </Button>
                        </Link>
                        <Link href="/products" className="flex-1">
                            <Button variant="outline" size="lg" className="w-full">
                                Continue Shopping
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function OrderSuccessPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-cream flex items-center justify-center"><p>Loading...</p></div>}>
            <OrderSuccessContent />
        </Suspense>
    )
}
