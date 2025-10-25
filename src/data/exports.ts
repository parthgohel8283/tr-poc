/**
 * Dummy Export Request Data
 */

export interface ExportRequest {
  id: string;
  userId: string;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  requestedAt: string;
  processedAt?: string;
  expiresAt?: string;
  downloadUrl?: string;
}

export const DUMMY_EXPORTS: ExportRequest[] = [
  {
    id: 'export-1',
    userId: 'user-client-1',
    status: 'completed',
    requestedAt: '2024-10-20T10:00:00Z',
    processedAt: '2024-10-20T10:05:00Z',
    expiresAt: '2024-11-03T10:05:00Z',
    downloadUrl: '/api/exports/export-1/download',
  },
];

export const getExportByUserId = (userId: string): ExportRequest | undefined => {
  return DUMMY_EXPORTS.find(e => e.userId === userId);
};

export const getAllExports = (): ExportRequest[] => {
  return DUMMY_EXPORTS;
};

