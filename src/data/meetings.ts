/**
 * Dummy Meeting Data
 */

export interface Meeting {
  id: string;
  userId: string;
  title: string;
  description?: string;
  startsAt: string;
  endsAt: string;
  duration: number;
  status: 'scheduled' | 'confirmed' | 'cancelled' | 'completed';
  location?: {
    type: 'video' | 'phone' | 'in-person';
    details: string;
  };
  createdAt: string;
  updatedAt: string;
}

export const DUMMY_MEETINGS: Meeting[] = [
  {
    id: 'meeting-1',
    userId: 'user-client-1',
    title: 'Project Kickoff Meeting',
    description: 'Discuss project requirements and timeline',
    startsAt: '2025-11-01T10:00:00Z',
    endsAt: '2025-11-01T11:00:00Z',
    duration: 60,
    status: 'scheduled',
    location: {
      type: 'video',
      details: 'https://meet.example.com/project-kickoff',
    },
    createdAt: '2024-10-21T09:00:00Z',
    updatedAt: '2024-10-21T09:00:00Z',
  },
  {
    id: 'meeting-2',
    userId: 'user-client-1',
    title: 'Design Review',
    description: 'Review initial design mockups',
    startsAt: '2025-10-28T14:00:00Z',
    endsAt: '2025-10-28T15:00:00Z',
    duration: 60,
    status: 'confirmed',
    location: {
      type: 'video',
      details: 'https://meet.example.com/design-review',
    },
    createdAt: '2024-10-15T10:30:00Z',
    updatedAt: '2024-10-22T11:00:00Z',
  },
  {
    id: 'meeting-3',
    userId: 'user-client-2',
    title: 'Consultation Call',
    description: 'Initial consultation for data science project',
    startsAt: '2025-10-27T16:00:00Z',
    endsAt: '2025-10-27T16:30:00Z',
    duration: 30,
    status: 'scheduled',
    location: {
      type: 'phone',
      details: '+1-555-0199',
    },
    createdAt: '2024-10-18T14:00:00Z',
    updatedAt: '2024-10-18T14:00:00Z',
  },
];

export const getMeetingsByUserId = (userId: string): Meeting[] => {
  return DUMMY_MEETINGS.filter(m => m.userId === userId);
};

export const getAllMeetings = (): Meeting[] => {
  return DUMMY_MEETINGS;
};

