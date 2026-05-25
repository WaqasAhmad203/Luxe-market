import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import bcrypt from "bcryptjs"

export async function POST(req) {
    try {
        const { name, email, password, role } = await req.json()

        if (!email || !password) {
            return NextResponse.json({ message: "Missing required fields" }, { status: 400 })
        }

        const existingUser = await prisma.user.findUnique({
            where: { email }
        })

        if (existingUser) {
            return NextResponse.json({ message: "User already exists" }, { status: 400 })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                role: role || "USER", // Default to USER, but allow VENDOR registration
            }
        })

        // If registering as vendor, create empty profile
        if (role === "VENDOR") {
            await prisma.vendorProfile.create({
                data: {
                    userId: user.id,
                    storeName: `${name}'s Store`, // Default store name
                }
            })
        }

        return NextResponse.json({ message: "User created successfully" }, { status: 201 })
    } catch (error) {
        console.error("Registration error:", error)
        return NextResponse.json({ message: "Internal server error" }, { status: 500 })
    }
}
