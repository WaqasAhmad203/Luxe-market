import Link from "next/link"
import { Button } from "@/components/ui/Button"

export function Hero() {
    return (
        <section className="relative h-[80vh] w-full overflow-hidden bg-charcoal">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-60"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop")' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />

            {/* Content */}
            <div className="relative container mx-auto h-full flex flex-col justify-center px-4 md:px-6">
                <div className="max-w-2xl space-y-6">
                    <span className="inline-block text-gold font-medium tracking-widest uppercase text-sm">
                        Premium Marketplace
                    </span>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight">
                        Discover Luxury <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-white">
                            Without Limits
                        </span>
                    </h1>
                    <p className="text-lg text-gray-200 max-w-lg leading-relaxed">
                        Explore curated collections from the world's most exclusive vendors.
                        Quality, authenticity, and elegance in every detail.
                    </p>
                    <div className="flex gap-4 pt-4">
                        <Link href="/products">
                            <Button variant="gold" size="lg" className="rounded-full px-8">
                                Shop Collections
                            </Button>
                        </Link>
                        <Link href="/vendors">
                            <Button variant="outline" size="lg" className="rounded-full px-8 text-white border-white hover:bg-white hover:text-charcoal">
                                View Designers
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
