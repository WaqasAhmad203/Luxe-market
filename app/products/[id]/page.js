"use client"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/Badge"
import { Star, ShoppingCart, ArrowLeft, Heart, Share2, CheckCircle } from "lucide-react"
import { ProductReviews } from "@/components/reviews/ProductReviews"
import { useCart } from "@/context/CartContext"

// Mock product data
const productData = {
    1: {
        id: 1,
        name: "Luxury Silk Scarf",
        price: 120,
        vendor: "Luxe Boutique",
        rating: 4.8,
        reviews: 24,
        description: "Exquisite silk scarf handcrafted by artisans. Features intricate patterns and premium quality silk that feels luxurious against your skin.",
        images: [
            "https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?q=80&w=991&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?q=80&w=1000&auto=format&fit=crop"
        ],
        category: "Fashion",
        stock: 15,
        image: "https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?q=80&w=991&auto=format&fit=crop"
    }
}

export default function ProductDetailPage() {
    const params = useParams()
    const router = useRouter()
    const { addToCart } = useCart()
    const [selectedImage, setSelectedImage] = useState(0)
    const [quantity, setQuantity] = useState(1)
    const [addedToCart, setAddedToCart] = useState(false)

    const product = productData[params.id] || productData[1]

    const handleAddToCart = () => {
        addToCart(product, quantity)
        setAddedToCart(true)
    }

    return (
        <div className="min-h-screen bg-cream">
            <div className="container mx-auto px-4 py-8">
                <Button
                    variant="ghost"
                    className="mb-6 gap-2"
                    onClick={() => router.back()}
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Products
                </Button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Image Gallery */}
                    <div className="space-y-4">
                        <div className="relative aspect-square rounded-lg overflow-hidden bg-white shadow-lg">
                            <img
                                src={product.images[selectedImage]}
                                alt={product.name}
                                className="w-full h-full object-cover"
                            />
                            <Badge variant="gold" className="absolute top-4 left-4">
                                New Arrival
                            </Badge>
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                            {product.images.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setSelectedImage(idx)}
                                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${selectedImage === idx ? "border-gold scale-105" : "border-transparent hover:border-gray-300"
                                        }`}
                                >
                                    <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="space-y-6">
                        <div>
                            <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">{product.vendor}</p>
                            <h1 className="text-4xl font-serif font-bold text-charcoal mb-4">{product.name}</h1>

                            <div className="flex items-center gap-4 mb-4">
                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`h-5 w-5 ${i < Math.floor(product.rating) ? "fill-gold text-gold" : "text-gray-300"}`}
                                        />
                                    ))}
                                </div>
                                <span className="text-sm text-gray-600">{product.rating} ({product.reviews} reviews)</span>
                            </div>

                            <div className="flex items-baseline gap-3 mb-6">
                                <span className="text-4xl font-bold text-charcoal">${product.price}</span>
                                <Badge variant="secondary">{product.stock} in stock</Badge>
                            </div>
                        </div>

                        <div className="border-t border-b py-6 space-y-4">
                            <p className="text-gray-700 leading-relaxed">{product.description}</p>

                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <span className="font-medium">Category:</span>
                                <Badge variant="outline">{product.category}</Badge>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <label className="font-medium text-charcoal">Quantity:</label>
                                <div className="flex items-center border rounded-md">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="px-4 py-2 hover:bg-gray-100 transition-colors"
                                    >
                                        -
                                    </button>
                                    <span className="px-6 py-2 border-x">{quantity}</span>
                                    <button
                                        onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                                        className="px-4 py-2 hover:bg-gray-100 transition-colors"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            <div className="space-y-4">
                                {addedToCart ? (
                                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
                                        <CheckCircle className="h-5 w-5 text-green-600" />
                                        <div className="flex-1">
                                            <p className="font-medium text-green-900">Added to cart!</p>
                                            <p className="text-sm text-green-700">{quantity} item(s) added successfully</p>
                                        </div>
                                    </div>
                                ) : null}

                                <div className="flex gap-4">
                                    {addedToCart ? (
                                        <>
                                            <Link href="/cart" className="flex-1">
                                                <Button variant="gold" size="lg" className="w-full gap-2">
                                                    <ShoppingCart className="h-5 w-5" />
                                                    View Cart
                                                </Button>
                                            </Link>
                                            <Button
                                                variant="outline"
                                                size="lg"
                                                className="flex-1"
                                                onClick={() => {
                                                    handleAddToCart()
                                                }}
                                            >
                                                Add More
                                            </Button>
                                        </>
                                    ) : (
                                        <Button
                                            variant="gold"
                                            size="lg"
                                            className="flex-1 gap-2"
                                            onClick={handleAddToCart}
                                        >
                                            <ShoppingCart className="h-5 w-5" />
                                            Add to Cart
                                        </Button>
                                    )}
                                    <Button variant="outline" size="lg">
                                        <Heart className="h-5 w-5" />
                                    </Button>
                                    <Button variant="outline" size="lg">
                                        <Share2 className="h-5 w-5" />
                                    </Button>
                                </div>
                            </div>

                            <Card className="border-none bg-gray-50">
                                <CardContent className="p-4 space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Free shipping</span>
                                        <span className="font-medium">On orders over $100</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Delivery</span>
                                        <span className="font-medium">3-5 business days</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Returns</span>
                                        <span className="font-medium">30-day return policy</span>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>

                {/* Product Reviews */}
                <div className="mt-12">
                    <ProductReviews productId={params.id} />
                </div>
            </div>
        </div>
    )
}
