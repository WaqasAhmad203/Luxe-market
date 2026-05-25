import Link from "next/link"
import { Card, CardContent } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/Badge"
import { Star, MapPin, Package, TrendingUp } from "lucide-react"

const vendors = [
    {
        id: 1,
        name: "Luxe Boutique",
        category: "Fashion",
        description: "Premium fashion and accessories curated for the discerning customer. Specializing in handcrafted luxury items.",
        rating: 4.9,
        totalReviews: 156,
        totalProducts: 24,
        location: "New York, USA",
        image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=2070&auto=format&fit=crop",
        verified: true
    },
    {
        id: 2,
        name: "Tech Haven",
        category: "Electronics",
        description: "Your destination for cutting-edge technology and innovative gadgets. Quality electronics at competitive prices.",
        rating: 4.8,
        totalReviews: 203,
        totalProducts: 45,
        location: "San Francisco, USA",
        image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2070&auto=format&fit=crop",
        verified: true
    },
    {
        id: 3,
        name: "Artisan Home",
        category: "Home & Living",
        description: "Handpicked home decor and living essentials. Transform your space with our curated collection.",
        rating: 5.0,
        totalReviews: 89,
        totalProducts: 32,
        location: "Portland, USA",
        image: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=2070&auto=format&fit=crop",
        verified: true
    },
    {
        id: 4,
        name: "Scent Studio",
        category: "Beauty",
        description: "Luxury fragrances and premium beauty products. Elevate your self-care routine with our exclusive collection.",
        rating: 4.7,
        totalReviews: 124,
        totalProducts: 28,
        location: "Los Angeles, USA",
        image: "https://images.unsplash.com/photo-1596462502278-27bfdd403348?q=80&w=2070&auto=format&fit=crop",
        verified: true
    },
    {
        id: 5,
        name: "Time Masters",
        category: "Accessories",
        description: "Exquisite timepieces and luxury accessories. Each piece tells a story of craftsmanship and elegance.",
        rating: 4.9,
        totalReviews: 167,
        totalProducts: 18,
        location: "Geneva, Switzerland",
        image: "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?q=80&w=2064&auto=format&fit=crop",
        verified: true
    },
    {
        id: 6,
        name: "Vision Elite",
        category: "Accessories",
        description: "Designer eyewear and premium sunglasses. See the world through luxury lenses.",
        rating: 4.8,
        totalReviews: 98,
        totalProducts: 22,
        location: "Milan, Italy",
        image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=2070&auto=format&fit=crop",
        verified: true
    },
    {
        id: 7,
        name: "Fashion Forward",
        category: "Fashion",
        description: "Contemporary fashion for the modern individual. Stay ahead of trends with our latest collections.",
        rating: 4.6,
        totalReviews: 142,
        totalProducts: 38,
        location: "Paris, France",
        image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop",
        verified: true
    },
    {
        id: 8,
        name: "Beauty Essentials",
        category: "Beauty",
        description: "Your daily beauty must-haves. Quality cosmetics and skincare for every routine.",
        rating: 4.7,
        totalReviews: 176,
        totalProducts: 41,
        location: "Seoul, South Korea",
        image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2070&auto=format&fit=crop",
        verified: true
    },
    {
        id: 9,
        name: "Tech Innovations",
        category: "Electronics",
        description: "Next-generation tech solutions. From smart devices to innovative accessories.",
        rating: 4.5,
        totalReviews: 134,
        totalProducts: 29,
        location: "Tokyo, Japan",
        image: "https://images.unsplash.com/photo-1498049860654-af1a5c566876?q=80&w=2070&auto=format&fit=crop",
        verified: true
    },
    {
        id: 10,
        name: "Home Decor Co",
        category: "Home & Living",
        description: "Stylish home furnishings and decor. Create the perfect ambiance for your living space.",
        rating: 4.6,
        totalReviews: 91,
        totalProducts: 35,
        location: "Copenhagen, Denmark",
        image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=2070&auto=format&fit=crop",
        verified: true
    },
    {
        id: 11,
        name: "Jewelry Box",
        category: "Accessories",
        description: "Fine jewelry and precious accessories. Timeless pieces for every occasion.",
        rating: 4.9,
        totalReviews: 112,
        totalProducts: 26,
        location: "Dubai, UAE",
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070&auto=format&fit=crop",
        verified: true
    },
]

export default function VendorsPage() {
    return (
        <div className="min-h-screen bg-cream">
            <div className="container mx-auto px-4 py-12">
                {/* Header */}
                <div className="mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-4">
                        Our Trusted Vendors
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Discover our curated selection of verified vendors from around the world.
                        Each vendor is carefully selected to ensure quality and authenticity.
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                    <Card className="border-none shadow-md">
                        <CardContent className="p-6 text-center">
                            <div className="text-3xl font-bold text-gold mb-2">{vendors.length}</div>
                            <p className="text-gray-600">Total Vendors</p>
                        </CardContent>
                    </Card>
                    <Card className="border-none shadow-md">
                        <CardContent className="p-6 text-center">
                            <div className="text-3xl font-bold text-gold mb-2">100%</div>
                            <p className="text-gray-600">Verified</p>
                        </CardContent>
                    </Card>
                    <Card className="border-none shadow-md">
                        <CardContent className="p-6 text-center">
                            <div className="text-3xl font-bold text-gold mb-2">
                                {vendors.reduce((sum, v) => sum + v.totalProducts, 0)}
                            </div>
                            <p className="text-gray-600">Total Products</p>
                        </CardContent>
                    </Card>
                    <Card className="border-none shadow-md">
                        <CardContent className="p-6 text-center">
                            <div className="text-3xl font-bold text-gold mb-2">4.8</div>
                            <p className="text-gray-600">Avg Rating</p>
                        </CardContent>
                    </Card>
                </div>

                {/* Vendors Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {vendors.map(vendor => (
                        <Card key={vendor.id} className="border-none shadow-md hover:shadow-xl transition-all overflow-hidden group">
                            <div className="relative h-48 overflow-hidden bg-gray-100">
                                <img
                                    src={vendor.image}
                                    alt={vendor.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                {vendor.verified && (
                                    <Badge variant="gold" className="absolute top-4 right-4">
                                        Verified
                                    </Badge>
                                )}
                            </div>

                            <CardContent className="p-6">
                                <div className="mb-4">
                                    <h3 className="text-xl font-serif font-bold text-charcoal mb-1">
                                        {vendor.name}
                                    </h3>
                                    <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">
                                        {vendor.category}
                                    </p>
                                    <p className="text-gray-600 text-sm line-clamp-2">
                                        {vendor.description}
                                    </p>
                                </div>

                                <div className="space-y-2 mb-4">
                                    <div className="flex items-center gap-2 text-sm">
                                        <Star className="h-4 w-4 fill-gold text-gold" />
                                        <span className="font-medium">{vendor.rating}</span>
                                        <span className="text-gray-400">({vendor.totalReviews} reviews)</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <Package className="h-4 w-4" />
                                        <span>{vendor.totalProducts} Products</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <MapPin className="h-4 w-4" />
                                        <span>{vendor.location}</span>
                                    </div>
                                </div>

                                <Link href={`/vendors/${vendor.id}`}>
                                    <Button variant="gold" className="w-full">
                                        View Store
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-16 text-center">
                    <Card className="border-none shadow-md bg-gradient-to-r from-charcoal to-gray-800">
                        <CardContent className="p-12">
                            <TrendingUp className="h-12 w-12 text-gold mx-auto mb-4" />
                            <h2 className="text-3xl font-serif font-bold text-white mb-4">
                                Become a Vendor
                            </h2>
                            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                                Join our marketplace and reach thousands of customers worldwide.
                                Start selling your products today!
                            </p>
                            <Link href="/register">
                                <Button variant="gold" size="lg">
                                    Apply Now
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
