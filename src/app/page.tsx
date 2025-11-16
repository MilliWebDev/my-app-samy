
import Navbar from "@/components/nav";
import HeroSection from "@/components/hero";

export default function Home() {
  return (
    <div className="min-h-screen  relative grid grid-cols-1 md:grid-cols-6">
      <div className="col-span-1 md:col-span-6">
        <Navbar />
      </div>
      <div className="col-span-1 md:col-span-6 my-10">
        <HeroSection />
      </div>
      
      <main className="pt-24 text-center">
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome to Once UI ✨
        </h1>
      </main>
    </div>
  );
}
