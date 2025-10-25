/**
 * Authenticated Layout Component
 * Layout for logged-in users
 */

'use client';

import React, { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';
import Link from 'next/link';

interface AuthenticatedLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export const AuthenticatedLayout: React.FC<AuthenticatedLayoutProps> = ({
  children,
  title,
  description,
}) => {
  const router = useRouter();
  const { user, isAuthenticated, logout } = useAuthStore();

  useEffect(() => {
    if (!isAuthenticated || !user) {
      router.push('/login');
    }
  }, [isAuthenticated, user, router]);

  if (!isAuthenticated || !user) {
    return null;
  }

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  const isAdmin = user.role === 'admin';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Team Replace</h1>
              {user && (
                <p className="text-sm text-gray-600">
                  {user.email} {isAdmin && '(Admin)'}
                </p>
              )}
            </div>
            <nav className="flex gap-4 items-center">
              {isAdmin ? (
                <>
                  <Link href="/admin-dashboard" className="text-gray-700 hover:text-blue-600">
                    Admin Dashboard
                  </Link>
                  <Link href="/admin/quotes" className="text-gray-700 hover:text-blue-600">
                    Quotes
                  </Link>
                  <Link href="/admin/meetings" className="text-gray-700 hover:text-blue-600">
                    Meetings
                  </Link>
                </>
              ) : (
                <>
                  <Link href="/dashboard" className="text-gray-700 hover:text-blue-600">
                    Dashboard
                  </Link>
                  <Link href="/teams" className="text-gray-700 hover:text-blue-600">
                    Teams
                  </Link>
                  <Link href="/quote" className="text-gray-700 hover:text-blue-600">
                    Get Quote
                  </Link>
                  <Link href="/book" className="text-gray-700 hover:text-blue-600">
                    Book Meeting
                  </Link>
                </>
              )}
              <button
                onClick={handleLogout}
                className="text-gray-700 hover:text-red-600"
              >
                Logout
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {title && (
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
            {description && (
              <p className="mt-2 text-gray-600">{description}</p>
            )}
          </div>
        )}
        {children}
      </main>
    </div>
  );
};

