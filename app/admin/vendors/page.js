"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Search, CheckCircle, XCircle, Eye } from "lucide-react"

export default function AdminVendorsPage() {
    const [filter, setFilter] = useState("all")
    const [searchQuery, setSearchQuery] = useState("")

    const vendors = [
        { id: 1, name: "Luxe Boutique", email: "contact@luxe.com", status: "approved", products: 24, revenue: "$12,450", joinDate: "2025-10-15" },
        { id: 2, name: "Tech Haven", email: "info@techhaven.com", status: "approved", products: 18, revenue: "$8,920", joinDate: "2025-10-20" },
        { id: 3, name: "Artisan Crafts", email: "hello@artisan.com", status: "pending", products: 0, revenue: "$0", joinDate: "2025-11-20" },
        { id: 4, name: "Fashion Forward", email: "contact@fashionfw.com", status: "pending", products: 0, revenue: "$0", joinDate: "2025-11-22" },
        { id: 5, name: "Vision Elite", email: "info@visionelite.com", status: "approved", products: 12, revenue: "$5,340", joinDate: "2025-11-01" },
    ]

    const filteredVendors = vendors.filter(vendor => {
        const matchesFilter = filter === "all" || vendor.status === filter
        const matchesSearch = vendor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            vendor.email.toLowerCase().includes(searchQuery.toLowerCase())
        return matchesFilter && matchesSearch
    })

    const handleApprove = (id) => {
        // TODO: Integrate with backend API route `/api/admin/vendors/approve`
        // Update vendor status to APPROVED in database and dispatch notification
        alert(`Vendor ${id} approved successfully!`);
    }

    const handleReject = (id) => {
        // TODO: Integrate with backend API route `/api/admin/vendors/reject`
        // Update vendor status to REJECTED in database and log admin rejection audit trail
        alert(`Vendor ${id} registration application rejected.`);
    }

    return (
        <div className="p-8">
            <div className="mb-8">
                <h1 className="text-3xl font-serif font-bold text-charcoal">Vendor Management</h1>
                <p className="text-gray-500 mt-1">Manage and approve vendor applications</p>
            </div>

            {/* Filters */}
            <Card className="border-none shadow-md mb-6">
                <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                        <div className="flex gap-2">
                            <button
                                onClick={() => setFilter("all")}
                                className={`px-4 py-2 rounded-md transition-colors ${filter === "all"
                                        ? "bg-gold text-white"
                                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                    }`}
                            >
                                All ({vendors.length})
                            </button>
                            <button
                                onClick={() => setFilter("approved")}
                                className={`px-4 py-2 rounded-md transition-colors ${filter === "approved"
                                        ? "bg-gold text-white"
                                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                    }`}
                            >
                                Approved ({vendors.filter(v => v.status === "approved").length})
                            </button>
                            <button
                                onClick={() => setFilter("pending")}
                                className={`px-4 py-2 rounded-md transition-colors ${filter === "pending"
                                        ? "bg-gold text-white"
                                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                    }`}
                            >
                                Pending ({vendors.filter(v => v.status === "pending").length})
                            </button>
                        </div>

                        <div className="relative w-full md:w-72">
                            <Input
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search vendors..."
                                className="pl-10"
                            />
                            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Vendors Table */}
            <Card className="border-none shadow-md">
                <CardHeader>
                    <CardTitle className="font-serif">Vendors ({filteredVendors.length})</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b">
                                    <th className="text-left py-3 px-4 font-medium text-gray-600">Vendor</th>
                                    <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                                    <th className="text-left py-3 px-4 font-medium text-gray-600">Products</th>
                                    <th className="text-left py-3 px-4 font-medium text-gray-600">Revenue</th>
                                    <th className="text-left py-3 px-4 font-medium text-gray-600">Join Date</th>
                                    <th className="text-left py-3 px-4 font-medium text-gray-600">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredVendors.map(vendor => (
                                    <tr key={vendor.id} className="border-b hover:bg-gray-50 transition-colors">
                                        <td className="py-4 px-4">
                                            <div>
                                                <p className="font-medium text-charcoal">{vendor.name}</p>
                                                <p className="text-sm text-gray-500">{vendor.email}</p>
                                            </div>
                                        </td>
                                        <td className="py-4 px-4">
                                            <Badge
                                                variant={vendor.status === "approved" ? "secondary" : "gold"}
                                                className="capitalize"
                                            >
                                                {vendor.status}
                                            </Badge>
                                        </td>
                                        <td className="py-4 px-4 text-gray-700">{vendor.products}</td>
                                        <td className="py-4 px-4 font-medium text-charcoal">{vendor.revenue}</td>
                                        <td className="py-4 px-4 text-gray-500 text-sm">{vendor.joinDate}</td>
                                        <td className="py-4 px-4">
                                            <div className="flex gap-2">
                                                {vendor.status === "pending" ? (
                                                    <>
                                                        <Button
                                                            size="sm"
                                                            variant="outline"
                                                            className="gap-1 text-green-600 border-green-600 hover:bg-green-50"
                                                            onClick={() => handleApprove(vendor.id)}
                                                        >
                                                            <CheckCircle className="h-4 w-4" />
                                                            Approve
                                                        </Button>
                                                        <Button
                                                            size="sm"
                                                            variant="outline"
                                                            className="gap-1 text-red-600 border-red-600 hover:bg-red-50"
                                                            onClick={() => handleReject(vendor.id)}
                                                        >
                                                            <XCircle className="h-4 w-4" />
                                                            Reject
                                                        </Button>
                                                    </>
                                                ) : (
                                                    <Button size="sm" variant="outline" className="gap-1">
                                                        <Eye className="h-4 w-4" />
                                                        View
                                                    </Button>
                                                )}
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
