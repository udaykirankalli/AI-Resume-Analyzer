import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import { ResumeFlip3D } from "@/components/ResumeFlip3D";

export default function MainPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* 3D Resume Animation - Background Layer */}
      <div className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none">
        <ResumeFlip3D />
      </div>

      {/* Background overlay to make content readable */}
      <div className="fixed inset-0 z-5 bg-gradient-to-b from-blue-50/70 via-white/40 to-purple-50/70 pointer-events-none backdrop-blur-sm"></div>

      {/* Foreground Content */}
      <main className="relative z-10">
        
        <Header />
        <Hero />
        <Features />
        <CallToAction />
        <Footer />
      </main>
    </div>
  );
}
