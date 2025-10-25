/**
 * Dummy Data Service
 * Centralizes access to all dummy data with simulated API delays
 */

import { User, getUserById, getUserByEmail, DUMMY_USERS } from '../data/users';
import { Quote, getQuotesByUserId, getAllQuotes } from '../data/quotes';
import { Meeting, getMeetingsByUserId, getAllMeetings } from '../data/meetings';
import { Team, getTeamBySlug, getAllTeams, getFeaturedTeams } from '../data/teams';
import { DomainPage, getDomainBySlug, getAllDomains } from '../data/domains';
import { ExportRequest, getExportByUserId, getAllExports } from '../data/exports';
import { DeletionRequest, getDeletionByUserId, getAllDeletions } from '../data/deletions';

// Simulate API delay
const delay = (ms: number = 300) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Get user overview data
 */
export const getUserOverview = async (userId: string) => {
  await delay();
  
  const user = getUserById(userId);
  if (!user) throw new Error('User not found');

  return {
    profile: user,
    quotes: getQuotesByUserId(userId),
    meetings: getMeetingsByUserId(userId),
    exportRequest: getExportByUserId(userId),
    deletionRequest: getDeletionByUserId(userId),
  };
};

/**
 * Admin: Get all quotes
 */
export const getAdminQuotes = async () => {
  await delay();
  return getAllQuotes();
};

/**
 * Admin: Get all meetings
 */
export const getAdminMeetings = async () => {
  await delay();
  return getAllMeetings();
};

/**
 * Get teams catalog
 */
export const getTeamsCatalog = async () => {
  await delay();
  return getAllTeams();
};

/**
 * Get single team by slug
 */
export const getTeam = async (slug: string) => {
  await delay();
  const team = getTeamBySlug(slug);
  if (!team) throw new Error('Team not found');
  return team;
};

/**
 * Get domain page by slug
 */
export const getDomain = async (slug: string) => {
  await delay();
  const domain = getDomainBySlug(slug);
  if (!domain) throw new Error('Domain not found');
  return domain;
};

/**
 * Get all domains
 */
export const getDomains = async () => {
  await delay();
  return getAllDomains();
};

/**
 * Submit quote request
 */
export const submitQuote = async (data: any) => {
  await delay(500);
  console.log('Quote submitted:', data);
  return { success: true, message: 'Quote request submitted successfully' };
};

/**
 * Submit meeting booking
 */
export const submitMeeting = async (data: any) => {
  await delay(500);
  console.log('Meeting booked:', data);
  return { success: true, message: 'Meeting booked successfully' };
};

/**
 * Request data export
 */
export const requestExport = async (userId: string) => {
  await delay(800);
  console.log('Export requested for user:', userId);
  return { success: true, message: 'Export request submitted. You will be notified when ready.' };
};

/**
 * Download export
 */
export const downloadExport = async (exportId: string) => {
  await delay(500);
  // Generate dummy JSON export
  const exportData = {
    user: getUserById('user-client-1'),
    quotes: getQuotesByUserId('user-client-1'),
    meetings: getMeetingsByUserId('user-client-1'),
    exportedAt: new Date().toISOString(),
  };
  
  const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
  return blob;
};

/**
 * Request account deletion
 */
export const requestDeletion = async (userId: string, reason?: string) => {
  await delay(500);
  console.log('Deletion requested for user:', userId, 'Reason:', reason);
  return { success: true, message: 'Deletion request submitted. Our team will review it within 48 hours.' };
};

