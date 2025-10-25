/**
 * Client Dashboard Page
 */

'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';
import { AuthenticatedLayout } from '@/components/layout/AuthenticatedLayout';
import { getUserOverview } from '@/utils/dummyData';
import { Quote } from '@/data/quotes';
import { Meeting } from '@/data/meetings';
import { ExportRequest } from '@/data/exports';
import { DeletionRequest } from '@/data/deletions';
import { requestExport, downloadExport, requestDeletion } from '@/utils/dummyData';

interface Overview {
  quotes: Quote[];
  meetings: Meeting[];
  exportRequest?: ExportRequest;
  deletionRequest?: DeletionRequest;
}

export default function DashboardPage() {
  const { user, token, isAuthenticated } = useAuthStore();
  const router = useRouter();
  const [overview, setOverview] = useState<Overview | null>(null);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState<string | null>(null);

  const fetchOverview = useCallback(async () => {
    if (!user) return;

    try {
      setLoading(true);
      const data = await getUserOverview(user.id);
      setOverview({
        quotes: data.quotes,
        meetings: data.meetings,
        exportRequest: data.exportRequest,
        deletionRequest: data.deletionRequest,
      });
    } catch (err) {
      console.error('Error fetching overview:', err);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    if (!isAuthenticated || !user) {
      router.push('/login');
      return;
    }

    if (user.role === 'admin') {
      router.push('/admin-dashboard');
      return;
    }

    fetchOverview();
  }, [isAuthenticated, user, router, fetchOverview]);

  const handleExportRequest = async () => {
    if (!user) return;
    
    try {
      setActionLoading('export');
      const result = await requestExport(user.id);
      alert(result.message);
      await fetchOverview();
    } catch (err) {
      alert('Failed to request export');
    } finally {
      setActionLoading(null);
    }
  };

  const handleDownloadExport = async (exportId: string) => {
    try {
      setActionLoading('download');
      const blob = await downloadExport(exportId);
      
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'my-data-export.json';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (err) {
      alert('Failed to download export');
    } finally {
      setActionLoading(null);
    }
  };

  const handleDeletionRequest = async () => {
    if (!user) return;

    const reason = prompt('Please provide a reason for deletion (optional):');
    if (reason === null) return;

    try {
      setActionLoading('delete');
      const result = await requestDeletion(user.id, reason);
      alert(result.message);
      await fetchOverview();
    } catch (err) {
      alert('Failed to request deletion');
    } finally {
      setActionLoading(null);
    }
  };

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      new: 'bg-blue-100 text-blue-800',
      contacted: 'bg-yellow-100 text-yellow-800',
      qualified: 'bg-purple-100 text-purple-800',
      won: 'bg-green-100 text-green-800',
      lost: 'bg-red-100 text-red-800',
      scheduled: 'bg-blue-100 text-blue-800',
      confirmed: 'bg-green-100 text-green-800',
      cancelled: 'bg-red-100 text-red-800',
      completed: 'bg-gray-100 text-gray-800',
      pending: 'bg-yellow-100 text-yellow-800',
      processing: 'bg-blue-100 text-blue-800',
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  if (loading || !overview) {
    return (
      <AuthenticatedLayout title="Dashboard" description={`Welcome back, ${user?.email}!`}>
        <div className="text-center">
          <p className="text-gray-600">Loading...</p>
        </div>
      </AuthenticatedLayout>
    );
  }

  return (
    <AuthenticatedLayout title="Dashboard" description={`Welcome back, ${user?.email}!`}>
      <div>
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Quotes Card */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              My Quotes ({overview.quotes.length})
            </h2>
            {overview.quotes && overview.quotes.length > 0 ? (
              <div className="space-y-4">
                {overview.quotes.slice(0, 3).map((quote) => (
                  <div key={quote.id} className="border-b border-gray-200 pb-3 last:border-0">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-medium text-gray-900">{quote.name}</h3>
                      <span className={`text-xs px-2 py-1 rounded ${getStatusColor(quote.status)}`}>
                        {quote.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">
                      {quote.team} • {quote.industry}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {new Date(quote.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-sm">No quotes found</p>
            )}
          </div>

          {/* Meetings Card */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              My Meetings ({overview.meetings.length})
            </h2>
            {overview.meetings && overview.meetings.length > 0 ? (
              <div className="space-y-4">
                {overview.meetings.slice(0, 3).map((meeting) => (
                  <div key={meeting.id} className="border-b border-gray-200 pb-3 last:border-0">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-medium text-gray-900">{meeting.title}</h3>
                      <span className={`text-xs px-2 py-1 rounded ${getStatusColor(meeting.status)}`}>
                        {meeting.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">
                      {new Date(meeting.startsAt).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-sm">No meetings found</p>
            )}
          </div>
        </div>

        {/* Data Management Section */}
        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Data Management
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Export Data */}
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">Export My Data</h3>
              <p className="text-sm text-gray-600 mb-4">
                Download all your personal data in JSON format.
              </p>
              {overview.exportRequest ? (
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">Status:</span>
                    <span className={`text-xs px-2 py-1 rounded ${getStatusColor(overview.exportRequest.status)}`}>
                      {overview.exportRequest.status}
                    </span>
                  </div>
                  {overview.exportRequest.status === 'completed' && (
                    <button
                      onClick={() => handleDownloadExport(overview.exportRequest!.id)}
                      disabled={actionLoading === 'download'}
                      className="w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition disabled:opacity-50"
                    >
                      {actionLoading === 'download' ? 'Downloading...' : 'Download Export'}
                    </button>
                  )}
                </div>
              ) : (
                <button
                  onClick={handleExportRequest}
                  disabled={actionLoading === 'export'}
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition disabled:opacity-50"
                >
                  {actionLoading === 'export' ? 'Requesting...' : 'Request Export'}
                </button>
              )}
            </div>

            {/* Delete Account */}
            <div className="border border-red-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">Delete My Data</h3>
              <p className="text-sm text-gray-600 mb-4">
                Request deletion of all your personal data.
              </p>
              {overview.deletionRequest ? (
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">Status:</span>
                    <span className={`text-xs px-2 py-1 rounded ${getStatusColor(overview.deletionRequest.status)}`}>
                      {overview.deletionRequest.status}
                    </span>
                  </div>
                </div>
              ) : (
                <button
                  onClick={handleDeletionRequest}
                  disabled={actionLoading === 'delete'}
                  className="w-full px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition disabled:opacity-50"
                >
                  {actionLoading === 'delete' ? 'Requesting...' : 'Request Deletion'}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}

