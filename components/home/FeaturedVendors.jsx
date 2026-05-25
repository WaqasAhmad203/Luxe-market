import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"

const vendors = [
    { name: "Luxe Boutique", category: "Fashion", rating: 4.9, image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=2070&auto=format&fit=crop" },
    { name: "Tech Haven", category: "Electronics", rating: 4.8, image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2070&auto=format&fit=crop" },
    { name: "Artisan Home", category: "Home & Living", rating: 5.0, image: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=2070&auto=format&fit=crop" },
]


export function FeaturedVendors() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <span className="text-gold font-medium tracking-widest uppercase text-sm">Trusted Partners</span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mt-2">Featured Vendors</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {vendors.map((vendor, idx) => (
                        <Card key={idx} className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-shadow duration-300">
                            <div className="h-48 overflow-hidden relative">
                                <img
                                    src={vendor.image}
                                    alt={vendor.name}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                />
                                <Badge variant="gold" className="absolute top-4 right-4">
                                    Verified
                                </Badge>
                            </div>
                            <CardContent className="p-6 text-center">
                                <h3 className="text-xl font-serif font-bold text-charcoal mb-1">{vendor.name}</h3>
                                <p className="text-gray-500 text-sm mb-3">{vendor.category}</p>
                                <div className="flex justify-center items-center gap-1 text-gold">
                                    <Star className="h-4 w-4 fill-current" />
                                    <span className="text-charcoal font-medium">{vendor.rating}</span>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
