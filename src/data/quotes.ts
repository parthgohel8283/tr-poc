/**
 * Dummy Quote Data
 */

export interface Quote {
  id: string;
  userId: string;
  name: string;
  email: string;
  company?: string;
  phone?: string;
  industry: string;
  team: string;
  budget: string;
  description: string;
  timeline: string;
  status: 'new' | 'contacted' | 'qualified' | 'won' | 'lost';
  createdAt: string;
  updatedAt: string;
}

export const DUMMY_QUOTES: Quote[] = [
  {
    id: 'quote-1',
    userId: 'user-client-1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    company: 'Acme Corp',
    phone: '+1-555-0101',
    industry: 'Technology',
    team: 'software-development',
    budget: '$50k-$100k',
    description: 'Need a mobile app development team for our new project',
    timeline: '3-6 months',
    status: 'qualified',
    createdAt: '2024-02-21T10:00:00Z',
    updatedAt: '2024-02-25T14:30:00Z',
  },
  {
    id: 'quote-2',
    userId: 'user-client-1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    company: 'Acme Corp',
    phone: '+1-555-0101',
    industry: 'Technology',
    team: 'ui-ux-design',
    budget: '$25k-$50k',
    description: 'UI/UX redesign for our existing platform',
    timeline: '1-3 months',
    status: 'won',
    createdAt: '2024-03-15T11:20:00Z',
    updatedAt: '2024-03-20T09:45:00Z',
  },
  {
    id: 'quote-3',
    userId: 'user-client-2',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    company: 'Tech Innovations',
    phone: '+1-555-0102',
    industry: 'Fintech',
    team: 'data-science',
    budget: '$100k+',
    description: 'Data analytics and ML team for financial forecasting',
    timeline: '6+ months',
    status: 'contacted',
    createdAt: '2024-04-01T13:30:00Z',
    updatedAt: '2024-04-02T16:00:00Z',
  },
  {
    id: 'quote-4',
    userId: 'user-client-3',
    name: 'Bob Wilson',
    email: 'bob.wilson@example.com',
    company: 'Digital Solutions Inc',
    phone: '+1-555-0103',
    industry: 'E-commerce',
    team: 'software-development',
    budget: '$25k-$50k',
    description: 'E-commerce platform development',
    timeline: '3-6 months',
    status: 'new',
    createdAt: '2024-10-20T15:45:00Z',
    updatedAt: '2024-10-20T15:45:00Z',
  },
];

export const getQuotesByUserId = (userId: string): Quote[] => {
  return DUMMY_QUOTES.filter(q => q.userId === userId);
};

export const getAllQuotes = (): Quote[] => {
  return DUMMY_QUOTES;
};

