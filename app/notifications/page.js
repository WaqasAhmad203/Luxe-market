"use client"

import { NotificationCenter } from "@/components/notifications/NotificationCenter"

export default function NotificationsPage() {
    return (
        <div className="min-h-screen bg-cream">
            <div className="container mx-auto px-4 py-12">
                <div className="max-w-3xl mx-auto">
                    <div className="mb-8">
                        <h1 className="text-3xl font-serif font-bold text-charcoal">Notifications</h1>
                        <p className="text-gray-500 mt-1">Stay updated with your marketplace activity</p>
                    </div>

                    <NotificationCenter />
                </div>
            </div>
        </div>
    )
}
