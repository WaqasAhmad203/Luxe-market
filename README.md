# 🏺 LuxeMarket — Premium Full-Stack Multi-Vendor Marketplace

[![Next.js](https://img.shields.io/badge/Next.js-16.0.3-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.0-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![Prisma](https://img.shields.io/badge/Prisma-6.0.0-indigo?style=for-the-badge&logo=prisma)](https://www.prisma.io/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.0-38BDF8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![NextAuth.js](https://img.shields.io/badge/NextAuth.js-v4.24-green?style=for-the-badge&logo=nextauth)](https://next-auth.js.org/)

**LuxeMarket** is a premium, full-stack multi-vendor e-commerce marketplace designed with modern luxury aesthetics. Built using Next.js 16 (App Router), React 19, and Tailwind CSS v4, it features a complete multi-role ecosystem for Customers, Vendors, and Administrators. Data persistence and authentication are fully handled via Prisma ORM and NextAuth.js.

---

## 🎨 Visual Identity & Premium Styling

LuxeMarket is designed with custom visual guidelines matching high-end design principles:
*   **Color Palette:** Warm luxury-themed accents consisting of **Cream** (`#FAFAF9`), **Charcoal** (`#1F2937`), and **Gold** (`#D4AF37`).
*   **Typography:** Playfair Display (Serif) for headings and Inter (Sans-serif) for high-contrast, modern body text.
*   **UX Enhancements:** Custom glassmorphic headers, clean card layouts, smooth transitions, and high-fidelity mock assets from Unsplash.

---

## 🚀 Key Features

### 👤 Role-Based Ecosystem
*   **Customers (USER):** Browse luxury items, search products by keyword or category, manage a persistent shopping cart, checkout, write reviews, and track order histories in their accounts.
*   **Sellers (VENDOR):** Edit and manage product listings via their own Vendor Portal, view sales metrics, track customers' order items, and modify order delivery statuses.
*   **Moderators (ADMIN):** Overview overall platform metrics, delete/edit violating products, and approve or reject vendor application profiles.

### 🛒 E-Commerce Mechanics
*   **Dynamic Catalog Routing:** Fully structured Next.js app routes (`/products`, `/products/[id]`, `/vendors`, `/vendors/[id]`).
*   **Persistent Shopping Cart:** Fully persistent cart utilizing React Context API synced dynamically with `localStorage`.
*   **Secure Authentication:** Secure login and registration powered by **NextAuth.js Credentials Provider** with password hashing via **bcryptjs**.
*   **High-Fidelity Checkout:** Simulated multi-stage checkout with custom billing address fields, card verification forms, async processing loaders, and interactive shipment tracking milestones.
*   **Ratings & Reviews System:** Modular customer feedback widgets, complete with breakdown bars and individual review cards for products and vendors.

---

## 🛠️ Tech Stack & Architecture

*   **Frontend:** React 19, Next.js 16 (App Router, Turbopack compiling), Tailwind CSS v4
*   **State Management:** React Context API (`CartContext`)
*   **Authentication:** NextAuth.js (JWT Strategy)
*   **Backend & DB:** Next.js Server Actions, Prisma ORM, SQLite
*   **Styling & Icons:** Tailwind CSS, Lucide React, clsx, tailwind-merge

---

## 📁 Repository Directory Structure

```
├── app/                      # Next.js App Router folders
│   ├── admin/                # Admin Portal pages (metrics, verification)
│   ├── api/                  # API endpoints (NextAuth handlers, register)
│   ├── cart/                 # Customer shopping cart page
│   ├── checkout/             # Payment & Order placement routes
│   ├── dashboard/            # Customer account profile & orders
│   ├── login/ / register/    # Credentials authentication views
│   ├── notifications/        # User notification inbox
│   ├── products/             # Product directory & detail pages
│   ├── vendor/               # Vendor Portal pages (catalog, order list)
│   └── vendors/              # Designer/Store directory & detail views
├── components/               # Reusable UI & Core Layout Elements
│   ├── home/                 # Category Grid, Hero banners
│   ├── layout/               # Header, Footer navigation
│   ├── notifications/        # NotificationCenter overlays
│   ├── reviews/              # ProductReviews & VendorRatings widgets
│   └── ui/                   # High-quality atomic components (Button, Input, Card)
├── context/                  # Global Cart Context state management
├── lib/                      # Core helpers (Prisma clients, Tailwind utilities)
└── prisma/                   # DB schema files & migration configurations
```

---

## ⚡ How to Setup & Run Locally

### 1. Prerequisites
Ensure you have **Node.js** (v18.x or higher) and **npm** installed.

### 2. Clone the Repository
```bash
git clone https://github.com/yourusername/multi-vendor-marketplace.git
cd multi-vendor-marketplace
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Setup Environment Variables
Create a `.env` file in the root directory (you can use `.env.example` as a template):
```bash
cp .env.example .env
```
Inside `.env`, configure your database URL and NextAuth credentials secret.

### 5. Initialize the Database
Configure your Prisma schema and seed the initial SQLite database:
```bash
npx prisma db push
```

### 6. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to experience LuxeMarket.

---

## 🔮 Future Roadmap (Potential Enhancements)
*   💳 **Real Payments Integration:** Integrate Stripe API for active transactions.
*   ☁️ **Cloud Storage Integration:** Hook up AWS S3 or Cloudinary to host user-uploaded images instead of mock links.
*   📡 **Live Notifications:** Move notification center to WebSocket or Server-Sent Events (SSE) for instant alerts on purchases and approvals.
*   📊 **Deeper Analytics:** Add interactive chart libraries (Recharts) inside the Vendor and Admin dashboards.
