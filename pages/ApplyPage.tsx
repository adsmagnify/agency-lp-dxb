import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Footer } from '../components/Footer';

const ApplyPage: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    clinicName: '',
    website: '',
    revenue: '',
    obstacles: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission logic
    navigate('/session?from=apply');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <button 
            onClick={() => navigate('/')} 
            className="text-slate-500 hover:text-slate-900 flex items-center text-sm font-medium transition-colors"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Home
          </button>
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider hidden sm:block">
            Step 1 of 4: Application
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-200 h-1.5">
        <div className="bg-brand-600 h-1.5 w-1/4 transition-all duration-500"></div>
      </div>

      <div className="flex-1 container mx-auto px-4 py-12 max-w-2xl">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="bg-brand-600 p-8 text-center">
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">Apply for a Strategy Session</h1>
            <p className="text-brand-100">Please answer the questions below to see if your clinic qualifies for our growth partner program.</p>
          </div>
          
          <form onSubmit={handleSubmit} className="p-8 md:p-10 space-y-6">
            <div className="space-y-4">
              <label className="block">
                <span className="text-slate-700 font-semibold text-sm">Full Name</span>
                <input 
                  required
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-slate-300 bg-slate-50 border p-3 focus:border-brand-500 focus:ring focus:ring-brand-200 focus:ring-opacity-50 transition-colors"
                  placeholder="Dr. John Doe"
                />
              </label>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-slate-700 font-semibold text-sm">Email Address</span>
                  <input 
                    required
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-slate-300 bg-slate-50 border p-3 focus:border-brand-500 focus:ring focus:ring-brand-200 focus:ring-opacity-50 transition-colors"
                    placeholder="john@example.com"
                  />
                </label>
                <label className="block">
                  <span className="text-slate-700 font-semibold text-sm">Phone Number</span>
                  <input 
                    required
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-slate-300 bg-slate-50 border p-3 focus:border-brand-500 focus:ring focus:ring-brand-200 focus:ring-opacity-50 transition-colors"
                    placeholder="+91 98765 43210"
                  />
                </label>
              </div>

              <label className="block">
                <span className="text-slate-700 font-semibold text-sm">Clinic Name</span>
                <input 
                  required
                  type="text" 
                  name="clinicName"
                  value={formData.clinicName}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-slate-300 bg-slate-50 border p-3 focus:border-brand-500 focus:ring focus:ring-brand-200 focus:ring-opacity-50 transition-colors"
                  placeholder="Ex: Radiance Skin Clinic"
                />
              </label>

              <label className="block">
                <span className="text-slate-700 font-semibold text-sm">Clinic Website / Instagram</span>
                <input 
                  type="text" 
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-slate-300 bg-slate-50 border p-3 focus:border-brand-500 focus:ring focus:ring-brand-200 focus:ring-opacity-50 transition-colors"
                  placeholder="www.yourclinic.com"
                />
              </label>

              <label className="block">
                <span className="text-slate-700 font-semibold text-sm">Average Monthly Revenue</span>
                <select 
                  name="revenue"
                  value={formData.revenue}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-slate-300 bg-slate-50 border p-3 focus:border-brand-500 focus:ring focus:ring-brand-200 focus:ring-opacity-50 transition-colors"
                >
                  <option value="">Select an option...</option>
                  <option value="<1L">Less than ₹1 Lakh</option>
                  <option value="1L-5L">₹1 Lakh – ₹5 Lakhs</option>
                  <option value="5L-15L">₹5 Lakhs – ₹15 Lakhs</option>
                  <option value="15L+">₹15 Lakhs+</option>
                </select>
              </label>

              <label className="block">
                <span className="text-slate-700 font-semibold text-sm">What is the biggest challenge stopping you from growing?</span>
                <textarea 
                  name="obstacles"
                  value={formData.obstacles}
                  onChange={handleChange}
                  rows={3}
                  className="mt-1 block w-full rounded-md border-slate-300 bg-slate-50 border p-3 focus:border-brand-500 focus:ring focus:ring-brand-200 focus:ring-opacity-50 transition-colors"
                  placeholder="Briefly describe your current marketing challenges..."
                ></textarea>
              </label>
            </div>

            <div className="pt-4">
              <Button type="submit" size="xl" fullWidth className="group">
                Submit Application
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <p className="mt-4 text-center text-xs text-slate-400">
                Your information is 100% secure and will never be shared.
              </p>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ApplyPage;