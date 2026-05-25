"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/Badge"
import { Bell, Package, ShoppingBag, Star, CheckCircle, X } from "lucide-react"

export function NotificationCenter() {
    const [notifications, setNotifications] = useState([
        {
            id: 1,
            type: "order",
            title: "Order Shipped",
            message: "Your order #ORD-1234 has been shipped and is on its way!",
            time: "5 minutes ago",
            read: false,
            icon: Package
        },
        {
            id: 2,
            type: "review",
            title: "New Review",
            message: "Sarah Johnson left a 5-star review on your product 'Luxury Silk Scarf'",
            time: "1 hour ago",
            read: false,
            icon: Star
        },
        {
            id: 3,
            type: "order",
            title: "New Order",
            message: "You received a new order #ORD-1235 for $280",
            time: "2 hours ago",
            read: true,
            icon: ShoppingBag
        },
        {
            id: 4,
            type: "system",
            title: "Payment Received",
            message: "Payment of $450 has been successfully processed",
            time: "1 day ago",
            read: true,
            icon: CheckCircle
        },
    ])

    const unreadCount = notifications.filter(n => !n.read).length

    const markAsRead = (id) => {
        setNotifications(notifications.map(n =>
            n.id === id ? { ...n, read: true } : n
        ))
    }

    const markAllAsRead = () => {
        setNotifications(notifications.map(n => ({ ...n, read: true })))
    }

    const deleteNotification = (id) => {
        setNotifications(notifications.filter(n => n.id !== id))
    }

    const getNotificationColor = (type) => {
        switch (type) {
            case "order": return "text-blue-600 bg-blue-50"
            case "review": return "text-gold bg-yellow-50"
            case "system": return "text-green-600 bg-green-50"
            default: return "text-gray-600 bg-gray-50"
        }
    }

    return (
        <Card className="border-none shadow-md">
            <CardHeader className="flex flex-row items-center justify-between">
                <div className="flex items-center gap-3">
                    <CardTitle className="font-serif">Notifications</CardTitle>
                    {unreadCount > 0 && (
                        <Badge variant="gold">{unreadCount} new</Badge>
                    )}
                </div>
                {unreadCount > 0 && (
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={markAllAsRead}
                    >
                        Mark all as read
                    </Button>
                )}
            </CardHeader>
            <CardContent>
                {notifications.length === 0 ? (
                    <div className="text-center py-12">
                        <Bell className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                        <p className="text-gray-500">No notifications yet</p>
                    </div>
                ) : (
                    <div className="space-y-3">
                        {notifications.map((notification) => {
                            const Icon = notification.icon
                            return (
                                <div
                                    key={notification.id}
                                    className={`p-4 rounded-lg border transition-all ${notification.read
                                            ? "bg-white border-gray-200"
                                            : "bg-blue-50 border-blue-200"
                                        }`}
                                >
                                    <div className="flex items-start gap-3">
                                        <div className={`p-2 rounded-full ${getNotificationColor(notification.type)}`}>
                                            <Icon className="h-5 w-5" />
                                        </div>

                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-start justify-between gap-2">
                                                <div className="flex-1">
                                                    <p className="font-medium text-charcoal mb-1">
                                                        {notification.title}
                                                    </p>
                                                    <p className="text-sm text-gray-600 mb-2">
                                                        {notification.message}
                                                    </p>
                                                    <p className="text-xs text-gray-400">
                                                        {notification.time}
                                                    </p>
                                                </div>

                                                <div className="flex gap-1">
                                                    {!notification.read && (
                                                        <button
                                                            onClick={() => markAsRead(notification.id)}
                                                            className="p-1 hover:bg-gray-100 rounded transition-colors"
                                                            title="Mark as read"
                                                        >
                                                            <CheckCircle className="h-4 w-4 text-gray-400" />
                                                        </button>
                                                    )}
                                                    <button
                                                        onClick={() => deleteNotification(notification.id)}
                                                        className="p-1 hover:bg-gray-100 rounded transition-colors"
                                                        title="Delete"
                                                    >
                                                        <X className="h-4 w-4 text-gray-400" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )}
            </CardContent>
        </Card>
    )
}
