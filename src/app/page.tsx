
import Navbar from "@/components/nav";
import HeroSection from "@/components/hero";
import AboutSection from "@/components/about";
import ExpertiseSection from "@/components/expertise";

export default function Home() {
  return (
    <main className="min-h-screen  relative grid grid-cols-1 md:grid-cols-6">
      <div className="col-span-1 md:col-span-6">
        <Navbar />
      </div>
      <div className="col-span-1 md:col-span-6 my-10">
        <HeroSection />
      </div>
      
      <div className="pt-2 text-center col-span-1 md:col-span-6 my-5">
        <AboutSection />
      </div>

       <div className="pt-2 text-center col-span-1 md:col-span-6 my-5">
        <ExpertiseSection />
      </div>
    </main>
  );
}
