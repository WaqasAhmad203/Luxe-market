"use client"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/Badge"
import { Star, ShoppingCart } from "lucide-react"
import { useCart } from "@/context/CartContext"

// Mock product data with images
const allProducts = [
    // Fashion
    { id: 1, name: "Luxury Silk Scarf", price: 120, category: "Fashion", rating: 4.8, vendor: "Luxe Boutique", image: "https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?q=80&w=991&auto=format&fit=crop" },
    { id: 3, name: "Leather Handbag", price: 280, category: "Fashion", rating: 4.7, vendor: "Luxe Boutique", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1035&auto=format&fit=crop" },
    { id: 9, name: "Cashmere Sweater", price: 195, category: "Fashion", rating: 4.9, vendor: "Luxe Boutique", image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000&auto=format&fit=crop" },
    { id: 10, name: "Designer Dress", price: 350, category: "Fashion", rating: 4.8, vendor: "Fashion Forward", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1000&auto=format&fit=crop" },
    { id: 11, name: "Leather Jacket", price: 420, category: "Fashion", rating: 4.9, vendor: "Luxe Boutique", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1000&auto=format&fit=crop" },
    { id: 12, name: "Silk Blouse", price: 145, category: "Fashion", rating: 4.6, vendor: "Fashion Forward", image: "https://images.unsplash.com/photo-1564257577-1f0b5e7e9f1e?q=80&w=1000&auto=format&fit=crop" },

    // Electronics
    { id: 4, name: "Wireless Headphones", price: 199, category: "Electronics", rating: 4.6, vendor: "Tech Haven", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop" },
    { id: 8, name: "Smart Watch", price: 399, category: "Electronics", rating: 4.7, vendor: "Tech Haven", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=999&auto=format&fit=crop" },
    { id: 13, name: "Bluetooth Speaker", price: 129, category: "Electronics", rating: 4.5, vendor: "Tech Haven", image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=1000&auto=format&fit=crop" },
    { id: 14, name: "Laptop Stand", price: 89, category: "Electronics", rating: 4.7, vendor: "Tech Haven", image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=1000&auto=format&fit=crop" },
    { id: 15, name: "Wireless Mouse", price: 65, category: "Electronics", rating: 4.4, vendor: "Tech Innovations", image: "https://images.unsplash.com/photo-1527814050087-3793815479db?q=80&w=1000&auto=format&fit=crop" },
    { id: 16, name: "USB-C Hub", price: 79, category: "Electronics", rating: 4.6, vendor: "Tech Innovations", image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?q=80&w=1000&auto=format&fit=crop" },

    // Accessories
    { id: 2, name: "Gold Plated Watch", price: 450, category: "Accessories", rating: 4.9, vendor: "Time Masters", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1999&auto=format&fit=crop" },
    { id: 5, name: "Designer Sunglasses", price: 320, category: "Accessories", rating: 4.9, vendor: "Vision Elite", image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=1000&auto=format&fit=crop" },
    { id: 17, name: "Leather Wallet", price: 95, category: "Accessories", rating: 4.7, vendor: "Luxe Boutique", image: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=1000&auto=format&fit=crop" },
    { id: 18, name: "Pearl Necklace", price: 280, category: "Accessories", rating: 4.8, vendor: "Jewelry Box", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1000&auto=format&fit=crop" },
    { id: 19, name: "Leather Belt", price: 75, category: "Accessories", rating: 4.5, vendor: "Luxe Boutique", image: "https://images.unsplash.com/photo-1624222247344-550fb60583bb?q=80&w=1000&auto=format&fit=crop" },

    // Home
    { id: 6, name: "Ceramic Vase", price: 85, category: "Home", rating: 4.5, vendor: "Artisan Home", image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?q=80&w=1000&auto=format&fit=crop" },
    { id: 20, name: "Throw Pillow Set", price: 65, category: "Home", rating: 4.6, vendor: "Artisan Home", image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?q=80&w=1000&auto=format&fit=crop" },
    { id: 21, name: "Wall Art Canvas", price: 120, category: "Home", rating: 4.7, vendor: "Artisan Home", image: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?q=80&w=1000&auto=format&fit=crop" },
    { id: 22, name: "Table Lamp", price: 95, category: "Home", rating: 4.8, vendor: "Artisan Home", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=1000&auto=format&fit=crop" },
    { id: 23, name: "Decorative Mirror", price: 145, category: "Home", rating: 4.6, vendor: "Home Decor Co", image: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=1000&auto=format&fit=crop" },
    { id: 24, name: "Scented Candle Set", price: 55, category: "Home", rating: 4.9, vendor: "Artisan Home", image: "https://images.unsplash.com/photo-1602874801006-e7d8dc6d0d0f?q=80&w=1000&auto=format&fit=crop" },

    // Beauty
    { id: 7, name: "Premium Perfume", price: 150, category: "Beauty", rating: 4.8, vendor: "Scent Studio", image: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1000&auto=format&fit=crop" },
    { id: 25, name: "Luxury Face Cream", price: 89, category: "Beauty", rating: 4.7, vendor: "Scent Studio", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1000&auto=format&fit=crop" },
    { id: 26, name: "Makeup Brush Set", price: 75, category: "Beauty", rating: 4.6, vendor: "Beauty Essentials", image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1000&auto=format&fit=crop" },
    { id: 27, name: "Hair Serum", price: 45, category: "Beauty", rating: 4.5, vendor: "Scent Studio", image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?q=80&w=1000&auto=format&fit=crop" },
    { id: 28, name: "Lipstick Set", price: 65, category: "Beauty", rating: 4.8, vendor: "Beauty Essentials", image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=1000&auto=format&fit=crop" },
    { id: 29, name: "Skincare Kit", price: 125, category: "Beauty", rating: 4.9, vendor: "Scent Studio", image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000&auto=format&fit=crop" },
]

const categories = ["All", "Fashion", "Electronics", "Accessories", "Home", "Beauty"]

function ProductsContent() {
    const searchParams = useSearchParams()
    const searchQuery = searchParams.get("search") || ""
    const categoryParam = searchParams.get("category") || "All"
    const { addToCart, cart, getCartCount, getCartTotal } = useCart()

    const [selectedCategory, setSelectedCategory] = useState(categoryParam)
    const [priceRange, setPriceRange] = useState("all")
    const [addedToCart, setAddedToCart] = useState(null)

    useEffect(() => {
        setSelectedCategory(categoryParam)
    }, [categoryParam])

    const handleAddToCart = (product) => {
        addToCart(product)
        setAddedToCart(product.id)
        setTimeout(() => setAddedToCart(null), 2000)
    }

    const filteredProducts = allProducts.filter(product => {
        const categoryMatch = selectedCategory === "All" || product.category === selectedCategory
        const searchMatch = searchQuery === "" ||
            product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.vendor.toLowerCase().includes(searchQuery.toLowerCase())
        const priceMatch =
            priceRange === "all" ||
            (priceRange === "under100" && product.price < 100) ||
            (priceRange === "100-300" && product.price >= 100 && product.price <= 300) ||
            (priceRange === "over300" && product.price > 300)
        return categoryMatch && priceMatch && searchMatch
    })

    return (
        <div className="min-h-screen bg-cream">
            <div className="container mx-auto px-4 py-12">
                <div className="mb-8">
                    <h1 className="text-4xl font-serif font-bold text-charcoal mb-2">
                        {searchQuery ? `Search Results for "${searchQuery}"` : "Shop All Products"}
                    </h1>
                    <p className="text-gray-500">Discover luxury items from our curated collection</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Filters Sidebar */}
                    <div className="lg:col-span-1">
                        <Card className="border-none shadow-md sticky top-24">
                            <CardContent className="p-6 space-y-6">
                                <div>
                                    <h3 className="font-serif font-bold text-charcoal mb-4">Categories</h3>
                                    <div className="space-y-2">
                                        {categories.map(cat => (
                                            <button
                                                key={cat}
                                                onClick={() => setSelectedCategory(cat)}
                                                className={`w-full text-left px-3 py-2 rounded-md transition-colors ${selectedCategory === cat
                                                        ? "bg-gold text-white font-medium"
                                                        : "hover:bg-gray-100 text-gray-700"
                                                    }`}
                                            >
                                                {cat}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="border-t pt-6">
                                    <h3 className="font-serif font-bold text-charcoal mb-4">Price Range</h3>
                                    <div className="space-y-2">
                                        {[
                                            { value: "all", label: "All Prices" },
                                            { value: "under100", label: "Under $100" },
                                            { value: "100-300", label: "$100 - $300" },
                                            { value: "over300", label: "Over $300" },
                                        ].map(option => (
                                            <button
                                                key={option.value}
                                                onClick={() => setPriceRange(option.value)}
                                                className={`w-full text-left px-3 py-2 rounded-md transition-colors ${priceRange === option.value
                                                        ? "bg-charcoal text-white font-medium"
                                                        : "hover:bg-gray-100 text-gray-700"
                                                    }`}
                                            >
                                                {option.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Product Grid */}
                    <div className="lg:col-span-3">
                        <div className="mb-4 flex justify-between items-center">
                            <p className="text-gray-600">{filteredProducts.length} products found</p>
                        </div>

                        {filteredProducts.length === 0 ? (
                            <Card className="border-none shadow-md">
                                <CardContent className="py-12 text-center">
                                    <p className="text-gray-500">No products found matching your criteria.</p>
                                </CardContent>
                            </Card>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                {filteredProducts.map(product => (
                                    <Card key={product.id} className="border-none shadow-md hover:shadow-xl transition-shadow overflow-hidden group">
                                        <Link href={`/products/${product.id}`}>
                                            <div className="relative h-64 overflow-hidden bg-gray-100">
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                                <Badge variant="gold" className="absolute top-4 right-4">
                                                    New
                                                </Badge>
                                            </div>
                                        </Link>
                                        <CardContent className="p-4 space-y-3">
                                            <div>
                                                <p className="text-xs text-gray-500 uppercase tracking-wide">{product.vendor}</p>
                                                <Link href={`/products/${product.id}`}>
                                                    <h3 className="font-serif font-bold text-charcoal hover:text-gold transition-colors">
                                                        {product.name}
                                                    </h3>
                                                </Link>
                                            </div>

                                            <div className="flex items-center gap-1 text-sm">
                                                <Star className="h-4 w-4 fill-gold text-gold" />
                                                <span className="font-medium">{product.rating}</span>
                                                <span className="text-gray-400">(24)</span>
                                            </div>

                                            <div className="flex items-center justify-between pt-2">
                                                <span className="text-2xl font-bold text-charcoal">${product.price}</span>
                                                <Button
                                                    size="sm"
                                                    variant={addedToCart === product.id ? "secondary" : "gold"}
                                                    className="gap-2"
                                                    onClick={(e) => {
                                                        e.preventDefault()
                                                        handleAddToCart(product)
                                                    }}
                                                >
                                                    <ShoppingCart className="h-4 w-4" />
                                                    {addedToCart === product.id ? "Added!" : "Add"}
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Floating Cart Button */}
            {cart.length > 0 && (
                <Link href="/cart">
                    <div className="fixed bottom-8 right-8 z-50">
                        <Button
                            variant="gold"
                            size="lg"
                            className="shadow-2xl hover:shadow-3xl transition-all gap-3 pr-6"
                        >
                            <div className="relative">
                                <ShoppingCart className="h-6 w-6" />
                                <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-charcoal text-white text-xs flex items-center justify-center font-bold">
                                    {getCartCount()}
                                </span>
                            </div>
                            <div className="text-left">
                                <div className="text-xs opacity-90">View Cart</div>
                                <div className="font-bold">${getCartTotal().toFixed(2)}</div>
                            </div>
                        </Button>
                    </div>
                </Link>
            )}
        </div>
    )
}

export default function ProductsPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-cream flex items-center justify-center"><p>Loading...</p></div>}>
            <ProductsContent />
        </Suspense>
    )
}
