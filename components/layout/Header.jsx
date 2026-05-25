"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Search, ShoppingBag, User, Menu, Bell } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { useCart } from "@/context/CartContext"

export function Header() {
    const router = useRouter()
    const { getCartCount } = useCart()
    const [searchQuery, setSearchQuery] = useState("")
    const cartCount = getCartCount()

    const handleSearch = (e) => {
        e.preventDefault()
        if (searchQuery.trim()) {
            router.push(`/products?search=${encodeURIComponent(searchQuery)}`)
        }
    }

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
            <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <span className="text-2xl font-serif font-bold text-charcoal tracking-tight">LuxeMarket</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-charcoal-light">
                    <Link href="/products" className="hover:text-gold transition-colors">New Arrivals</Link>
                    <Link href="/vendors" className="hover:text-gold transition-colors">Designers</Link>
                    <Link href="/products?category=Fashion" className="hover:text-gold transition-colors">Fashion</Link>
                    <Link href="/products?category=Electronics" className="hover:text-gold transition-colors">Electronics</Link>
                </nav>

                {/* Search & Actions */}
                <div className="flex items-center gap-4">
                    <form onSubmit={handleSearch} className="hidden lg:flex relative w-72">
                        <Input
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search for luxury..."
                            className="pl-10 rounded-full border-gray-200 bg-gray-50 focus:bg-white focus:border-gold transition-all"
                        />
                        <button type="submit" className="absolute left-3 top-2.5">
                            <Search className="h-4 w-4 text-gray-400" />
                        </button>
                    </form>

                    <div className="flex items-center gap-1">
                        <Link href="/notifications">
                            <Button variant="ghost" size="icon" className="text-charcoal hover:text-gold relative">
                                <Bell className="h-5 w-5" />
                                <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                            </Button>
                        </Link>
                        <Link href="/login">
                            <Button variant="ghost" size="icon" className="text-charcoal hover:text-gold">
                                <User className="h-5 w-5" />
                            </Button>
                        </Link>
                        <Link href="/cart">
                            <Button variant="ghost" size="icon" className="text-charcoal hover:text-gold relative">
                                <ShoppingBag className="h-5 w-5" />
                                {cartCount > 0 && (
                                    <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-gold text-white text-xs flex items-center justify-center font-bold">
                                        {cartCount}
                                    </span>
                                )}
                            </Button>
                        </Link>
                        <Button variant="ghost" size="icon" className="md:hidden">
                            <Menu className="h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    )
}
