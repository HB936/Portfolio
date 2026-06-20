import React, { useEffect, useState } from "react";

export default function Navbar() {
  const navItems = ["About", "Experience", "Skills", "Resume", "Hobbies"];

  const [scrollAmount, setScrollAmount] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let lastScroll = window.scrollY;

    if (lastScroll <= 0) {
      setIsScrollingUp(true);
      setScrollAmount(lastScroll);
    }

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll <= 0) {
        setIsScrollingUp(true)
      }
      else {
        setIsScrollingUp(currentScroll < lastScroll);
      }
      setScrollAmount(currentScroll);
      lastScroll = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (item) => {
    const sectionId = item.toLowerCase();
    const element = document.getElementById(sectionId);
    if (element) {
      if (item === "About") {
        const offsetTop = element.offsetTop + 200;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      } else {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 w-full ${isScrollingUp ? 'opacity-100' : 'opacity-0'}`}>
      <div className="bg-white/5 backdrop-blur-md rounded-b-3xl py-3 sm:py-4 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          {/* Desktop Navigation */}
          <ul className="hidden md:flex justify-center gap-6 lg:gap-8 xl:gap-12 text-white cursor-pointer">
            {navItems.map((item, index) => (
              <li
                key={index}
                onClick={() => handleNavClick(item)}
                className="text-sm lg:text-base font-semibold transition-all duration-300 ease-in-out hover:text-[#4FC3F7] relative group py-2"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#4FC3F7] to-transparent group-hover:w-full transition-all duration-300"></span>
              </li>
            ))}
          </ul>

          {/* Mobile Navigation */}
          <div className="md:hidden flex justify-between items-center">
            <h1 className="text-white font-bold text-lg">HB</h1>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2 hover:text-[#4FC3F7] transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <ul className="md:hidden absolute left-0 right-0 top-full mt-0 bg-slate-950/95 backdrop-blur-md border-b border-white/10 rounded-b-2xl py-4 px-4 flex flex-col gap-2 text-white cursor-pointer">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleNavClick(item)}
                  className="text-sm font-semibold transition-all duration-300 ease-in-out hover:text-[#4FC3F7] py-3 px-4 rounded-lg hover:bg-white/5"
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </header>
  );
}
