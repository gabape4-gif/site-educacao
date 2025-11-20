import { Hero } from "./components/Hero";
import { Problem } from "./components/Problem";
import { About } from "./components/About";
import { ForWho } from "./components/ForWho";
import { Pillars } from "./components/Pillars";
import { Formats } from "./components/Formats";
import { SocialProof } from "./components/SocialProof";
import { WhyNow } from "./components/WhyNow";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { Toaster } from "sonner";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Problem />
      <About />
      <ForWho />
      <Pillars />
      <Formats />
      <SocialProof />
      <WhyNow />
      <CTA />
      <Footer />
      <Toaster />
    </div>
  );
}
