import Link from "next/link"
import { ArrowRight } from "lucide-react"

const categories = [
    { name: "Fashion", slug: "Fashion", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop", count: "1.2k Items" },
    { name: "Electronics", slug: "Electronics", image: "https://images.unsplash.com/photo-1498049860654-af1a5c566876?q=80&w=2070&auto=format&fit=crop", count: "850 Items" },
    { name: "Home & Living", slug: "Home", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=2070&auto=format&fit=crop", count: "2.4k Items" },
    { name: "Beauty", slug: "Beauty", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2070&auto=format&fit=crop", count: "500 Items" },
]


export function CategoryGrid() {
    return (
        <section className="py-20 bg-cream">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-2">Curated Categories</h2>
                        <p className="text-gray-500">Browse by department to find exactly what you need.</p>
                    </div>
                    <Link href="/products" className="hidden md:flex items-center text-gold hover:text-gold-light font-medium transition-colors">
                        View All Categories <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((cat, idx) => (
                        <Link key={idx} href={`/products?category=${cat.slug}`} className="group relative h-80 overflow-hidden rounded-lg shadow-sm hover:shadow-xl transition-all duration-300">
                            <img
                                src={cat.image}
                                alt={cat.name}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                            <div className="absolute bottom-0 left-0 p-6 w-full">
                                <h3 className="text-2xl font-serif text-white mb-1">{cat.name}</h3>
                                <p className="text-gray-300 text-sm transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                    {cat.count}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
