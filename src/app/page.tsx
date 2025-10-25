/**
 * Home Page
 */

'use client';

import Link from 'next/link';
import { useAuthStore } from '@/store/authStore';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function HomePage() {
  const { isAuthenticated, user } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated && user) {
      if (user.role === 'admin') {
        router.push('/admin-dashboard');
      } else {
        router.push('/dashboard');
      }
    }
  }, [isAuthenticated, user, router]);

  return (
    <main className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">Team Replace</h1>
            <Link
              href="/login"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Login
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Find Your Perfect Development Team
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Connect with pre-vetted, specialized development teams for your next project.
            From software development to UI/UX design, we have the experts you need.
          </p>

          <div className="flex gap-4 justify-center">
            <Link
              href="/teams"
              className="px-8 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg hover:bg-blue-700 transition"
            >
              Browse Teams
            </Link>
            <Link
              href="/quote"
              className="px-8 py-3 bg-white text-blue-600 text-lg font-medium rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition"
            >
              Get a Quote
            </Link>
          </div>

          {/* Demo Notice */}
          <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-yellow-900 mb-2">
              🎨 Demo Mode
            </h3>
            <p className="text-sm text-yellow-800">
              This is a demo version with dummy data. No real API calls are made.
              <br />
              All data is stored locally and resets when you clear your browser storage.
            </p>
          </div>

          {/* Features */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick Start</h3>
              <p className="text-gray-600 text-sm">
                Get matched with teams in minutes, not weeks
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Pre-vetted Teams</h3>
              <p className="text-gray-600 text-sm">
                All teams are thoroughly screened and verified
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Industry Experts</h3>
              <p className="text-gray-600 text-sm">
                Teams specialized in healthcare, fintech, e-commerce, and more
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2024 Team Replace. Demo Version.</p>
          <p className="mt-2 text-sm text-gray-400">
            Standalone Next.js app with dummy data - No API required
          </p>
        </div>
      </footer>
    </main>
  );
}

