import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, ArrowRight, Play, ChevronLeft } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Footer } from '../components/Footer';

const SessionPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col">
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
            Step 1 of 3: The System
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-200 h-1.5">
        <div className="bg-brand-600 h-1.5 w-1/3 transition-all duration-500"></div>
      </div>

      <div className="flex-1 container mx-auto px-4 py-12 max-w-4xl text-center">
        <div className="mb-8">
            <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-600 text-xs font-bold uppercase tracking-wide mb-4">
                Important
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                Before We Hop On A Call...<br/>
                <span className="text-brand-600">Watch How This System Works</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                We value your time. This 5-minute video explains exactly how we generate 30-90 new patient appointments every month.
            </p>
        </div>

        {/* Video Placeholder */}
        <div className="relative aspect-video bg-slate-900 rounded-2xl shadow-2xl overflow-hidden mb-12 max-w-3xl mx-auto group cursor-pointer border-4 border-slate-100">
            {/* Overlay for thumbnail effect */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-all">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white transition-transform group-hover:scale-110">
                    <Play className="w-8 h-8 text-white fill-white ml-1" />
                </div>
            </div>
            <img 
                src="https://picsum.photos/1200/675?grayscale" 
                alt="Video Thumbnail" 
                className="w-full h-full object-cover opacity-60"
            />
        </div>

        <div className="bg-brand-50 rounded-2xl p-8 border border-brand-100 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Ready to implement this in your clinic?</h3>
            <p className="text-slate-600 mb-6">
                If you qualify and are serious about growth, click the button below to select your time slot.
            </p>
            <Button 
                variant="primary" 
                size="xl" 
                onClick={() => navigate('/book-call')}
                className="group shadow-brand-500/50 shadow-lg animate-pulse hover:animate-none"
            >
                <Calendar className="mr-2 w-5 h-5" />
                Schedule Your Strategy Session
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SessionPage;