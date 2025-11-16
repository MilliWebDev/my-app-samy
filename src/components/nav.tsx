"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Info, Briefcase, BookOpen, Image as ImageIcon } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const [active, setActive] = useState(pathname);

  const navItems = [
    { name: "Accueil", href: "/", icon: <Home size={18} /> },
    { name: "A propos", href: "/about", icon: <Info size={18} /> },
    { name: "Services", href: "/work", icon: <Briefcase size={18} /> },
    { name: "Blog", href: "/blog", icon: <BookOpen size={18} /> },
    { name: "Galleries", href: "/gallery", icon: <ImageIcon size={18} /> },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-md shadow-lg border border-gray-200 rounded-full px-6 py-2 z-50">
        
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-6 mr-10 ">
          <Image
            src="/logo.png"
            alt="Logo"
            width={50}
            height={70}
            className="rounded-full"
          />
          
        </Link>

        {/* Navigation Items */}
        <div className="flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setActive(item.href)}
              className={`flex items-center space-x-2 text-sm font-bold transition-all px-3 py-1 rounded-full ${
                active === item.href
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-md border border-gray-200 shadow-xl rounded-full px-4 py-2 flex items-center justify-between space-x-3 z-50 w-[90%] max-w-sm">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            onClick={() => setActive(item.href)}
            className={`flex flex-col items-center justify-center text-xs font-medium transition-all px-2 py-1 rounded-full ${
              active === item.href
                ? "bg-blue-600 text-white"
                : "text-gray-600 hover:text-blue-600"
            }`}
          >
            {item.icon}
            <span className="hidden sm:block">{item.name}</span>
          </Link>
        ))}
      </nav>
    </>
  );
}
