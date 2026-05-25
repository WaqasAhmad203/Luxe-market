"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/Card"

export default function LoginPage() {
    const router = useRouter()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError("") 

        try {
            const result = await signIn("credentials", {
                redirect: false,
                email,
                password,
            })

            if (result?.error) {
                setError("Invalid email or password")
            } else {
                router.push("/")
                router.refresh()
            }
        } catch (err) {
            setError("Something went wrong")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-cream px-4">
            <Card className="w-full max-w-md shadow-xl border-none">
                <CardHeader className="space-y-1 text-center">
                    <CardTitle className="text-3xl font-serif text-charcoal">Welcome Back</CardTitle>
                    <CardDescription>
                        Enter your credentials to access your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="h-12"
                            />
                        </div>
                        <div className="space-y-2">
                            <Input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="h-12"
                            />
                        </div>
                        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                        <Button
                            type="submit"
                            className="w-full h-12 text-lg bg-charcoal hover:bg-charcoal-light"
                            disabled={loading}
                        >
                            {loading ? "Signing in..." : "Sign In"}
                        </Button>
                    </form>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4 text-center text-sm text-gray-500">
                    <Link href="/forgot-password" className="hover:text-gold transition-colors">
                        Forgot your password?
                    </Link>
                    <p>
                        Don't have an account?{" "}
                        <Link href="/register" className="font-medium text-gold hover:underline">
                            Sign up
                        </Link>
                    </p>
                </CardFooter>
            </Card>
        </div>
    )
}
