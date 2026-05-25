import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { DollarSign, Package, ShoppingBag, TrendingUp } from "lucide-react"

const stats = [
    { title: "Total Revenue", value: "$12,450", icon: DollarSign, change: "+12% from last month" },
    { title: "Total Orders", value: "156", icon: ShoppingBag, change: "+8% from last month" },
    { title: "Active Products", value: "24", icon: Package, change: "+2 new this week" },
    { title: "Average Rating", value: "4.8", icon: TrendingUp, change: "Based on 42 reviews" },
]

export default function VendorDashboard() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-serif font-bold text-charcoal">Dashboard Overview</h1>
                <p className="text-gray-500">Welcome back to your vendor portal.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, idx) => {
                    const Icon = stat.icon
                    return (
                        <Card key={idx} className="border-none shadow-md">
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-sm font-medium text-gray-500 font-sans">
                                    {stat.title}
                                </CardTitle>
                                <Icon className="h-4 w-4 text-gold" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold text-charcoal">{stat.value}</div>
                                <p className="text-xs text-gray-400 mt-1">{stat.change}</p>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>

            {/* Recent Activity Placeholder */}
            <Card className="border-none shadow-md">
                <CardHeader>
                    <CardTitle>Recent Orders</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-sm text-gray-500 text-center py-8">
                        No recent orders to display.
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
