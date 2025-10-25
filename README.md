# Team Replace Demo - Standalone Next.js Application

A complete, standalone Next.js application that clones the Team Replace frontend functionality using **dummy data only** - no API calls required!

## 🎯 Overview

This is a **fully functional demo** of the Team Replace platform with:
- ✅ **Complete UI/UX** matching the original frontend
- ✅ **Role-based authentication** (Admin & Client roles)
- ✅ **All pages and features** working with dummy data
- ✅ **No backend needed** - runs 100% on the frontend
- ✅ **Realistic data** - quotes, meetings, teams, users
- ✅ **Simulated OTP login** - no email service needed

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

The app will run on **http://localhost:3001** (port 3001 to avoid conflicts)

### 3. Login with Demo Users

Available demo users:

**Admin User:**
- Email: `admin@teamreplace.com`
- Role: Admin (see all quotes/meetings)

**Client Users:**
- Email: `john.doe@example.com`
- Email: `jane.smith@example.com`
- Email: `bob.wilson@example.com`
- Role: Client (see their own data)

**How to login:**
1. Go to `/login`
2. Enter any of the above emails
3. An alert will show you the OTP code (e.g., "123456")
4. Enter the OTP code and click "Verify & Login"

## 📁 Project Structure

```
team-replace-demo/
├── src/
│   ├── app/                        # Next.js App Router pages
│   │   ├── page.tsx                # Home page
│   │   ├── login/page.tsx          # Login page
│   │   ├── dashboard/page.tsx      # Client dashboard
│   │   ├── admin-dashboard/page.tsx # Admin dashboard
│   │   ├── teams/page.tsx          # Teams catalog
│   │   ├── quote/page.tsx          # Get quote form
│   │   └── book/page.tsx           # Book meeting form
│   │
│   ├── components/                 # Reusable components
│   │   ├── auth/                   # Authentication forms
│   │   ├── layout/                 # Layout components
│   │   └── Button.tsx              # Button component
│   │
│   ├── data/                       # Dummy data files
│   │   ├── users.ts                # User data (4 users)
│   │   ├── quotes.ts               # Quote data
│   │   ├── meetings.ts             # Meeting data
│   │   ├── teams.ts                # Team catalog data
│   │   ├── domains.ts              # Domain pages data
│   │   ├── exports.ts              # Export request data
│   │   └── deletions.ts            # Deletion request data
│   │
│   ├── store/                      # State management
│   │   └── authStore.ts            # Zustand auth store
│   │
│   └── utils/                      # Utility functions
│       ├── auth.ts                 # Simulated authentication
│       └── dummyData.ts            # Data access functions
│
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.js
```

## 📄 Available Pages

| Page | Route | Description | Access |
|------|-------|-------------|--------|
| Home | `/` | Landing page with features | Public |
| Login | `/login` | OTP-based authentication | Public |
| Client Dashboard | `/dashboard` | User's quotes and meetings | Client only |
| Admin Dashboard | `/admin-dashboard` | All quotes and meetings | Admin only |
| Teams Catalog | `/teams` | Browse available teams | Public |
| Get Quote | `/quote` | Request a quote form | Public |
| Book Meeting | `/book` | Schedule a meeting | Public |

## 👥 Dummy Data

### Users (4 total)
- 1 Admin user
- 3 Client users
- All have realistic profiles with email, role, and consent data

### Quotes (4 total)
- Different statuses: new, contacted, qualified, won
- Various industries and team types
- Associated with client users

### Meetings (3 total)
- Different statuses: scheduled, confirmed
- Video calls, phone calls
- Associated with client users

### Teams (5 total)
- Software Development, UI/UX Design, Data Science, DevOps, Mobile Development
- Realistic pricing, technologies, portfolios
- Different availability statuses

### Domains (4 total)
- Healthcare, Fintech, E-commerce, SaaS
- Industry-specific features and testimonials

## 🔑 Features

### Authentication
- **Simulated OTP system** - generates 6-digit codes
- **Role-based access** - Admin vs Client views
- **Session persistence** - uses Zustand with localStorage

### Client Features
- View personal quotes and meetings
- Request data export (simulated)
- Request account deletion (simulated)
- Browse teams catalog
- Submit quote requests
- Book meetings

### Admin Features
- View ALL quotes from all users
- View ALL meetings from all users
- Statistics dashboard
- Full data table views

### UI/UX
- **Tailwind CSS** styling
- **Responsive** design
- **Professional** layouts
- **Minimal and clean** interface (per user preference)

## 🛠️ Technology Stack

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Zustand** - State management
- **No backend** - 100% frontend

## 💾 Data Persistence

- Authentication state: Persisted in localStorage via Zustand
- All other data: Static TypeScript files (resets on page reload)

## 🎨 Customization

### Add More Users

Edit `src/data/users.ts`:

```typescript
export const DUMMY_USERS: User[] = [
  // Add your users here
  {
    id: 'user-5',
    email: 'newuser@example.com',
    role: 'client',
    // ...
  },
];
```

### Add More Quotes/Meetings

Edit `src/data/quotes.ts` or `src/data/meetings.ts`

### Modify Teams

Edit `src/data/teams.ts` to add/modify teams

## 📝 Scripts

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Type check
npm run typecheck

# Lint
npm run lint
```

## 🔄 Differences from Real Frontend

| Feature | Real Frontend | Demo Frontend |
|---------|---------------|---------------|
| API Calls | Yes (REST API) | No (dummy data) |
| Database | PostgreSQL | Static TypeScript |
| OTP Email | Sent via email | Shown in alert |
| Data Persistence | Server-side | Local only |
| Real-time Updates | WebSocket | None |
| File Uploads | Supported | Not supported |

## 🚨 Demo Mode Notices

The app includes visual indicators that this is a demo:
- Login page shows available test emails
- Forms show "Demo Mode" messages
- OTP codes appear in browser alerts
- Success messages indicate simulation

## 🎓 Use Cases

Perfect for:
- ✅ **Demos and presentations**
- ✅ **UI/UX testing**
- ✅ **Frontend development**
- ✅ **Prototyping**
- ✅ **Training and documentation**
- ✅ **Local development** without backend

## 📦 Deployment

Can be deployed to:
- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify
- Any static hosting service

```bash
npm run build
npm start
```

## 🤝 Contributing

To add new features:
1. Add dummy data to `/src/data/`
2. Create data access functions in `/src/utils/dummyData.ts`
3. Build UI components
4. Create pages in `/src/app/`

## 📄 License

This is a demo project for educational/demonstration purposes.

## 🎉 Ready to Use!

Just run `npm install` and `npm run dev` - no configuration needed!

---

**Made with ❤️ using Next.js and TypeScript**

