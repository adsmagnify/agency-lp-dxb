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
            <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              Get 12 to 35 Qualified Property Leads Every Week <br /> With a
              Guaranteed 30-Day Performance Ramp-Up
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We help Dubai real estate firms book verified buyers and investors
              using a tested performance marketing system built for high-ticket
              property sales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                size="xl"
                onClick={() => navigate("/session")}
                className="group"
              >
                Book a Strategy Call
              </Button>
              <Button
                variant="whatsapp"
                size="xl"
                className="flex items-center"
                onClick={() => window.open("https://wa.me/", "_blank")}
              >
                See case studies
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-brand-600 rounded-3xl rotate-3 opacity-10 blur-xl"></div>
            <img
              src="https://picsum.photos/800/800?random=1"
              alt="Doctor consulting patient"
              className="relative rounded-3xl shadow-2xl w-full object-cover h-[500px] border-4 border-white"
            />
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
          Trusted by real estate developers, brokers & property consultancies
          across Dubai & GCC.
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
      title: "Unqualified leads wasting sales times",
      desc: "Most agencies push generic traffic that leads to low-intent prospects who never convert. Your team ends up wasting hours on people who aren’t financially ready or serious.",
      items: [
        "Poor targeting leads to irrelevant enquiries",
        "No pre-qualification filters",
        "Time wasted on non-buyers",
      ],
    },
    {
      title: "Low booking & show-up rates",
      desc: "Sending leads to a basic WhatsApp or “contact us” form kills conversions instantly. Buyers drop off because the journey isn’t personalised or structured.",
      items: [
        "No funnel built for high-ticket real estate",
        "High drop-off before site visits",
        "Low engagement from buyers",
      ],
    },
    {
      title: "Poor tracking, no clear ROI",
      desc: "Most real estate teams don’t actually know which ads bring closable buyers. Without tracking, decisions become guesswork and budgets leak.",
      items: [
        "No automation to follow up instantly",
        "Missed leads due to delayed responses",
        "No insight into which campaigns drive actual sales",
      ],
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            THE DUBAI PROPERTY MARKET HAS CHANGED
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Today’s real estate companies don’t need more leads. They need
            qualified buyers who can close.
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
            The Adsmagnify Buyer Engine
          </h2>
          <p className="text-slate-600">
            A predictable system built specifically for Dubai real estate teams
            to generate serious property buyers, not just leads.
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
                "Hyper-targeted Meta Ads",
                "Project-specific and budget-specific targeting",
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
                "3 high-converting landing pages(Off-plan, Ready Properties, Leads for Agents)",
                "Automated Email Follow-ups",
                "Lead qualification system before reaching your sales team",
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
                "Calendar booking setup for property viewings or discovery calls",
                "Automated reminders via Email",
                "Lead → Appointment → Viewing flow optimization",
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
  const navigate = useNavigate();
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
          Services
        </h2>
        <div className="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden">
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {/* Col 1 */}
            <div className="p-8">
              <h4 className="font-bold text-slate-900 mb-6 flex items-center">
                <Users className="w-5 h-5 mr-2 text-brand-600" />
                Performance Marketing
              </h4>
              <ul className="space-y-4">
                {[
                  "Google Search + Display",
                  "Meta Ads",
                  "YouTube Discovery",
                  "Email lead generation",
                  "Retargeting engine",
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
                Creative Production
              </h4>
              <ul className="space-y-4">
                {[
                  "High-end property creatives",
                  "Video ads",
                  "UGC-style walkthroughs",
                  "A/B testing hooks",
                  "Developer-specific campaigns",
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
                Conversion & Tracking
              </h4>
              <ul className="space-y-4">
                {[
                  "CRM setup (HubSpot / Zoho / Propertybase)",
                  "Automated follow-ups",
                  "Appointment reminders",
                  "Call-tracking",
                  "Sales pipeline setup",
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
        <div className="mt-12 text-center">
          <Button
            variant="primary"
            size="lg"
            onClick={() => navigate("/session")}
            className="group"
          >
            Let's Discuss Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};

// --- Proof Section ---
export const ProofSection: React.FC = () => {
  const proofs = [
    {
      title:
        "How We Generated 2,700+ High-Intent Enquiries at a ₹39 CPL for a Real Estate Developer",
      problem:
        "The developer was struggling with rising enquiry costs, low-quality leads from generic targeting, and no predictable system for driving site-visit bookings. Their campaigns were scattered, inconsistent, and lacked a clear funnel.",
      mechanism:
        "We rebuilt their performance engine using a 3-layer Meta funnel. Broad + interest prospecting helped identify strong audience pockets, a hyper-local Deepavali campaign captured location-driven demand, and a remarketing layer re-engaged warm users across website and landing-page visits. This structure created a clean, intent-driven pipeline instead of random traffic.",
      numbers:
        "Total Leads: 2,744 | Blended CPL: ₹39.59 | Total Spend: ₹108,636.76 (12 Nov 2022 – 12 Dec 2025) | Reach: 637,213 | Impressions: 1,619,138",
      result:
        "We shifted from unpredictable, expensive leads to a steady flow of high-intent enquiries. With hyper-local targeting and strong remarketing, the sales team received better-qualified prospects and overall acquisition costs dropped dramatically.",
      image: "/case-study-1.jpeg",
    },
    {
      title:
        "How We Generated 844 High-Intent Real Estate Leads Using Google Ads",
      problem:
        "The developer’s Google Ads setup was driving high traffic but almost no conversions. Campaigns lacked keyword segmentation, attracted unqualified enquiries, and pushed no warm traffic toward conversion. With rising costs and no reliable acquisition system, the sales team was overwhelmed with low-intent leads.",
      mechanism:
        "We rebuilt the Google Ads engine from the ground up — segmenting campaigns by high-intent, location, and competitor keywords, refining ad copy to filter out low-intent visitors, and driving traffic to a high-converting landing page with strong CTAs and trust elements. With full tracking, “Maximize Conversions” optimisation, and wasted spend removed, the budget flowed only into genuine high-intent search demand.",
      numbers:
        "Clicks: 10,400 | Impressions: 131,000 | Total Conversions: 844 | Ad Spend: $18,800 | Average CPL: $22.2 (≈60% cheaper than the Dubai market benchmark of $50–$70 per lead)",
      result:
        "The sales team received only qualified inquiries — people actively seeking site visits, project details, or investment opportunities. The landing page alone improved contact-to-conversion from 3% to 14%.",
      image: "/case-study-2.jpeg",
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
            Why Real Estate Companies in Dubai Choose Adsmagnify
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Niche-Specialized Real Estate Marketing",
              "Transparent Reporting",
              "No Staff Dependency",
              "Appointment-Focused System",
              "Proven Results",
              "Sales-Grade funnels",
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
