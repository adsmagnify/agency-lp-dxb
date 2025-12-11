import React from 'react';
import { CheckCircle, ChevronLeft } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Footer } from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const ThankYouPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
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
          <div className="text-xs font-semibold text-green-600 uppercase tracking-wider hidden sm:block">
            Step 3 of 3: Confirmed
          </div>
        </div>
      </div>

       {/* Progress Bar */}
       <div className="w-full bg-slate-200 h-1.5">
        <div className="bg-green-500 h-1.5 w-full transition-all duration-500"></div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100 max-w-2xl w-full text-center relative overflow-hidden">
            
            <div className="mx-auto w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-8 animate-bounce-slow">
                <CheckCircle className="w-12 h-12 text-green-500" />
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                You're Booked!
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We have sent a calendar invitation to your email. <span className="font-semibold text-slate-900">Important Next Step:</span> Please tap below to message us on WhatsApp so we can prepare your clinic audit before the call.
            </p>

            <div className="bg-brand-50 p-8 rounded-2xl border border-brand-100 mb-8">
                <Button 
                    variant="whatsapp" 
                    size="xl" 
                    fullWidth 
                    className="shadow-lg shadow-green-500/20 hover:shadow-xl hover:shadow-green-500/30 transform hover:-translate-y-1 transition-all flex items-center justify-center"
                    onClick={() => window.open('https://wa.me/', '_blank')}
                >
                    <WhatsAppIcon className="w-6 h-6 mr-3 fill-current" />
                    Message on WhatsApp
                </Button>
                <p className="mt-4 text-xs font-medium text-slate-500 uppercase tracking-wide">
                    Final Step to secure your spot
                </p>
            </div>

             <div className="text-sm text-slate-400">
                <p>Looking forward to speaking with you.</p>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ThankYouPage;