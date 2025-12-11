import React from "react";
import {
  Check,
  X,
  Calendar,
  TrendingUp,
  Users,
  Award,
  ArrowRight,
  ShieldCheck,
  BarChart3,
  Clock,
  Globe,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/Button";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.47.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.6 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

// Helper for images
const handleImageError = (
  e: React.SyntheticEvent<HTMLImageElement, Event>,
  type: "logo" | "proof"
) => {
  e.currentTarget.onerror = null;
  if (type === "logo") {
    e.currentTarget.src =
      "https://placehold.co/150x80/f1f5f9/94a3b8?text=Logo+Missing";
  } else {
    e.currentTarget.src =
      "https://placehold.co/600x400/f1f5f9/94a3b8?text=Upload+Image+in+public/images";
  }
  e.currentTarget.classList.add("opacity-50");
};

// --- Hero Section ---
export const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 to-white pt-24 pb-16 lg:pt-32 lg:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-sm font-medium mb-6">
              <span className="flex h-2 w-2 rounded-full bg-brand-600 mr-2"></span>
              For Aesthetic Clinics Only
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              Get <span className="text-brand-600">30–90 New Patient</span>{" "}
              Appointments Every Month for Acne, Pigmentation & Laser Treatments
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              A fully done-for-you appointment system for aesthetic clinics.
              Google Ads + Meta Ads + Landing Pages + WhatsApp Automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                size="xl"
                onClick={() => navigate("/session")}
                className="group"
              >
                Book a Free Strategy Session
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="whatsapp"
                size="xl"
                className="flex items-center"
                onClick={() => window.open("https://wa.me/", "_blank")}
              >
                <WhatsAppIcon className="mr-2 h-5 w-5" />
                Message on WhatsApp
              </Button>
            </div>
            <p className="mt-4 text-sm text-slate-500 flex items-center">
              <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
              Spots for this month are filling fast.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-brand-600 rounded-3xl rotate-3 opacity-10 blur-xl"></div>
            <img
              src="https://picsum.photos/800/800?random=1"
              alt="Doctor consulting patient"
              className="relative rounded-3xl shadow-2xl w-full object-cover h-[500px] border-4 border-white"
            />
            {/* Float Element */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-slate-100 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Monthly Growth</p>
                  <p className="text-xl font-bold text-slate-900">
                    +45 New Patients
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Trust Bar ---
export const TrustBar: React.FC = () => {
  return (
    <div className="bg-white border-y border-slate-100 py-8">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-wider mb-8">
          Trusted by Clinics Across India
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          <img
            src="/sunact.webp"
            alt="SunAct"
            onError={(e) => handleImageError(e, "logo")}
            className="h-10 w-auto object-contain opacity-100 hover:opacity-95 transition-all duration-300 "
          />
          <img
            src="/angel.png"
            alt="Angel"
            onError={(e) => handleImageError(e, "logo")}
            className="h-16 w-auto object-contain opacity-100 hover:opacity-95 transition-all duration-300 "
          />
          <img
            src="/mirage.png"
            alt="Mirage Education"
            onError={(e) => handleImageError(e, "logo")}
            className="h-12 w-auto object-contain opacity-100 hover:opacity-95 transition-all duration-300 "
          />
          <img
            src="/dr-devki.png"
            alt="Dr. Devki"
            onError={(e) => handleImageError(e, "logo")}
            className="h-14 w-auto object-contain opacity-100 hover:opacity-95 transition-all duration-300 "
          />
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-6 md:gap-12 text-center">
          <div className="bg-slate-50 px-6 py-3 rounded-lg border border-slate-100">
            <p className="text-2xl font-bold text-brand-600">1,000+</p>
            <p className="text-sm text-slate-600">Inquiries Generated</p>
          </div>
          <div className="bg-slate-50 px-6 py-3 rounded-lg border border-slate-100">
            <p className="text-2xl font-bold text-brand-600">30-90</p>
            <p className="text-sm text-slate-600">Appointments/Mo</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Problem Section ---
export const ProblemSection: React.FC = () => {
  const problems = [
    {
      title: "Junk Leads",
      desc: "Wrong targeting and poor keywords lead to low quality inquiries that never convert.",
      items: [
        "Ads not optimized for intent",
        "Time wasted calling unqualified leads",
      ],
    },
    {
      title: "No Landing Page",
      desc: "Sending traffic directly to a generic homepage confuses patients and kills conversion rates.",
      items: ["No treatment-specific flow", "High bounce rates"],
    },
    {
      title: "Weak Follow-Up",
      desc: "Staff replies too slowly or manual follow-ups get missed in the busy clinic schedule.",
      items: ["No automation", "Lost leads due to delay"],
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Why Most Clinics Struggle to Get Appointments
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            The traditional agency model is broken. Here is why you are burning
            money on ads without seeing patients in the clinic.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((prob, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-sm border border-red-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6 text-red-600">
                <X size={28} strokeWidth={3} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {prob.title}
              </h3>
              <p className="text-slate-600 text-sm mb-4">{prob.desc}</p>
              <ul className="space-y-2">
                {prob.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start text-sm text-slate-500"
                  >
                    <span className="mr-2 mt-1 w-1.5 h-1.5 bg-red-400 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Solution Section ---
export const SolutionSection: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-brand-600 font-semibold tracking-wide uppercase text-sm">
            The Solution
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
            The Adsmagnify Appointment Engine™
          </h2>
          <p className="text-slate-600">
            A predictable system built specifically for aesthetic clinics.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {/* Card 1 */}
          <div className="bg-brand-50 p-8 rounded-3xl border border-brand-100 flex flex-col">
            <div className="mb-6 bg-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm text-brand-600">
              <Globe size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              1. Ads Engine
            </h3>
            <ul className="space-y-3 mb-6 flex-1">
              {[
                "High-intent Google Ads",
                "Targeted Meta Ads",
                "Treatment-specific targeting",
              ].map((item, i) => (
                <li key={i} className="flex items-center text-slate-700">
                  <Check className="w-5 h-5 text-brand-600 mr-3 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 text-white flex flex-col transform lg:-translate-y-4 shadow-xl">
            <div className="mb-6 bg-white/10 w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm text-brand-400">
              <BarChart3 size={28} />
            </div>
            <h3 className="text-xl font-bold mb-4">2. Conversion Machine</h3>
            <ul className="space-y-3 mb-6 flex-1">
              {[
                "3 Landing Pages (Acne, Pigmentation, Laser)",
                "WhatsApp Auto-Follow-Up",
                "Lead Qualification",
              ].map((item, i) => (
                <li key={i} className="flex items-center text-slate-300">
                  <Check className="w-5 h-5 text-brand-400 mr-3 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-brand-50 p-8 rounded-3xl border border-brand-100 flex flex-col">
            <div className="mb-6 bg-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm text-brand-600">
              <Calendar size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              3. Appointment Engine
            </h3>
            <ul className="space-y-3 mb-6 flex-1">
              {[
                "Calendar booking setup",
                "Automated reminders",
                "Lead → Appointment flow",
              ].map((item, i) => (
                <li key={i} className="flex items-center text-slate-700">
                  <Check className="w-5 h-5 text-brand-600 mr-3 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Value Stack ---
export const ValueStack: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
          What You Get (Done For You)
        </h2>
        <div className="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden">
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {/* Col 1 */}
            <div className="p-8">
              <h4 className="font-bold text-slate-900 mb-6 flex items-center">
                <Users className="w-5 h-5 mr-2 text-brand-600" />
                Ads Management
              </h4>
              <ul className="space-y-4">
                {[
                  "Google Ads",
                  "Meta Ads",
                  "Keyword Strategy",
                  "Daily Optimization",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center text-sm text-slate-600"
                  >
                    <Check className="w-4 h-4 text-green-500 mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Col 2 */}
            <div className="p-8 bg-brand-50/30">
              <h4 className="font-bold text-slate-900 mb-6 flex items-center">
                <Clock className="w-5 h-5 mr-2 text-brand-600" />
                Conversion System
              </h4>
              <ul className="space-y-4">
                {[
                  "Treatment Landing Pages",
                  "WhatsApp Automation",
                  "Appointment Funnel",
                  "Tracking & Analytics",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center text-sm text-slate-600"
                  >
                    <Check className="w-4 h-4 text-green-500 mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Col 3 */}
            <div className="p-8">
              <h4 className="font-bold text-slate-900 mb-6 flex items-center">
                <ShieldCheck className="w-5 h-5 mr-2 text-brand-600" />
                Reporting & Support
              </h4>
              <ul className="space-y-4">
                {[
                  "Weekly Reports",
                  "Monthly Strategy Calls",
                  "Lead Quality Check",
                  "Dedicated Manager",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center text-sm text-slate-600"
                  >
                    <Check className="w-4 h-4 text-green-500 mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Proof Section ---
export const ProofSection: React.FC = () => {
  const proofs = [
    {
      title: 'How We Turned "Cold Leads" into 6,000+ Confirmed Appointments',
      problem:
        'Most agencies deliver "leads"—names and numbers of people who never pick up the phone. The clinic’s front desk was burning out chasing ghosts, and the "Show Rate" was dismal.',
      mechanism:
        "We stopped sending traffic to a slow website. Instead, we implemented an In-App Native Booking System. By reducing friction and allowing users to lock in their slot directly on Instagram/Facebook, we captured intent at its peak.",
      numbers:
        "Total Appointments: 6,800+ (Verified Bookings) | Conversion Rate: ~6% - 18% (Click to Appointment)",
      result:
        "We effectively automated the front desk. Instead of calling leads to ask for an appointment, the staff only called to confirm the arrival.",
      image: "/case-study-1.jpeg",
    },
    {
      title:
        "The ₹81 Patient Acquisition Model: High-Ticket Customers for the Price of a Coffee",
      problem:
        "The client was in a saturated metro city. CPCs (Cost Per Click) were rising, and competitors were bleeding money. They needed a way to acquire patients cheaper without sacrificing quality.",
      mechanism:
        'We deployed our proprietary "Yin-Yang" Campaign Structure. Yang (Prospecting) for broad targeting to fill the funnel, and Yin (Remarketing) for aggressive retargeting of "warm" users with social proof and "before/after" results.',
      numbers: "Cost Per Lead: ₹81.97 | Total Leads: 401 | ROI: >47X ROAS",
      result:
        "Lowest acquisition cost in the clinic's history, allowing them to reinvest profit into new machines.",
      image: "/case-study-2.jpeg",
    },
    {
      title: '844 Conversions at Scale: Dominating the "Bottom of the Funnel."',
      problem:
        'Social media creates demand, but Search captures it. The client was losing market share to competitors who appeared first when users searched for specific treatments (e.g., "Best Laser Hair Removal," "Botox Cost").',
      mechanism:
        'We utilized Single Keyword Ad Groups (SKAGs) to ensure hyper-relevance. When a user searched for a specific problem, they saw an ad only for that solution—not a generic homepage. We optimized for "Conversions" (Booked Consultations), not just Clicks.',
      numbers:
        "Total Conversions: 844 (High Intent) | Spend: $18.8K | CPA: ~$22",
      result:
        'A predictable stream of "Ready-to-Buy" patients who required very little convincing from the sales team.',
      image: "/case-study-3.jpeg",
    },
    {
      title:
        "Spending ₹1.6 Lakhs profitably to Generate a ₹10 Lakh+ Pipeline in 30 Days.",
      problem:
        "The clinic needed volume fast. They had just expanded their team and empty rooms meant lost revenue. They needed to scale spend without the Cost Per Result skyrocketing.",
      mechanism:
        "We used Dynamic Creative Testing (AB Testing) to identify the winning creative within 48 hours. Once identified, we uncapped the budget using CBO (Campaign Budget Optimization), allowing Facebook's AI to find the buyers.",
      numbers:
        "Leads Generated: 504 | Cost Per Lead: ~₹218 | CTR: 0.98% - 1.86%",
      result:
        "The clinic filled their new branch's capacity within the first month of operations.",
      image: "/case-study-4.jpeg",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Here’s What Our System Generates
          </h2>
          <p className="text-lg text-slate-600">
            Doctors believe visuals, not claims. Take a look at the results.
          </p>
        </div>

        <div className="space-y-20">
          {proofs.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center gap-10 md:gap-16 border-b border-slate-100 pb-12 last:border-0 last:pb-0"
            >
              <div className="w-full md:w-1/2 flex items-center">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100 group bg-slate-50 aspect-[16/9] w-full">
                  <div className="absolute inset-0 bg-brand-600/0 group-hover:bg-brand-600/5 transition-colors duration-500 pointer-events-none z-10"></div>
                  <img
                    src={item.image}
                    alt={item.title}
                    onError={(e) => handleImageError(e, "proof")}
                    className="w-full h-full object-contain opacity-100 transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 text-left flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-600 text-white font-bold text-lg shadow-md shrink-0">
                    {index + 1}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-tight">
                    {item.title}
                  </h3>
                </div>

                <div className="space-y-4 pl-0 md:pl-14">
                  <div>
                    <span className="font-bold text-slate-800 text-sm uppercase tracking-wide">
                      The Problem:
                    </span>
                    <p className="text-slate-600 text-sm md:text-base mt-1">
                      {item.problem}
                    </p>
                  </div>
                  <div>
                    <span className="font-bold text-slate-800 text-sm uppercase tracking-wide">
                      The Mechanism:
                    </span>
                    <p className="text-slate-600 text-sm md:text-base mt-1">
                      {item.mechanism}
                    </p>
                  </div>
                  <div>
                    <span className="font-bold text-slate-800 text-sm uppercase tracking-wide">
                      The Numbers:
                    </span>
                    <p className="text-brand-600 font-bold text-sm md:text-base mt-1 bg-brand-50 inline-block px-2 py-1 rounded">
                      {item.numbers}
                    </p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-brand-500">
                    <span className="font-bold text-slate-800 text-sm uppercase tracking-wide block mb-1">
                      Impact:
                    </span>
                    <p className="text-slate-700 text-sm md:text-base italic">
                      "{item.result}"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- ROI Calculator ---
export const ROICalculator: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">
          Your Clinic’s Return on Investment
        </h2>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200">
                  <th className="p-4 font-bold text-slate-700">Treatment</th>
                  <th className="p-4 font-bold text-slate-700">Avg Ticket</th>
                  <th className="p-4 font-bold text-slate-700 text-right">
                    30 Appointments
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="p-4 text-slate-900 font-medium">Acne</td>
                  <td className="p-4 text-slate-600">₹3k–₹6k</td>
                  <td className="p-4 text-right font-bold text-brand-600">
                    ₹90k–₹1.8L
                  </td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-900 font-medium">
                    Pigmentation
                  </td>
                  <td className="p-4 text-slate-600">₹4k–₹10k</td>
                  <td className="p-4 text-right font-bold text-brand-600">
                    ₹1.2L–₹3L
                  </td>
                </tr>
                <tr className="bg-brand-50/50">
                  <td className="p-4 text-slate-900 font-medium">Laser</td>
                  <td className="p-4 text-slate-600">₹1.5k–₹15k</td>
                  <td className="p-4 text-right font-bold text-brand-600">
                    ₹45k–₹4.5L
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-6 bg-slate-50 text-center border-t border-slate-200">
            <p className="text-slate-700 font-medium">
              "Even with 20–30 appointments/month, clinics see{" "}
              <span className="text-brand-600 font-bold">4–10X ROI</span>."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Pricing & Guarantee ---
export const PricingGuarantee: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        {/* Pricing */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Simple Monthly Pricing
          </h2>
          <div className="inline-block bg-slate-900 text-white p-8 rounded-2xl shadow-xl">
            <p className="text-slate-400 mb-2 uppercase tracking-wide text-xs font-bold">
              Plans Starting At
            </p>
            <p className="text-4xl font-extrabold mb-2">
              AED 3,000
              <span className="text-lg font-medium text-slate-400">/month</span>
            </p>
            <p className="text-sm text-slate-400 mb-6">(Ad budget separate)</p>
            <Button
              variant="primary"
              size="lg"
              fullWidth
              onClick={() => navigate("/session")}
            >
              Book Free Strategy Session
            </Button>
            <p className="mt-4 text-xs text-slate-500">
              Pricing preview creates transparency before the call.
            </p>
          </div>
        </div>

        {/* Guarantee */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-8 lg:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Award className="w-32 h-32 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-green-900 mb-4">
            Our Performance Guarantee
          </h3>
          <p className="text-lg text-green-800 font-medium mb-2">
            "If we don’t deliver{" "}
            <span className="bg-green-200 px-1 rounded">
              12–20 qualified appointments
            </span>{" "}
            in the first 90 days, you don’t pay for the next month."
          </p>
          <p className="text-sm text-green-700">This removes all fear.</p>
        </div>
      </div>
    </section>
  );
};

// --- About & Final CTA ---
export const AboutAndFinal: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">
            Why Clinics Choose Adsmagnify
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Niche-specialized agency",
              "Appointment-focused system",
              "Transparent reporting",
              "Proven results",
              "No staff dependency",
              "Medical-grade funnels",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center p-4 bg-white rounded-lg border border-slate-100 shadow-sm"
              >
                <Check className="w-5 h-5 text-brand-600 mr-3" />
                <span className="font-medium text-slate-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-900 relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://picsum.photos/1200/600?blur=4"
            className="w-full h-full object-cover"
            alt="Clinic background"
          />
          <div className="absolute inset-0 bg-brand-900/90"></div>
        </div>
        <div className="container relative mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-extrabold text-white mb-8">
            Ready to Grow Your Clinic?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="xl"
              onClick={() => navigate("/session")}
            >
              Book Your Strategy Session
            </Button>
            <Button
              variant="whatsapp"
              size="xl"
              className="flex items-center justify-center"
              onClick={() => window.open("https://wa.me/", "_blank")}
            >
              <WhatsAppIcon className="mr-2 h-5 w-5" />
              Message Us on WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
