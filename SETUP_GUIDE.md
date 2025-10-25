# Quick Setup Guide

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

## Installation Steps

### Step 1: Navigate to Project

```bash
cd team-replace-demo
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install all required packages:
- Next.js
- React
- TypeScript
- Tailwind CSS
- Zustand (state management)
- And more...

### Step 3: Start Development Server

```bash
npm run dev
```

The app will start on **http://localhost:3001**

### Step 4: Access the Application

Open your browser and go to: **http://localhost:3001**

## First Login

### Option 1: Admin User

1. Click "Login" on the home page
2. Enter email: `admin@teamreplace.com`
3. Click "Send Verification Code"
4. An alert will show your OTP (e.g., "123456")
5. Enter the 6-digit code
6. Click "Verify & Login"

You'll be redirected to the **Admin Dashboard** where you can see all quotes and meetings.

### Option 2: Client User

1. Click "Login" on the home page
2. Enter email: `john.doe@example.com` (or any other client email)
3. Click "Send Verification Code"
4. An alert will show your OTP
5. Enter the 6-digit code
6. Click "Verify & Login"

You'll be redirected to the **Client Dashboard** where you can see your own data.

## Available Demo Emails

### Admin
- `admin@teamreplace.com`

### Clients
- `john.doe@example.com`
- `jane.smith@example.com`
- `bob.wilson@example.com`

## Exploring the App

### As a Client:
- **Dashboard**: View your quotes and meetings
- **Teams**: Browse available development teams
- **Get Quote**: Request a quote for your project
- **Book Meeting**: Schedule a consultation call
- **Data Export**: Request to download your data
- **Data Deletion**: Request account deletion

### As an Admin:
- **Admin Dashboard**: See all quotes and meetings from all users
- **Statistics**: View overview stats
- **Manage Quotes**: See all quote requests
- **Manage Meetings**: See all scheduled meetings

## Testing the OTP System

The OTP system is simulated for demo purposes:

1. **Enter any of the demo emails** in the login form
2. **Check the browser alert** - it will show the 6-digit OTP code
3. **Copy the OTP** and paste it in the verification form
4. The system will automatically log you in

## Troubleshooting

### Port Already in Use

If port 3001 is already in use, edit `package.json` and change the port:

```json
"scripts": {
  "dev": "next dev -p 3002"  // Change to any available port
}
```

### Installation Errors

Try cleaning the cache:

```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Errors

Make sure you have Node.js 18 or higher:

```bash
node --version
```

## Next Steps

Once the app is running:

1. ✅ Login with different users to see role-based views
2. ✅ Browse the teams catalog
3. ✅ Submit a quote request
4. ✅ Book a meeting
5. ✅ Try the data export feature
6. ✅ Check the admin dashboard (as admin user)

## Production Build

To create a production build:

```bash
npm run build
npm start
```

The production server will start on **http://localhost:3001**

## Deployment

This app can be deployed to:
- **Vercel** (recommended) - Zero configuration
- **Netlify**
- **AWS Amplify**
- Any static hosting service

### Deploy to Vercel:

```bash
npm install -g vercel
vercel
```

Follow the prompts and your app will be deployed!

## Need Help?

Check the main `README.md` for detailed documentation.

---

**That's it! You're ready to go! 🚀**

