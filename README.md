# TierPass - Event Management System

A modern, tier-based event management platform built with Next.js, Clerk, and Supabase.

## Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Getting Started](#-getting-started)

  - [Clone the Repository](#1-clone-the-repository)
  - [Install Dependencies](#2-install-dependencies)
  - [Environment Setup](#3-environment-setup)
  - [Database Setup](#4-database-setup)
  - [Run the Development Server](#5-run-the-development-server)

- [Project Structure](#-project-structure)
- [Available Scripts](#-available-scripts)
- [Environment Variables](#-environment-variables)
- [Deployment](#-deployment)
- [License](#-license)
- [Acknowledgments](#-acknowledgments)

## 🚀 Features

### User Authentication

- Secure sign-up and login with Clerk
- Role-based access control
- Session management

### Tier-based Event Access

- Multiple membership tiers (Free, Silver, Gold, Platinum)
- Event filtering by membership level
- Upgrade prompts for premium content

### Interactive Dashboard

- Real-time event statistics
- Search and filter functionality
- Grid/List view toggle
- Responsive design

### User Profiles

- Membership status
- Account settings
- Tier upgrade options

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 19, TypeScript
- **Styling**: Tailwind CSS, Radix UI
- **Authentication**: Clerk
- **Database**: Supabase
- **State Management**: TanStack Query
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form
- **Icons**: Lucide React

## 📋 Prerequisites

- Node.js 18.0.0 or later
- npm, yarn, or pnpm (recommended)
- Clerk account for authentication
- Supabase account for database

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/KaranMali2001/tierpass.git
cd tierpass
```

### 2. Install Dependencies

Using pnpm (recommended):

```bash
pnpm install
```

### 3. Environment Setup

Create a `.env.local` file in the root directory and add the following variables:

```env
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

### 4. Database Setup

- Create a new project in Supabase
- Run the following SQL in the Supabase SQL editor:

```sql
CREATE TABLE events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT,
  date TIMESTAMP WITH TIME ZONE NOT NULL,
  location TEXT,
  tier TEXT NOT NULL DEFAULT 'free',
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Enable read access for all users"
ON events FOR SELECT
USING (true);

CREATE INDEX idx_events_tier ON events(tier);
```

### 5. Run the Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📂 Project Structure

```
tierpass/
├── public/            # Static files
├── src/
│   ├── app/           # App router pages
│   ├── components/    # Reusable components
│   ├── lib/           # Utility functions
│   └── types/         # TypeScript type definitions
├── .env.local         # Environment variables
└── ...               # Configuration files
```

## 🛠️ Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Create production build
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier

## 🔒 Environment Variables

The following environment variables are required:

- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` - Clerk publishable key
- `CLERK_SECRET_KEY` - Clerk secret key
- `NEXT_PUBLIC_SUPABASE_URL` - Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Supabase anon/public key
- `SUPABASE_SERVICE_ROLE_KEY` - Supabase service role key

## 🚀 Deployment

### Vercel (Recommended)

- Push your code to GitHub/GitLab/Bitbucket
- Import the repository into Vercel
- Add your environment variables
- Deploy!

### Other Platforms

- Netlify
- AWS Amplify
- Heroku
- Docker

## 📝 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Next.js
- Clerk
- Supabase
- Tailwind CSS
