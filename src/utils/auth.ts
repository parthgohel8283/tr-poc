/**
 * Authentication Utilities
 * Simulates OTP and authentication with dummy data
 */

import { getUserByEmail, User, DUMMY_USERS } from '../data/users';

// Simulated OTP codes - in real app, this would be sent via email
const OTP_CODES: Record<string, string> = {};

/**
 * Simulate sending OTP
 */
export const sendOTP = async (email: string): Promise<{ success: boolean; message: string }> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));

  const user = getUserByEmail(email);
  if (!user) {
    return {
      success: false,
      message: 'User not found. Available emails: ' + DUMMY_USERS.map(u => u.email).join(', '),
    };
  }

  // Generate random 6-digit OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  OTP_CODES[email.toLowerCase()] = otp;

  // In demo mode, show the OTP in console
  console.log(`🔐 OTP for ${email}: ${otp}`);
  
  // Also show it in alert for easy access
  if (typeof window !== 'undefined') {
    alert(`Demo Mode: Your OTP is ${otp}\n(In production, this would be sent via email)`);
  }

  return {
    success: true,
    message: 'OTP sent successfully (check console for demo OTP)',
  };
};

/**
 * Simulate verifying OTP
 */
export const verifyOTP = async (email: string, otp: string): Promise<{ 
  success: boolean; 
  message: string;
  user?: User;
  token?: string;
}> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));

  const storedOTP = OTP_CODES[email.toLowerCase()];
  if (!storedOTP || storedOTP !== otp) {
    return {
      success: false,
      message: 'Invalid OTP code',
    };
  }

  const user = getUserByEmail(email);
  if (!user) {
    return {
      success: false,
      message: 'User not found',
    };
  }

  // Clear OTP after successful verification
  delete OTP_CODES[email.toLowerCase()];

  // Generate dummy JWT token
  const token = `dummy-token-${user.id}-${Date.now()}`;

  return {
    success: true,
    message: 'Authentication successful',
    user,
    token,
  };
};

/**
 * Check if user has required role
 */
export const hasRole = (user: User | null, role: 'admin' | 'client'): boolean => {
  if (!user) return false;
  return user.role === role;
};

/**
 * Check if user is admin
 */
export const isAdmin = (user: User | null): boolean => {
  return hasRole(user, 'admin');
};

