"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function AddProductPage() {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        price: "",
        category: "",
        stock: "",
        image: ""
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        // Simulate API call
        setTimeout(() => {
            setLoading(false)
            router.push("/vendor/products")
        }, 1000)
    }

    return (
        <div className="max-w-2xl mx-auto space-y-6">
            <div className="flex items-center gap-4">
                <Link href="/vendor/products">
                    <Button variant="ghost" size="icon">
                        <ArrowLeft className="h-4 w-4" />
                    </Button>
                </Link>
                <div>
                    <h1 className="text-2xl font-serif font-bold text-charcoal">Add New Product</h1>
                    <p className="text-gray-500">Create a new listing for your store.</p>
                </div>
            </div>

            <Card className="border-none shadow-md">
                <CardContent className="pt-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-charcoal">Product Name</label>
                            <Input
                                name="name"
                                placeholder="e.g. Silk Scarf"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-charcoal">Price ($)</label>
                                <Input
                                    name="price"
                                    type="number"
                                    placeholder="0.00"
                                    value={formData.price}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-charcoal">Stock</label>
                                <Input
                                    name="stock"
                                    type="number"
                                    placeholder="0"
                                    value={formData.stock}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-charcoal">Category</label>
                            <select
                                name="category"
                                className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-charcoal"
                                value={formData.category}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select a category</option>
                                <option value="Fashion">Fashion</option>
                                <option value="Electronics">Electronics</option>
                                <option value="Home">Home & Living</option>
                                <option value="Beauty">Beauty</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-charcoal">Description</label>
                            <textarea
                                name="description"
                                className="flex min-h-[100px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-charcoal"
                                placeholder="Describe your product..."
                                value={formData.description}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-charcoal">Image URL</label>
                            <Input
                                name="image"
                                placeholder="https://..."
                                value={formData.image}
                                onChange={handleChange}
                                required
                            />
                            <p className="text-xs text-gray-400">Provide a direct link to your product image.</p>
                        </div>

                        {formData.image && (
                            <div className="mt-4">
                                <p className="text-sm font-medium mb-2">Preview:</p>
                                <img src={formData.image} alt="Preview" className="w-32 h-32 object-cover rounded-md border" />
                            </div>
                        )}

                        <div className="pt-4">
                            <Button type="submit" className="w-full bg-gold hover:bg-gold-light text-white">
                                {loading ? "Creating..." : "Create Product"}
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
