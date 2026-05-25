"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/Card"

export default function RegisterPage() {
    const router = useRouter()
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role: "USER"
    })
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError("")

        try {
            const res = await fetch("/api/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            })

            if (res.ok) {
                router.push("/login")
            } else {
                const data = await res.json()
                setError(data.message || "Registration failed")
            }
        } catch (err) {
            setError("Something went wrong")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-cream px-4 py-12">
            <Card className="w-full max-w-md shadow-xl border-none">
                <CardHeader className="space-y-1 text-center">
                    <CardTitle className="text-3xl font-serif text-charcoal">Create Account</CardTitle>
                    <CardDescription>
                        Join LuxeMarket today
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Input
                                name="name"
                                placeholder="Full Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="h-12"
                            />
                        </div>
                        <div className="space-y-2">
                            <Input
                                name="email"
                                type="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="h-12"
                            />
                        </div>
                        <div className="space-y-2">
                            <Input
                                name="password"
                                type="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className="h-12"
                            />
                        </div>

                        <div className="flex gap-4 p-1 bg-gray-100 rounded-lg">
                            <button
                                type="button"
                                onClick={() => setFormData({ ...formData, role: "USER" })}
                                className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${formData.role === "USER"
                                        ? "bg-white text-charcoal shadow-sm"
                                        : "text-gray-500 hover:text-charcoal"
                                    }`}
                            >
                                Customer
                            </button>
                            <button
                                type="button"
                                onClick={() => setFormData({ ...formData, role: "VENDOR" })}
                                className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${formData.role === "VENDOR"
                                        ? "bg-white text-charcoal shadow-sm"
                                        : "text-gray-500 hover:text-charcoal"
                                    }`}
                            >
                                Vendor
                            </button>
                        </div>

                        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                        <Button
                            type="submit"
                            className="w-full h-12 text-lg bg-gold hover:bg-gold-light text-white"
                            disabled={loading}
                        >
                            {loading ? "Creating Account..." : "Sign Up"}
                        </Button>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-center text-sm text-gray-500">
                    <p>
                        Already have an account?{" "}
                        <Link href="/login" className="font-medium text-charcoal hover:underline">
                            Sign in
                        </Link>
                    </p>
                </CardFooter>
            </Card>
        </div>
    )
}
