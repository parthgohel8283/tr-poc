/**
 * Dummy User Data
 */

export interface User {
  id: string;
  email: string;
  role: 'admin' | 'client';
  firstName?: string;
  lastName?: string;
  createdAt: string;
  consent: {
    termsAccepted: boolean;
    termsAcceptedAt?: string;
    privacyAccepted: boolean;
    privacyAcceptedAt?: string;
    marketingEmails?: boolean;
    marketingEmailsAt?: string;
  };
}

export const DUMMY_USERS: User[] = [
  {
    id: 'user-admin-1',
    email: 'admin@teamreplace.com',
    role: 'admin',
    firstName: 'Admin',
    lastName: 'User',
    createdAt: '2024-01-15T10:00:00Z',
    consent: {
      termsAccepted: true,
      termsAcceptedAt: '2024-01-15T10:00:00Z',
      privacyAccepted: true,
      privacyAcceptedAt: '2024-01-15T10:00:00Z',
      marketingEmails: true,
      marketingEmailsAt: '2024-01-15T10:00:00Z',
    },
  },
  {
    id: 'user-client-1',
    email: 'john.doe@example.com',
    role: 'client',
    firstName: 'John',
    lastName: 'Doe',
    createdAt: '2024-02-20T14:30:00Z',
    consent: {
      termsAccepted: true,
      termsAcceptedAt: '2024-02-20T14:30:00Z',
      privacyAccepted: true,
      privacyAcceptedAt: '2024-02-20T14:30:00Z',
      marketingEmails: false,
    },
  },
  {
    id: 'user-client-2',
    email: 'jane.smith@example.com',
    role: 'client',
    firstName: 'Jane',
    lastName: 'Smith',
    createdAt: '2024-03-10T09:15:00Z',
    consent: {
      termsAccepted: true,
      termsAcceptedAt: '2024-03-10T09:15:00Z',
      privacyAccepted: true,
      privacyAcceptedAt: '2024-03-10T09:15:00Z',
      marketingEmails: true,
      marketingEmailsAt: '2024-03-10T09:15:00Z',
    },
  },
  {
    id: 'user-client-3',
    email: 'bob.wilson@example.com',
    role: 'client',
    firstName: 'Bob',
    lastName: 'Wilson',
    createdAt: '2024-04-05T16:45:00Z',
    consent: {
      termsAccepted: true,
      termsAcceptedAt: '2024-04-05T16:45:00Z',
      privacyAccepted: true,
      privacyAcceptedAt: '2024-04-05T16:45:00Z',
      marketingEmails: true,
      marketingEmailsAt: '2024-04-05T16:45:00Z',
    },
  },
];

export const getUserByEmail = (email: string): User | undefined => {
  return DUMMY_USERS.find(u => u.email.toLowerCase() === email.toLowerCase());
};

export const getUserById = (id: string): User | undefined => {
  return DUMMY_USERS.find(u => u.id === id);
};

