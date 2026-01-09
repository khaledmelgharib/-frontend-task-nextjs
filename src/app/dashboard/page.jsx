"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import apiClient from '@/lib/api';

export default function DashboardPage() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      router.push('/login');
      return;
    }

    apiClient.get('/auth/user-data')
      .then(response => {
        setUser(response.data.data);
      })
      .catch(error => {
        console.error("Failed to fetch user data:", error);
        localStorage.removeItem('authToken');
        router.push('/login');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [router]);

  const handleLogout = async () => {
    try {
      await apiClient.post('/auth/logout');
    } catch (error) {
      console.error("Logout failed, but clearing client-side token anyway.", error);
    } finally {
      localStorage.removeItem('authToken');
      router.push('/login');
    }
  };

  
  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center">
        <p className="text-lg text-gray-600">Loading Dashboard...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white p-8 md:p-10 rounded-2xl shadow-2xl text-center">
        
        {user ? (
          <>
            <div className="mb-6">
              <img 
                src={user.image || `https://api.dicebear.com/8.x/initials/svg?seed=${user.name}`} 
                alt="User Avatar" 
                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white shadow-lg"
              />
              <h1 className="text-4xl font-bold text-gray-800">Welcome, {user.name}!</h1>
              <p className="text-gray-500 mt-2">It's great to see you again.</p>
            </div>

            <div className="bg-slate-50 rounded-lg p-6 text-left space-y-4">
              <h3 className="text-xl font-semibold text-gray-700 border-b pb-2 mb-4">Your Profile Details</h3>
              <div className="flex justify-between">
                <span className="font-semibold text-gray-600">Email:</span>
                <span className="text-gray-800 font-medium">{user.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-gray-600">Phone:</span>
                <span className="text-gray-800 font-medium">+{user.mobile_country_code} {user.mobile}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-gray-600">Account Type:</span>
                <span className="text-gray-800 font-medium capitalize">{user.type}</span>
              </div>
            </div>

            <button 
              onClick={handleLogout} 
              className="w-full md:w-auto mt-8 py-3 px-8 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-300"
            >
              Logout
            </button>
          </>
         ) : (
          <p className="text-lg text-red-500">Could not load user data. Please try logging in again.</p>
        )}
      </div>
    </div>
  );
}
