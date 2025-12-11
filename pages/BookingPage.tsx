import React from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, Calendar, Clock, ShieldCheck } from "lucide-react";
import { Footer } from "../components/Footer";
import { InlineWidget, useCalendlyEventListener } from "react-calendly";

const BookingPage: React.FC = () => {
  const navigate = useNavigate();

  // Listen for the event scheduled message from Calendly to redirect
  useCalendlyEventListener({
    onEventScheduled: (e) => {
      navigate("/thank-you");
    },
  });

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <div className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className="text-slate-500 hover:text-slate-900 flex items-center text-sm font-medium transition-colors"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Home
          </button>
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider hidden sm:block">
            Step 2 of 3: Select Time
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-200 h-1.5">
        <div className="bg-brand-600 h-1.5 w-2/3 transition-all duration-500"></div>
      </div>

      <div className="flex-1 flex flex-col w-full">
        <div className="w-full max-w-6xl mx-auto bg-white rounded-none md:rounded-2xl shadow-xl border-0 md:border border-slate-200 flex flex-col md:flex-row md:my-8">
          {/* Sidebar info */}
          <div className="md:w-1/3 bg-slate-900 p-8 lg:p-10 text-white flex flex-col">
            <div className="mb-8">
              <img
                src="https://picsum.photos/100/100?random=50"
                className="w-16 h-16 rounded-full border-2 border-slate-700 mb-4"
                alt="Expert"
              />
              <p className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-1">
                Adsmagnify Strategy
              </p>
              <h2 className="text-2xl lg:text-3xl font-bold">
                Clinic Growth Session
              </h2>
            </div>

            <div className="space-y-6 mb-10 flex-1">
              <div className="flex items-start">
                <Clock className="w-6 h-6 mr-4 text-brand-500 flex-shrink-0" />
                <div>
                  <span className="font-semibold block">30 Minutes</span>
                  <span className="text-slate-400 text-sm">
                    Dedicated strategy time
                  </span>
                </div>
              </div>
              <div className="flex items-start">
                <Calendar className="w-6 h-6 mr-4 text-brand-500 flex-shrink-0" />
                <div>
                  <span className="font-semibold block">Video Call</span>
                  <span className="text-slate-400 text-sm">
                    Google Meet / Zoom
                  </span>
                </div>
              </div>
              <div className="flex items-start">
                <ShieldCheck className="w-6 h-6 mr-4 text-brand-500 flex-shrink-0" />
                <div>
                  <span className="font-semibold block">Verified Experts</span>
                  <span className="text-slate-400 text-sm">
                    Speak with senior strategists only
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-auto pt-8 border-t border-slate-800">
              <p className="text-sm text-slate-400 leading-relaxed italic">
                "This session will help you map out exactly how to add ₹10L+ in
                new revenue using our patient acquisition system."
              </p>
            </div>
          </div>

          {/* Calendly Widget */}
          <div className="md:w-2/3 bg-white relative w-full overflow-visible">
            {/* 
                   IMPORTANT: Replace 'https://calendly.com/adsmagnify-demo/30min' 
                   with your actual Calendly event link.
                */}
            <div
              className="w-full overflow-visible"
              style={{ width: "100%", overflow: "visible" }}
            >
              <InlineWidget
                url="https://calendly.com/adsmagnify_com/discovery_call"
                styles={{
                  height: "3000px",
                  minHeight: "3000px",
                  width: "100%",
                }}
                pageSettings={{
                  backgroundColor: "ffffff",
                  hideEventTypeDetails: true,
                  hideLandingPageDetails: true,
                  primaryColor: "2563eb", // Matches brand-600
                  textColor: "0f172a",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BookingPage;
