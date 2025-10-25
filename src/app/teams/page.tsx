/**
 * Teams Catalog Page
 */

'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getTeamsCatalog } from '@/utils/dummyData';
import { Team } from '@/data/teams';

export default function TeamsPage() {
  const [teams, setTeams] = useState<Team[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchTeams();
  }, []);

  const fetchTeams = async () => {
    try {
      setLoading(true);
      const data = await getTeamsCatalog();
      setTeams(data);
    } catch (err) {
      console.error('Error fetching teams:', err);
    } finally {
      setLoading(false);
    }
  };

  const filteredTeams = filter === 'all' 
    ? teams 
    : teams.filter(t => t.availability === filter);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">Browse Teams</h1>
            <Link href="/" className="text-blue-600 hover:text-blue-800">
              ← Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Filters */}
        <div className="mb-8 flex gap-4">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg ${
              filter === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 border border-gray-300'
            }`}
          >
            All Teams
          </button>
          <button
            onClick={() => setFilter('available')}
            className={`px-4 py-2 rounded-lg ${
              filter === 'available'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 border border-gray-300'
            }`}
          >
            Available
          </button>
          <button
            onClick={() => setFilter('limited')}
            className={`px-4 py-2 rounded-lg ${
              filter === 'limited'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 border border-gray-300'
            }`}
          >
            Limited Availability
          </button>
        </div>

        {/* Teams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTeams.map((team) => (
            <div key={team.id} className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-gray-900">{team.name}</h3>
                <span
                  className={`text-xs px-2 py-1 rounded ${
                    team.availability === 'available'
                      ? 'bg-green-100 text-green-800'
                      : team.availability === 'limited'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {team.availability}
                </span>
              </div>

              <p className="text-gray-600 text-sm mb-4">{team.shortDescription}</p>

              <div className="mb-4">
                <div className="text-xs text-gray-500 mb-1">Technologies</div>
                <div className="flex flex-wrap gap-1">
                  {team.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="text-xs bg-gray-100 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                  {team.technologies.length > 4 && (
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                      +{team.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <div className="text-xs text-gray-500">Pricing</div>
                <div className="text-sm font-semibold text-gray-900">{team.pricing.hourly}/hr</div>
                <div className="text-xs text-gray-600">{team.pricing.monthly}/month</div>
              </div>

              <div className="flex gap-2">
                <Link
                  href="/quote"
                  className="flex-1 px-4 py-2 bg-blue-600 text-white text-center text-sm rounded hover:bg-blue-700 transition"
                >
                  Get Quote
                </Link>
                <Link
                  href="/book"
                  className="flex-1 px-4 py-2 bg-white border border-gray-300 text-gray-700 text-center text-sm rounded hover:bg-gray-50 transition"
                >
                  Book Call
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredTeams.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No teams found matching your filters.</p>
          </div>
        )}
      </main>
    </div>
  );
}

