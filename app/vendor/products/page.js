import Link from "next/link"
import { Plus, MoreHorizontal, Pencil, Trash } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"

// Mock data for now, will replace with Prisma fetch later
const products = [
    { id: 1, name: "Luxury Silk Scarf", price: 120, stock: 15, category: "Fashion", image: "https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?q=80&w=991&auto=format&fit=crop" },
    { id: 2, name: "Gold Plated Watch", price: 450, stock: 5, category: "Accessories", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1999&auto=format&fit=crop" },
    { id: 3, name: "Leather Handbag", price: 280, stock: 8, category: "Fashion", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1035&auto=format&fit=crop" },
]

export default function VendorProductsPage() {
    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-serif font-bold text-charcoal">Products</h1>
                    <p className="text-gray-500">Manage your product inventory.</p>
                </div>
                <Link href="/vendor/products/new">
                    <Button className="bg-gold hover:bg-gold-light text-white">
                        <Plus className="h-4 w-4 mr-2" />
                        Add Product
                    </Button>
                </Link>
            </div>

            <Card className="border-none shadow-md overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-gray-500 uppercase bg-gray-50 border-b">
                            <tr>
                                <th className="px-6 py-3">Product</th>
                                <th className="px-6 py-3">Category</th>
                                <th className="px-6 py-3">Price</th>
                                <th className="px-6 py-3">Stock</th>
                                <th className="px-6 py-3">Status</th>
                                <th className="px-6 py-3 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr key={product.id} className="bg-white border-b hover:bg-gray-50">
                                    <td className="px-6 py-4 font-medium text-charcoal flex items-center gap-3">
                                        <img src={product.image} alt={product.name} className="w-10 h-10 rounded object-cover" />
                                        {product.name}
                                    </td>
                                    <td className="px-6 py-4">{product.category}</td>
                                    <td className="px-6 py-4">${product.price}</td>
                                    <td className="px-6 py-4">{product.stock}</td>
                                    <td className="px-6 py-4">
                                        <Badge variant={product.stock > 0 ? "default" : "destructive"}>
                                            {product.stock > 0 ? "In Stock" : "Out of Stock"}
                                        </Badge>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex justify-end gap-2">
                                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                                <Pencil className="h-4 w-4 text-gray-500" />
                                            </Button>
                                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                                <Trash className="h-4 w-4 text-red-500" />
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>
        </div>
    )
}
