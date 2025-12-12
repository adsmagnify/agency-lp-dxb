import React from "react";
import {
  HeroSection,
  TrustBar,
  ProblemSection,
  SolutionSection,
  ValueStack,
  ProofSection,
  PricingGuarantee,
  AboutAndFinal,
} from "../components/LandingModules";
import { Footer } from "../components/Footer";

const LandingPage: React.FC = () => {
  return (
    <div className="bg-white">
      <HeroSection />
      <TrustBar />
      <ProblemSection />
      <SolutionSection />
      <ValueStack />
      <ProofSection />
      <PricingGuarantee />
      <AboutAndFinal />
      <Footer />
    </div>
  );
};

export default LandingPage;
