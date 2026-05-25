"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Minus, Plus, X, ShoppingBag } from "lucide-react"
import { useCart } from "@/context/CartContext"

export default function CartPage() {
    const { cart, updateQuantity, removeFromCart, getCartTotal } = useCart()

    const subtotal = getCartTotal()
    const shipping = subtotal > 100 ? 0 : 10
    const total = subtotal + shipping

    if (cart.length === 0) {
        return (
            <div className="min-h-screen bg-cream">
                <div className="container mx-auto px-4 py-12">
                    <h1 className="text-3xl font-serif font-bold text-charcoal mb-8">Shopping Cart</h1>

                    <Card className="border-none shadow-md">
                        <CardContent className="py-16 text-center">
                            <ShoppingBag className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                            <h2 className="text-2xl font-serif font-bold text-charcoal mb-2">Your cart is empty</h2>
                            <p className="text-gray-500 mb-6">Add some products to get started!</p>
                            <Link href="/products">
                                <Button variant="gold" size="lg">
                                    Browse Products
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-cream">
            <div className="container mx-auto px-4 py-12">
                <h1 className="text-3xl font-serif font-bold text-charcoal mb-8">Shopping Cart</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Cart Items */}
                    <div className="lg:col-span-2 space-y-4">
                        {cart.map((item) => (
                            <Card key={item.id} className="border-none shadow-md">
                                <CardContent className="p-6">
                                    <div className="flex gap-4">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-24 h-24 object-cover rounded"
                                        />

                                        <div className="flex-1">
                                            <div className="flex justify-between items-start mb-2">
                                                <div>
                                                    <h3 className="font-serif font-bold text-charcoal">{item.name}</h3>
                                                    <p className="text-sm text-gray-500">{item.vendor}</p>
                                                </div>
                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="text-gray-400 hover:text-red-600 transition-colors"
                                                >
                                                    <X className="h-5 w-5" />
                                                </button>
                                            </div>

                                            <div className="flex items-center justify-between mt-4">
                                                <div className="flex items-center border rounded-md">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        className="px-3 py-1 hover:bg-gray-100 transition-colors"
                                                    >
                                                        <Minus className="h-4 w-4" />
                                                    </button>
                                                    <span className="px-4 py-1 border-x">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="px-3 py-1 hover:bg-gray-100 transition-colors"
                                                    >
                                                        <Plus className="h-4 w-4" />
                                                    </button>
                                                </div>
                                                <p className="text-xl font-bold text-charcoal">${(item.price * item.quantity).toFixed(2)}</p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <Card className="border-none shadow-md sticky top-24">
                            <CardContent className="p-6 space-y-4">
                                <h2 className="text-xl font-serif font-bold text-charcoal">Order Summary</h2>

                                <div className="space-y-2 py-4 border-y">
                                    <div className="flex justify-between text-gray-600">
                                        <span>Subtotal</span>
                                        <span>${subtotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-600">
                                        <span>Shipping</span>
                                        <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                                    </div>
                                </div>

                                <div className="flex justify-between text-lg font-bold text-charcoal">
                                    <span>Total</span>
                                    <span>${total.toFixed(2)}</span>
                                </div>

                                {subtotal < 100 && (
                                    <p className="text-sm text-gray-500 bg-gray-50 p-3 rounded">
                                        Add ${(100 - subtotal).toFixed(2)} more for free shipping!
                                    </p>
                                )}

                                <Link href="/checkout">
                                    <Button variant="gold" size="lg" className="w-full">
                                        Proceed to Checkout
                                    </Button>
                                </Link>

                                <Link href="/products">
                                    <Button variant="outline" size="lg" className="w-full">
                                        Continue Shopping
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}
