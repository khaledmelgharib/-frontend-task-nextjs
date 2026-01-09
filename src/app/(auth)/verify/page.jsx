"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import apiClient from '@/lib/api';

export default function VerifyPage() {
  const [code, setCode] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const data = new FormData();
    data.append('code', code);

    try {
      await apiClient.post('/auth/verify-email', data);
      localStorage.removeItem('authToken');
      alert('Account verified successfully! Please log in.');
      router.push('/login');
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'An error occurred during verification.';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <div className="max-w-lg w-full bg-white p-8 md:p-10 rounded-2xl shadow-2xl">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">Verify Your Account</h1>
          <p className="text-gray-500 mt-2">A verification code was sent to your email. For testing, use: <strong>123456</strong></p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          
          <div>
            <label htmlFor="code" className="block text-sm font-semibold text-gray-600 mb-2">Verification Code</label>
            <input 
              id="code"
              type="text" 
              value={code} 
              onChange={(e) => setCode(e.target.value)} 
              placeholder="Enter 6-digit code" 
              required 
              className="w-full px-4 py-3 text-center text-2xl tracking-[1em] text-gray-900 font-medium border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition" 
            />
          </div>
          
          {error && <p className="text-red-600 text-sm font-medium text-center bg-red-100 p-2 rounded-lg">{error}</p>}
          
          <button 
            type="submit" 
            disabled={loading} 
            className="w-full py-3 mt-4 px-4 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 disabled:bg-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300"
          >
            {loading ? 'Verifying...' : 'Verify Account'}
          </button>
        </form>
      </div>
    </div>
  );
}
