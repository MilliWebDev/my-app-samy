
import Navbar from "@/components/nav";
import HeroSection from "@/components/hero";
import AboutSection from "@/components/about";
import ResponsiveTimelineFixed from "@/components/expertise";
import TestimonialsSection from "@/components/testimonials";
import PortfolioSection from "@/components/portfolio";
import FooterSection from "@/components/foot";

export default function Home() {
  return (
    <main className="min-h-screen  relative grid grid-cols-1 md:grid-cols-6 overflow-hidden">
      <div className="col-span-1 md:col-span-6">
        <Navbar />
      </div>
      <div className="col-span-1 md:col-span-6 ">
        <HeroSection />
      </div>
      
      <div className="pt-2 text-center col-span-1 md:col-span-6 my-5">
        <AboutSection />
      </div>

       <div className="pt-2 text-center col-span-1 md:col-span-6 my-5">
        <ResponsiveTimelineFixed />
      </div>

      <div className="pt-2 text-center col-span-1 md:col-span-6 my-5">
        <TestimonialsSection />
      </div>

      <div className="pt-2 text-center col-span-1 md:col-span-6 my-5">
        <PortfolioSection />
      </div>

       <div className="pt-2 text-center col-span-1 md:col-span-6 my-5">
        <FooterSection />
      </div>
    </main>
  );
}
