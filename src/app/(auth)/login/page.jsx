"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import apiClient from '@/lib/api';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const data = new FormData();
    data.append('email', formData.email);
    data.append('password', formData.password);

    try {
      const response = await apiClient.post('/auth/login', data);
      const token = response.data.data.token;
      localStorage.setItem('authToken', token);
      router.push('/dashboard');
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'An error occurred during login.';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <div className="max-w-lg w-full bg-white p-8 md:p-10 rounded-2xl shadow-2xl">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">Welcome Back!</h1>
          <p className="text-gray-500 mt-2">Log in to your account</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-600 mb-2">Email Address</label>
            <input 
              id="email"
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              placeholder="you@example.com" 
              required 
              className="w-full px-4 py-3 text-gray-900 font-medium border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition" 
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-gray-600 mb-2">Password</label>
            <input 
              id="password"
              type="password" 
              name="password" 
              value={formData.password} 
              onChange={handleChange} 
              placeholder="••••••••" 
              required 
              className="w-full px-4 py-3 text-gray-900 font-medium border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition" 
            />
          </div>
          
          {error && <p className="text-red-600 text-sm font-medium text-center bg-red-100 p-2 rounded-lg">{error}</p>}
          
          <button 
            type="submit" 
            disabled={loading} 
            className="w-full py-3 mt-4 px-4 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 disabled:bg-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300"
          >
            {loading ? 'Logging in...' : 'Log In'}
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <Link href="/register" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
