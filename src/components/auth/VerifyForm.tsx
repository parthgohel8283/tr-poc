/**
 * Verify OTP Form Component
 */

'use client';

import React, { useState } from 'react';
import { verifyOTP } from '@/utils/auth';
import { Button } from '../Button';
import { User } from '@/data/users';

interface VerifyFormProps {
  email: string;
  onSuccess: (user: User, token: string) => void;
  onBack: () => void;
}

export const VerifyForm: React.FC<VerifyFormProps> = ({ email, onSuccess, onBack }) => {
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const result = await verifyOTP(email, otp);
      if (result.success && result.user && result.token) {
        onSuccess(result.user, result.token);
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError('Verification failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-1">
          Verification Code
        </label>
        <input
          id="otp"
          type="text"
          required
          value={otp}
          onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-center text-2xl tracking-widest"
          placeholder="000000"
          maxLength={6}
          autoComplete="one-time-code"
        />
        <p className="mt-1 text-sm text-gray-500">
          Code sent to: <strong>{email}</strong>
        </p>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-3">
          <p className="text-sm text-red-800">{error}</p>
        </div>
      )}

      <div className="space-y-3">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          disabled={loading || otp.length !== 6}
        >
          {loading ? 'Verifying...' : 'Verify & Login'}
        </Button>

        <Button
          type="button"
          variant="secondary"
          size="md"
          fullWidth
          onClick={onBack}
        >
          Back to Email
        </Button>
      </div>
    </form>
  );
};

