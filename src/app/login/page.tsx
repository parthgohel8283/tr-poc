/**
 * Login Page
 */

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';
import { LoginForm } from '@/components/auth/LoginForm';
import { VerifyForm } from '@/components/auth/VerifyForm';
import { User } from '@/data/users';

export default function LoginPage() {
  const [step, setStep] = useState<'request' | 'verify'>('request');
  const [email, setEmail] = useState('');
  const router = useRouter();
  const setAuth = useAuthStore((state) => state.setAuth);

  const handleOTPRequested = (requestedEmail: string) => {
    setEmail(requestedEmail);
    setStep('verify');
  };

  const handleVerified = (user: User, token: string) => {
    setAuth(user, token);
    
    // Redirect based on user role
    if (user.role === 'admin') {
      router.push('/admin-dashboard');
    } else {
      router.push('/dashboard');
    }
  };

  const handleBack = () => {
    setStep('request');
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            {step === 'request' ? 'Welcome Back' : 'Verify Your Email'}
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            {step === 'request'
              ? 'Enter your email to receive a verification code'
              : 'Enter the 6-digit code we sent to your email'}
          </p>
        </div>

        {/* Form */}
        <div className="bg-white px-8 py-10 shadow-lg rounded-lg">
          {step === 'request' ? (
            <LoginForm onSuccess={handleOTPRequested} />
          ) : (
            <VerifyForm email={email} onSuccess={handleVerified} onBack={handleBack} />
          )}
        </div>

        {/* Back to Home */}
        <div className="text-center">
          <a href="/" className="text-sm text-blue-600 hover:text-blue-800">
            ← Back to Home
          </a>
        </div>
      </div>
    </main>
  );
}

