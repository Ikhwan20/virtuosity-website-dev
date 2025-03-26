import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { AlignJustify, X, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import companyLogo from "@/assets/virtuosity_solutions_sdn_bhd_logo.jpeg";

interface NavLink {
  name: string;
  path: string;
  external?: boolean;
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks: NavLink[] = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/#services" },
    { name: "Client Stories", path: "/#case-studies" },
    { name: "About Us", path: "/#about" },
    { name: "Contact", path: "/#contact" },
    { name: "Blog", path: "https://www.pivotal.my", external: true }
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location === path;
    }
    return location.includes(path.replace("#", ""));
  };
  
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, path: string, isExternal?: boolean) => {
    // For external links, allow default behavior
    if (isExternal) {
      // Don't prevent default to allow browser to navigate to external URL
      window.open(path, '_blank');
      closeMenu();
      return;
    }
    
    e.preventDefault();
    
    // For hash links, scroll to the section
    if (path.includes('#')) {
      const targetId = path.split('#')[1];
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100, // Offset for header height
          behavior: 'smooth'
        });
      }
      
      // Update location for active styling
      setLocation(path);
    } else {
      // Regular navigation
      setLocation(path);
    }
    
    closeMenu();
  };

  return (
    <motion.header 
      className="sticky top-0 z-50 bg-secondary shadow-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <motion.div 
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link href="/" className="flex items-center gap-3">
            <motion.img 
              src={companyLogo} 
              alt="Virtuosity Solutions Logo" 
              className="h-10 w-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <span className="font-montserrat text-2xl font-bold text-primary">
              Virtuosity Solutions
            </span>
          </Link>
        </motion.div>
        
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <a
                href={link.path}
                onClick={(e) => handleNavigation(e, link.path, link.external)}
                className={`font-medium ${
                  isActive(link.path) ? "text-primary" : "text-white hover:text-primary"
                } transition-colors duration-200`}
              >
                <motion.span 
                  whileHover={{ y: -2 }} 
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex items-center gap-1"
                >
                  {link.name}
                  {link.external && <ExternalLink size={14} className="inline ml-1" />}
                </motion.span>
              </a>
            </motion.div>
          ))}
        </nav>
        
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white hover:text-primary"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <AlignJustify size={24} />}
        </Button>
      </div>
      
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="bg-secondary shadow-lg md:hidden absolute w-full"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <a
                    href={link.path}
                    onClick={(e) => handleNavigation(e, link.path, link.external)}
                    className={`font-medium ${
                      isActive(link.path) ? "text-primary" : "text-white hover:text-primary"
                    } transition-colors duration-200 py-2 block`}
                  >
                    {link.name}
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;