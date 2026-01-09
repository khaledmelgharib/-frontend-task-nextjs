"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link'; 
import apiClient from '@/lib/api';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
    password_confirmation: '',
    mobile_country_code: '971',
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

    if (formData.password !== formData.password_confirmation) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    try {
      const response = await apiClient.post('/auth/register', data);
      const token = response.data.data.token;
      localStorage.setItem('authToken', token);
      router.push('/verify');
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'An error occurred during registration.';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <div className="max-w-lg w-full bg-white p-8 md:p-10 rounded-2xl shadow-2xl">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">Get Started</h1>
          <p className="text-gray-500 mt-2">Create your account</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-600 mb-2">Full Name</label>
            <input 
              id="name"
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              placeholder="Full Name" 
              required 
              className="w-full px-4 py-3 text-gray-900 font-medium border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition" 
            />
          </div>

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

          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-1">
              <label htmlFor="mobile_country_code" className="block text-sm font-semibold text-gray-600 mb-2">Code</label>
              <input 
                id="mobile_country_code"
                type="text" 
                name="mobile_country_code" 
                value={formData.mobile_country_code} 
                onChange={handleChange} 
                required 
                className="w-full px-4 py-3 text-gray-900 font-medium border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition" 
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="mobile" className="block text-sm font-semibold text-gray-600 mb-2">Phone Number</label>
              <input 
                id="mobile"
                type="tel" 
                name="mobile" 
                value={formData.mobile} 
                onChange={handleChange} 
                placeholder="501234567" 
                required 
                className="w-full px-4 py-3 text-gray-900 font-medium border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition" 
              />
            </div>
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

          <div>
            <label htmlFor="password_confirmation" className="block text-sm font-semibold text-gray-600 mb-2">Confirm Password</label>
            <input 
              id="password_confirmation"
              type="password" 
              name="password_confirmation" 
              value={formData.password_confirmation} 
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
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <Link href="/login" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Log in
            </Link>
          </p>
        </div>
        
      </div>
    </div>
  );
}
