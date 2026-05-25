import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/home/Hero"
import { CategoryGrid } from "@/components/home/CategoryGrid"
import { FeaturedVendors } from "@/components/home/FeaturedVendors"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <CategoryGrid />
        <FeaturedVendors />
      </main>
      <Footer />
    </div>
  )
}
