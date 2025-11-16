import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* ===================== DESKTOP NAVBAR ===================== */}
      <nav
        className={`hidden lg:flex sticky top-8 z-50 justify-center transition-all duration-300 ${
          isScrolled ? 'scale-[1.02]' : ''
        }`}
      >
        <div
          className={`flex items-center justify-between gap-10 px-10 py-4 rounded-full backdrop-blur-md transition-all duration-300 w-auto
          ${
            isScrolled
              ? 'bg-black/60 border border-gray-400/30 shadow-lg shadow-black/30'
              : 'bg-black/30 border border-gray-400/20'
          }`}
        >
          {/* Brand Name */}
          <a
            href="#home"
            className="text-2xl text-white font-['Instrument_Serif'] hover:text-gray-300 transition-colors"
          >
            S<span className="italic font-['Instrument_Serif']">c</span>alKit
          </a>

          {/* Nav Links */}
          {[
            { href: '#about', label: 'About' },
            { href: '#services', label: 'Services' },
            { href: '#why-us', label: 'Why Us' },
            { href: '#insights', label: 'Insights' },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base text-gray-300 hover:text-white transition-colors font-['DM_Sans']"
            >
              {link.label}
            </a>
          ))}

          <Link
            to="/book-a-call"
            className="bg-[#6214d9] hover:bg-[#6214d9]/90 text-white px-6 py-2 rounded-full transition-colors text-base font-['DM_Sans']"
          >
            Book a Call
          </Link>
        </div>
      </nav>

      {/* ===================== MOBILE NAVBAR ===================== */}
      <nav className="lg:hidden fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-end">
        <button
          className="text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>

        {/* Full-Screen Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-black/95 backdrop-blur-lg flex flex-col items-center justify-center space-y-8 z-40">

            {/* Close Button */}
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-6 right-6 text-white"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Nav Links */}
            {[
              { href: '#about', label: 'About' },
              { href: '#services', label: 'Services' },
              { href: '#why-us', label: 'Why Us' },
              { href: '#insights', label: 'Insights' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-3xl font-semibold text-white hover:text-gray-300 transition-all font-['DM_Sans']"
              >
                {link.label}
              </a>
            ))}

            {/* CTA Button */}
            <Link
              to="/book-a-call"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-[#6214d9] hover:bg-[#6214d9]/90 text-white px-6 py-3 rounded-full text-xl transition-all font-['DM_Sans']"
            >
              Book a Call
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
