"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/Badge"
import { Star, ThumbsUp, MessageSquare } from "lucide-react"

export function ProductReviews({ productId }) {
    const [showReviewForm, setShowReviewForm] = useState(false)
    const [rating, setRating] = useState(0)
    const [hoverRating, setHoverRating] = useState(0)

    const reviews = [
        {
            id: 1,
            user: "Sarah Johnson",
            rating: 5,
            date: "2025-11-20",
            comment: "Absolutely love this product! The quality is exceptional and it arrived quickly. Highly recommend!",
            helpful: 12,
            verified: true
        },
        {
            id: 2,
            user: "Michael Chen",
            rating: 4,
            date: "2025-11-18",
            comment: "Great product overall. The only minor issue is that it's slightly smaller than I expected, but still very satisfied.",
            helpful: 8,
            verified: true
        },
        {
            id: 3,
            user: "Emma Davis",
            rating: 5,
            date: "2025-11-15",
            comment: "Perfect! Exactly as described. The craftsmanship is outstanding and it feels very luxurious.",
            helpful: 15,
            verified: false
        },
    ]

    const averageRating = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
    const ratingDistribution = [5, 4, 3, 2, 1].map(star => ({
        star,
        count: reviews.filter(r => r.rating === star).length,
        percentage: (reviews.filter(r => r.rating === star).length / reviews.length) * 100
    }))

    return (
        <div className="space-y-6">
            {/* Rating Summary */}
            <Card className="border-none shadow-md">
                <CardHeader>
                    <CardTitle className="font-serif">Customer Reviews</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Overall Rating */}
                        <div className="text-center">
                            <div className="text-5xl font-bold text-charcoal mb-2">{averageRating.toFixed(1)}</div>
                            <div className="flex items-center justify-center gap-1 mb-2">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`h-6 w-6 ${i < Math.floor(averageRating) ? "fill-gold text-gold" : "text-gray-300"}`}
                                    />
                                ))}
                            </div>
                            <p className="text-gray-500 text-sm">{reviews.length} reviews</p>
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

                    <Button
                        variant="gold"
                        className="w-full mt-6"
                        onClick={() => setShowReviewForm(!showReviewForm)}
                    >
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Write a Review
                    </Button>
                </CardContent>
            </Card>

            {/* Review Form */}
            {showReviewForm && (
                <Card className="border-none shadow-md">
                    <CardHeader>
                        <CardTitle className="font-serif">Write Your Review</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Your Rating</label>
                            <div className="flex gap-2">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        key={star}
                                        type="button"
                                        onMouseEnter={() => setHoverRating(star)}
                                        onMouseLeave={() => setHoverRating(0)}
                                        onClick={() => setRating(star)}
                                    >
                                        <Star
                                            className={`h-8 w-8 cursor-pointer transition-colors ${star <= (hoverRating || rating) ? "fill-gold text-gold" : "text-gray-300"
                                                }`}
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Your Review</label>
                            <textarea
                                rows={4}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                                placeholder="Share your experience with this product..."
                            />
                        </div>

                        <div className="flex gap-3">
                            <Button variant="gold" className="flex-1">Submit Review</Button>
                            <Button variant="outline" onClick={() => setShowReviewForm(false)}>Cancel</Button>
                        </div>
                    </CardContent>
                </Card>
            )}

            {/* Reviews List */}
            <div className="space-y-4">
                {reviews.map((review) => (
                    <Card key={review.id} className="border-none shadow-md">
                        <CardContent className="p-6">
                            <div className="flex items-start justify-between mb-3">
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <p className="font-medium text-charcoal">{review.user}</p>
                                        {review.verified && (
                                            <Badge variant="secondary" className="text-xs">Verified Purchase</Badge>
                                        )}
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

                            <p className="text-gray-700 mb-4">{review.comment}</p>

                            <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-gold transition-colors">
                                <ThumbsUp className="h-4 w-4" />
                                Helpful ({review.helpful})
                            </button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
