"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Search, Trash2, Edit, Eye } from "lucide-react"

export default function AdminProductsPage() {
    const [searchQuery, setSearchQuery] = useState("")
    const [categoryFilter, setCategoryFilter] = useState("all")

    const products = [
        { id: 1, name: "Luxury Silk Scarf", vendor: "Luxe Boutique", category: "Fashion", price: 120, stock: 15, status: "active", image: "https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?q=80&w=991&auto=format&fit=crop" },
        { id: 2, name: "Gold Plated Watch", vendor: "Time Masters", category: "Accessories", price: 450, stock: 8, status: "active", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1999&auto=format&fit=crop" },
        { id: 3, name: "Wireless Headphones", vendor: "Tech Haven", category: "Electronics", price: 199, stock: 0, status: "out_of_stock", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop" },
        { id: 4, name: "Leather Handbag", vendor: "Luxe Boutique", category: "Fashion", price: 280, stock: 12, status: "active", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1035&auto=format&fit=crop" },
        { id: 5, name: "Smart Watch", vendor: "Tech Haven", category: "Electronics", price: 399, stock: 20, status: "active", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=999&auto=format&fit=crop" },
    ]

    const categories = ["All", "Fashion", "Electronics", "Accessories", "Home", "Beauty"]

    const filteredProducts = products.filter(product => {
        const matchesCategory = categoryFilter === "all" || product.category === categoryFilter
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.vendor.toLowerCase().includes(searchQuery.toLowerCase())
        return matchesCategory && matchesSearch
    })

    const handleDelete = (id) => {
        // TODO: Integrate with backend API route `/api/admin/products/delete`
        // Deletes product listing permanently and triggers search index updates
        alert(`Product ${id} deleted successfully!`);
    }

    return (
        <div className="p-8">
            <div className="mb-8">
                <h1 className="text-3xl font-serif font-bold text-charcoal">Product Management</h1>
                <p className="text-gray-500 mt-1">Manage all products across the marketplace</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <Card className="border-none shadow-md">
                    <CardContent className="p-4">
                        <p className="text-sm text-gray-500">Total Products</p>
                        <p className="text-2xl font-bold text-charcoal">{products.length}</p>
                    </CardContent>
                </Card>
                <Card className="border-none shadow-md">
                    <CardContent className="p-4">
                        <p className="text-sm text-gray-500">Active</p>
                        <p className="text-2xl font-bold text-green-600">
                            {products.filter(p => p.status === "active").length}
                        </p>
                    </CardContent>
                </Card>
                <Card className="border-none shadow-md">
                    <CardContent className="p-4">
                        <p className="text-sm text-gray-500">Out of Stock</p>
                        <p className="text-2xl font-bold text-red-600">
                            {products.filter(p => p.status === "out_of_stock").length}
                        </p>
                    </CardContent>
                </Card>
                <Card className="border-none shadow-md">
                    <CardContent className="p-4">
                        <p className="text-sm text-gray-500">Categories</p>
                        <p className="text-2xl font-bold text-charcoal">{categories.length - 1}</p>
                    </CardContent>
                </Card>
            </div>

            {/* Filters */}
            <Card className="border-none shadow-md mb-6">
                <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                        <div className="flex gap-2 flex-wrap">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setCategoryFilter(cat.toLowerCase())}
                                    className={`px-4 py-2 rounded-md transition-colors ${categoryFilter === cat.toLowerCase()
                                            ? "bg-gold text-white"
                                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        <div className="relative w-full md:w-72">
                            <Input
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search products..."
                                className="pl-10"
                            />
                            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Products Table */}
            <Card className="border-none shadow-md">
                <CardHeader>
                    <CardTitle className="font-serif">Products ({filteredProducts.length})</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b">
                                    <th className="text-left py-3 px-4 font-medium text-gray-600">Product</th>
                                    <th className="text-left py-3 px-4 font-medium text-gray-600">Vendor</th>
                                    <th className="text-left py-3 px-4 font-medium text-gray-600">Category</th>
                                    <th className="text-left py-3 px-4 font-medium text-gray-600">Price</th>
                                    <th className="text-left py-3 px-4 font-medium text-gray-600">Stock</th>
                                    <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                                    <th className="text-left py-3 px-4 font-medium text-gray-600">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredProducts.map(product => (
                                    <tr key={product.id} className="border-b hover:bg-gray-50 transition-colors">
                                        <td className="py-4 px-4">
                                            <div className="flex items-center gap-3">
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="w-12 h-12 object-cover rounded"
                                                />
                                                <p className="font-medium text-charcoal">{product.name}</p>
                                            </div>
                                        </td>
                                        <td className="py-4 px-4 text-gray-700">{product.vendor}</td>
                                        <td className="py-4 px-4">
                                            <Badge variant="outline">{product.category}</Badge>
                                        </td>
                                        <td className="py-4 px-4 font-medium text-charcoal">${product.price}</td>
                                        <td className="py-4 px-4 text-gray-700">{product.stock}</td>
                                        <td className="py-4 px-4">
                                            <Badge
                                                variant={product.status === "active" ? "secondary" : "outline"}
                                                className={product.status === "out_of_stock" ? "text-red-600" : ""}
                                            >
                                                {product.status === "out_of_stock" ? "Out of Stock" : "Active"}
                                            </Badge>
                                        </td>
                                        <td className="py-4 px-4">
                                            <div className="flex gap-2">
                                                <Button size="sm" variant="ghost" className="gap-1">
                                                    <Eye className="h-4 w-4" />
                                                </Button>
                                                <Button size="sm" variant="ghost" className="gap-1">
                                                    <Edit className="h-4 w-4" />
                                                </Button>
                                                <Button
                                                    size="sm"
                                                    variant="ghost"
                                                    className="gap-1 text-red-600 hover:text-red-700"
                                                    onClick={() => handleDelete(product.id)}
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
