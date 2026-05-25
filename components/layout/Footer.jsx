import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-charcoal text-white pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-serif font-bold text-gold">LuxeMarket</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            The premier destination for luxury goods from the world's finest vendors. Curated for the discerning individual.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-serif text-lg mb-6">Shop</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link href="/products" className="hover:text-gold transition-colors">New Arrivals</Link></li>
                            <li><Link href="/vendors" className="hover:text-gold transition-colors">Designers</Link></li>
                            <li><Link href="/categories" className="hover:text-gold transition-colors">Collections</Link></li>
                            <li><Link href="/sale" className="hover:text-gold transition-colors">Sale</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-serif text-lg mb-6">Support</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link href="/help" className="hover:text-gold transition-colors">Help Center</Link></li>
                            <li><Link href="/returns" className="hover:text-gold transition-colors">Returns & Exchanges</Link></li>
                            <li><Link href="/shipping" className="hover:text-gold transition-colors">Shipping Info</Link></li>
                            <li><Link href="/contact" className="hover:text-gold transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-serif text-lg mb-6">Stay Updated</h4>
                        <p className="text-sm text-gray-400 mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-charcoal-light border-none rounded px-4 py-2 text-sm w-full focus:ring-1 focus:ring-gold outline-none text-white"
                            />
                            <button className="bg-gold text-charcoal px-4 py-2 rounded text-sm font-medium hover:bg-gold-light transition-colors">
                                Join
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-gray-500">© 2024 LuxeMarket. All rights reserved.</p>
                    <div className="flex gap-6 text-gray-400">
                        <Facebook className="h-5 w-5 hover:text-gold cursor-pointer transition-colors" />
                        <Instagram className="h-5 w-5 hover:text-gold cursor-pointer transition-colors" />
                        <Twitter className="h-5 w-5 hover:text-gold cursor-pointer transition-colors" />
                    </div>
                </div>
            </div>
        </footer>
    )
}
