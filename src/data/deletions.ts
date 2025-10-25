/**
 * Dummy Deletion Request Data
 */

export interface DeletionRequest {
  id: string;
  userId: string;
  reason?: string;
  status: 'pending' | 'approved' | 'rejected';
  requestedAt: string;
  reviewedAt?: string;
}

export const DUMMY_DELETIONS: DeletionRequest[] = [];

export const getDeletionByUserId = (userId: string): DeletionRequest | undefined => {
  return DUMMY_DELETIONS.find(d => d.userId === userId);
};

export const getAllDeletions = (): DeletionRequest[] => {
  return DUMMY_DELETIONS;
};

