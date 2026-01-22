# Admin Insights

A modern, feature-rich admin dashboard built with React, TypeScript, and TanStack Router. This application provides a comprehensive admin interface with user management, task tracking, app integrations, analytics, and more.

## ✨ Features

### Core Features
- **Dashboard** - Analytics overview with charts and metrics
- **Task Management** - Create, manage, and track tasks
- **User Management** - Comprehensive user list with filtering and sorting
- **App Integrations** - Manage third-party app connections
- **Chats** - Messaging interface for communication
- **Settings** - Customize appearance, account, and preferences

### Authentication
- Sign In (multiple layouts)
- Sign Up
- Forgot Password
- OTP Verification
  
### UI/UX
- **Dark/Light Mode** - Theme switching support
- **Responsive Design** - Mobile-first approach
- **Command Menu** - Quick navigation with ⌘K
- **Search** - Global search functionality
- **Error Pages** - Custom error handling (401, 403, 404, 500, 503)
- **Loading States** - Navigation progress indicators

## 🚀 Tech Stack

### Core
- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **TanStack Router** - Type-safe routing
- **TanStack Query** - Data fetching and caching
- **TanStack Table** - Powerful data tables

### UI Components
- **Radix UI** - Accessible component primitives
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Icon library
- **Sonner** - Toast notifications
- **Recharts** - Chart library

### State Management
- **Zustand** - Lightweight state management
- **React Hook Form** - Form handling
- **Zod** - Schema validation


## 📦 Installation

### Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Admin_Insights
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in terminal)


## 📁 Project Structure

```
src/
├── assets/          # Static assets and icons
├── components/      # Reusable UI components
│   ├── layout/     # Layout components (Header, Sidebar, etc.)
│   ├── ui/         # Base UI components (Button, Card, etc.)
│   └── ...
├── context/         # React context providers
├── features/        # Feature-based modules
│   ├── apps/       # App integrations
│   ├── auth/       # Authentication pages
│   ├── chats/      # Chat functionality
│   ├── dashboard/  # Dashboard and analytics
│   ├── errors/     # Error pages
│   ├── settings/   # Settings pages
│   ├── tasks/      # Task management
│   └── users/      # User management
├── hooks/          # Custom React hooks
├── lib/            # Utility functions
├── routes/         # Route definitions
├── stores/         # Zustand stores
└── styles/         # Global styles
```

## 🎨 Customization

### Theme
The app supports light/dark themes with customizable colors. Theme settings are managed through the `ThemeProvider` context.

### Styling
- Uses Tailwind CSS for styling
- Custom CSS variables for theming
- Responsive breakpoints configured

### Path Aliases
The project uses `@/` as an alias for the `src/` directory:
```typescript
import { Button } from '@/components/ui/button'
```

## 🚢 Deployment

### Build for Production
```bash
pnpm build
```

The build output will be in the `dist/` directory, ready to be deployed to any static hosting service.
