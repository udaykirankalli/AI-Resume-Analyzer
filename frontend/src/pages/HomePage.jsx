import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";

export default function MainPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#080b1f]">
      <main>
        <Header />
        <Hero />
        <Features />
        <CallToAction />
        <Footer />
      </main>
    </div>
  );
}
