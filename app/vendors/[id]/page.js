"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/Badge"
import { Star, MapPin, Calendar, Package } from "lucide-react"
import { VendorRatings } from "@/components/reviews/VendorRatings"

export default function VendorProfilePage() {
    const params = useParams()

    const vendor = {
        id: params.id,
        name: "Luxe Boutique",
        description: "Premium fashion and accessories curated for the discerning customer. We specialize in handcrafted luxury items from around the world.",
        rating: 4.7,
        totalReviews: 156,
        location: "New York, USA",
        joinDate: "October 2025",
        totalProducts: 24,
        banner: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
        logo: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070&auto=format&fit=crop"
    }

    const products = [
        { id: 1, name: "Luxury Silk Scarf", price: 120, image: "https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?q=80&w=991&auto=format&fit=crop" },
        { id: 3, name: "Leather Handbag", price: 280, image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1035&auto=format&fit=crop" },
        { id: 5, name: "Designer Sunglasses", price: 320, image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=1000&auto=format&fit=crop" },
        { id: 7, name: "Premium Perfume", price: 150, image: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1000&auto=format&fit=crop" },
    ]

    return (
        <div className="min-h-screen bg-cream">
            {/* Vendor Banner */}
            <div className="relative h-64 bg-gray-200">
                <img
                    src={vendor.banner}
                    alt={vendor.name}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            <div className="container mx-auto px-4">
                {/* Vendor Info */}
                <div className="relative -mt-20 mb-8">
                    <Card className="border-none shadow-lg">
                        <CardContent className="p-6">
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <img
                                    src={vendor.logo}
                                    alt={vendor.name}
                                    className="w-32 h-32 rounded-lg object-cover shadow-md border-4 border-white"
                                />

                                <div className="flex-1">
                                    <h1 className="text-3xl font-serif font-bold text-charcoal mb-2">{vendor.name}</h1>
                                    <p className="text-gray-600 mb-4">{vendor.description}</p>

                                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                                        <div className="flex items-center gap-1">
                                            <Star className="h-4 w-4 fill-gold text-gold" />
                                            <span className="font-medium">{vendor.rating}</span>
                                            <span>({vendor.totalReviews} reviews)</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <MapPin className="h-4 w-4" />
                                            {vendor.location}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Calendar className="h-4 w-4" />
                                            Joined {vendor.joinDate}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Package className="h-4 w-4" />
                                            {vendor.totalProducts} Products
                                        </div>
                                    </div>
                                </div>

                                <Button variant="gold" size="lg">
                                    Contact Vendor
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                    {/* Products */}
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-serif font-bold text-charcoal mb-6">Products</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {products.map(product => (
                                <Link key={product.id} href={`/products/${product.id}`}>
                                    <Card className="border-none shadow-md hover:shadow-xl transition-shadow overflow-hidden group">
                                        <div className="relative h-48 overflow-hidden bg-gray-100">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>
                                        <CardContent className="p-4">
                                            <h3 className="font-serif font-bold text-charcoal mb-2">{product.name}</h3>
                                            <p className="text-2xl font-bold text-charcoal">${product.price}</p>
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Vendor Ratings */}
                    <div className="lg:col-span-1">
                        <VendorRatings vendorId={vendor.id} />
                    </div>
                </div>
            </div>
        </div>
    )
}
