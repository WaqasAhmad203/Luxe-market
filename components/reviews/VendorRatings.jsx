"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { Star, TrendingUp, Package, MessageCircle, Clock } from "lucide-react"

export function VendorRatings({ vendorId }) {
    const vendorRating = {
        overall: 4.7,
        totalReviews: 156,
        metrics: [
            { label: "Product Quality", rating: 4.8, icon: Package },
            { label: "Communication", rating: 4.6, icon: MessageCircle },
            { label: "Shipping Speed", rating: 4.7, icon: Clock },
        ],
        recentReviews: [
            {
                id: 1,
                customer: "Alice Williams",
                rating: 5,
                date: "2025-11-22",
                comment: "Excellent vendor! Fast shipping and great communication. Products are exactly as described.",
                productName: "Luxury Silk Scarf"
            },
            {
                id: 2,
                customer: "David Brown",
                rating: 4,
                date: "2025-11-20",
                comment: "Good experience overall. Product quality is top-notch. Delivery took a bit longer than expected but worth the wait.",
                productName: "Leather Handbag"
            },
            {
                id: 3,
                customer: "Sophie Martinez",
                rating: 5,
                date: "2025-11-18",
                comment: "Amazing vendor! Very responsive to questions and the packaging was beautiful. Will definitely order again.",
                productName: "Designer Sunglasses"
            },
        ]
    }

    const ratingDistribution = [5, 4, 3, 2, 1].map(star => {
        const count = Math.floor(Math.random() * 50) + 10
        return {
            star,
            count,
            percentage: (count / vendorRating.totalReviews) * 100
        }
    })

    return (
        <div className="space-y-6">
            {/* Overall Vendor Rating */}
            <Card className="border-none shadow-md">
                <CardHeader>
                    <CardTitle className="font-serif">Vendor Rating</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Overall Score */}
                        <div className="text-center">
                            <div className="text-5xl font-bold text-charcoal mb-2">{vendorRating.overall}</div>
                            <div className="flex items-center justify-center gap-1 mb-2">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`h-6 w-6 ${i < Math.floor(vendorRating.overall) ? "fill-gold text-gold" : "text-gray-300"}`}
                                    />
                                ))}
                            </div>
                            <p className="text-gray-500 text-sm">{vendorRating.totalReviews} total reviews</p>
                            <div className="flex items-center justify-center gap-1 mt-2 text-green-600 text-sm">
                                <TrendingUp className="h-4 w-4" />
                                <span>Highly rated vendor</span>
                            </div>
                        </div>

                        {/* Rating Distribution */}
                        <div className="space-y-2">
                            {ratingDistribution.map(({ star, count, percentage }) => (
                                <div key={star} className="flex items-center gap-2">
                                    <span className="text-sm text-gray-600 w-12">{star} star</span>
                                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-gold transition-all"
                                            style={{ width: `${percentage}%` }}
                                        />
                                    </div>
                                    <span className="text-sm text-gray-500 w-8">{count}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Performance Metrics */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 pt-6 border-t">
                        {vendorRating.metrics.map((metric) => {
                            const Icon = metric.icon
                            return (
                                <div key={metric.label} className="text-center">
                                    <div className="flex justify-center mb-2">
                                        <div className="p-3 bg-gray-100 rounded-full">
                                            <Icon className="h-5 w-5 text-gold" />
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-1">{metric.label}</p>
                                    <div className="flex items-center justify-center gap-1">
                                        <Star className="h-4 w-4 fill-gold text-gold" />
                                        <span className="font-bold text-charcoal">{metric.rating}</span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </CardContent>
            </Card>

            {/* Recent Vendor Reviews */}
            <Card className="border-none shadow-md">
                <CardHeader>
                    <CardTitle className="font-serif">Recent Customer Feedback</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {vendorRating.recentReviews.map((review) => (
                        <div key={review.id} className="p-4 bg-gray-50 rounded-lg">
                            <div className="flex items-start justify-between mb-3">
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <p className="font-medium text-charcoal">{review.customer}</p>
                                        <Badge variant="outline" className="text-xs">{review.productName}</Badge>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="flex gap-0.5">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={`h-4 w-4 ${i < review.rating ? "fill-gold text-gold" : "text-gray-300"}`}
                                                />
                                            ))}
                                        </div>
                                        <span className="text-sm text-gray-500">{review.date}</span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-700 text-sm">{review.comment}</p>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </div>
    )
}
