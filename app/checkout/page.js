"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Badge } from "@/components/ui/Badge"
import { CreditCard, Wallet, ArrowLeft } from "lucide-react"

// Mock cart data
const cartItems = [
    { id: 1, name: "Luxury Silk Scarf", price: 120, quantity: 1, image: "https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?q=80&w=991&auto=format&fit=crop" },
    { id: 2, name: "Gold Plated Watch", price: 450, quantity: 1, image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1999&auto=format&fit=crop" },
]

export default function CheckoutPage() {
    const router = useRouter()
    const [paymentMethod, setPaymentMethod] = useState("card")
    const [loading, setLoading] = useState(false)

    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
    const shipping = 0
    const tax = subtotal * 0.1
    const total = subtotal + shipping + tax

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        // Simulate order processing
        setTimeout(() => {
            router.push("/checkout/success?orderId=ORD-" + Date.now())
        }, 2000)
    }

    return (
        <div className="min-h-screen bg-cream">
            <div className="container mx-auto px-4 py-12">
                <Button
                    variant="ghost"
                    className="mb-6 gap-2"
                    onClick={() => router.back()}
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Cart
                </Button>

                <h1 className="text-3xl font-serif font-bold text-charcoal mb-8">Checkout</h1>

                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Checkout Form */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Shipping Address */}
                            <Card className="border-none shadow-md">
                                <CardHeader>
                                    <CardTitle className="font-serif">Shipping Address</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <Input placeholder="First Name" required />
                                        <Input placeholder="Last Name" required />
                                    </div>
                                    <Input placeholder="Email" type="email" required />
                                    <Input placeholder="Phone Number" type="tel" required />
                                    <Input placeholder="Street Address" required />
                                    <div className="grid grid-cols-2 gap-4">
                                        <Input placeholder="City" required />
                                        <Input placeholder="State/Province" required />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <Input placeholder="ZIP/Postal Code" required />
                                        <Input placeholder="Country" required />
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Payment Method */}
                            <Card className="border-none shadow-md">
                                <CardHeader>
                                    <CardTitle className="font-serif">Payment Method</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <button
                                            type="button"
                                            onClick={() => setPaymentMethod("card")}
                                            className={`p-4 border-2 rounded-lg flex items-center gap-3 transition-all ${paymentMethod === "card"
                                                    ? "border-gold bg-gold/5"
                                                    : "border-gray-200 hover:border-gray-300"
                                                }`}
                                        >
                                            <CreditCard className="h-5 w-5 text-gold" />
                                            <div className="text-left">
                                                <p className="font-medium">Credit Card</p>
                                                <p className="text-xs text-gray-500">Visa, Mastercard, Amex</p>
                                            </div>
                                        </button>

                                        <button
                                            type="button"
                                            onClick={() => setPaymentMethod("cod")}
                                            className={`p-4 border-2 rounded-lg flex items-center gap-3 transition-all ${paymentMethod === "cod"
                                                    ? "border-gold bg-gold/5"
                                                    : "border-gray-200 hover:border-gray-300"
                                                }`}
                                        >
                                            <Wallet className="h-5 w-5 text-gold" />
                                            <div className="text-left">
                                                <p className="font-medium">Cash on Delivery</p>
                                                <p className="text-xs text-gray-500">Pay when you receive</p>
                                            </div>
                                        </button>
                                    </div>

                                    {paymentMethod === "card" && (
                                        <div className="space-y-4 pt-4 border-t">
                                            <Input placeholder="Card Number" required />
                                            <div className="grid grid-cols-2 gap-4">
                                                <Input placeholder="MM/YY" required />
                                                <Input placeholder="CVV" required />
                                            </div>
                                            <Input placeholder="Cardholder Name" required />
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        </div>

                        {/* Order Summary */}
                        <div className="lg:col-span-1">
                            <Card className="border-none shadow-md sticky top-24">
                                <CardHeader>
                                    <CardTitle className="font-serif">Order Summary</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    {/* Cart Items */}
                                    <div className="space-y-3 max-h-64 overflow-y-auto">
                                        {cartItems.map(item => (
                                            <div key={item.id} className="flex gap-3">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="w-16 h-16 object-cover rounded"
                                                />
                                                <div className="flex-1">
                                                    <p className="text-sm font-medium text-charcoal">{item.name}</p>
                                                    <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                                                    <p className="text-sm font-bold text-charcoal">${item.price}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="border-t pt-4 space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-600">Subtotal</span>
                                            <span className="font-medium">${subtotal.toFixed(2)}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-600">Shipping</span>
                                            <span className="font-medium text-green-600">FREE</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-600">Tax (10%)</span>
                                            <span className="font-medium">${tax.toFixed(2)}</span>
                                        </div>
                                    </div>

                                    <div className="border-t pt-4">
                                        <div className="flex justify-between text-lg font-bold">
                                            <span>Total</span>
                                            <span className="text-gold">${total.toFixed(2)}</span>
                                        </div>
                                    </div>

                                    <Button
                                        type="submit"
                                        variant="gold"
                                        size="lg"
                                        className="w-full"
                                        disabled={loading}
                                    >
                                        {loading ? "Processing..." : "Place Order"}
                                    </Button>

                                    <p className="text-xs text-gray-500 text-center">
                                        By placing your order, you agree to our terms and conditions
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
