import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { AlignJustify, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/#services" },
    { name: "Client Stories", path: "/#case-studies" },
    { name: "About Us", path: "/#about" },
    { name: "Contact", path: "/#contact" },
    { name: "Blog", path: "/blog" }
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location === path;
    }
    return location.includes(path.replace("#", ""));
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="font-montserrat text-2xl font-bold text-primary">
            Virtuosity
          </Link>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`font-medium ${
                isActive(link.path) ? "text-primary" : "text-neutral-800 hover:text-primary"
              } transition-colors duration-200`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <AlignJustify size={24} />}
        </Button>
      </div>
      
      {isMenuOpen && (
        <div className="bg-white shadow-lg md:hidden absolute w-full">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`font-medium ${
                  isActive(link.path) ? "text-primary" : "text-neutral-800 hover:text-primary"
                } transition-colors duration-200 py-2`}
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
