/**
 * Login Form Component
 * Handles OTP request
 */

'use client';

import React, { useState } from 'react';
import { sendOTP } from '@/utils/auth';
import { Button } from '../Button';
import { DUMMY_USERS } from '@/data/users';

interface LoginFormProps {
  onSuccess: (email: string) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSuccess }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const result = await sendOTP(email);
      if (result.success) {
        onSuccess(email);
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError('Failed to send OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Demo Users Helper */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm font-medium text-blue-900 mb-2">Demo Mode - Available Users:</p>
        <ul className="text-xs text-blue-800 space-y-1">
          {DUMMY_USERS.map(user => (
            <li key={user.id}>
              • {user.email} ({user.role})
              <button
                type="button"
                onClick={() => setEmail(user.email)}
                className="ml-2 text-blue-600 hover:underline"
              >
                Use this
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter your email"
        />
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-3">
          <p className="text-sm text-red-800">{error}</p>
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        fullWidth
        disabled={loading}
      >
        {loading ? 'Sending OTP...' : 'Send Verification Code'}
      </Button>

      <p className="text-xs text-gray-500 text-center">
        We'll send you a 6-digit verification code to your email.
        <br />
        <strong>(Demo: The OTP will appear in an alert)</strong>
      </p>
    </form>
  );
};

