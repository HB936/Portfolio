import React, { useEffect, useState } from "react";

export default function Navbar() {
  const navItems = ["About", "Projects", "Skills", "Resume", "Hobbies"];

  const [scrollAmount, setScrollAmount] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(false);

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
  };

  return (
    <header className={`sticky top-0 z-10 transition-all duration-500 w-full ${isScrollingUp ? 'opacity-100' : 'opacity-0'}`}>
      <div className="bg-white/5 backdrop-blur-md rounded-b-3xl py-4 px-8 border-b border-white/10">
        <ul className="flex justify-center gap-12 text-white cursor-pointer max-w-6xl mx-auto">
          {navItems.map((item, index) => (
            <li
              key={index}
              onClick={() => handleNavClick(item)}
              className="text-base font-semibold transition-all duration-300 ease-in-out hover:text-[#4FC3F7] relative group"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#4FC3F7] to-transparent group-hover:w-full transition-all duration-300"></span>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
