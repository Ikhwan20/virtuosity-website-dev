import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  
  // Auto rotate between slides
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === 0 ? 1 : 0));
    }, 8000); // Change slide every 8 seconds
    
    return () => clearInterval(interval);
  }, []);

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Simplified fade transition to avoid layout shifts
  const slideVariants = {
    enter: { opacity: 0 },
    center: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const slideTransition = {
    duration: 0.4,
    ease: "easeInOut"
  };

  // Original hero content
  const cloudHero = (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center"
      key="cloud-hero"
      variants={slideVariants}
      initial="enter"
      animate="center" 
      exit="exit"
      transition={slideTransition}
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.h1 
          className="text-4xl md:text-5xl font-montserrat font-bold mb-6"
          variants={item}
          initial="hidden"
          animate="show"
        >
          Get Cloud Right. Be Cloud Native.
        </motion.h1>
        <motion.p 
          className="text-xl font-light mb-10"
          variants={item}
          initial="hidden"
          animate="show"
        >
          Accelerate your business with enterprise-grade cloud infrastructure, DevOps automation, and AI-driven solutions.
        </motion.p>
        <motion.div 
          variants={item}
          initial="hidden"
          animate="show"
        >
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-white text-primary hover:bg-neutral-100 font-medium py-3 px-8 rounded-md shadow-lg transition duration-300"
            asChild
          >
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Consult With Us
            </motion.a>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );

  // Ren3 partnership hero content
  const ren3Hero = (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center"
      key="ren3-hero"
      variants={slideVariants}
      initial="enter"
      animate="center" 
      exit="exit"
      transition={slideTransition}
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.div 
          className="flex justify-center mb-6" 
          variants={item}
          initial="hidden"
          animate="show"
        >
          <div className="inline-flex items-center gap-5 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <img
              src="https://i.imghippo.com/files/oeF5911RXI.png"
              alt="Ren3 AI Logo"
              className="h-10 w-auto"
            />
            <span className="text-sm font-medium">New Partnership Announcement</span>
          </div>
        </motion.div>
        <motion.h1
          className="text-4xl md:text-5xl font-montserrat font-bold mb-6"
          variants={item}
          initial="hidden"
          animate="show"
        >
          Unlock AI-Powered Solutions with Our Latest Partnership
        </motion.h1>
        <motion.p 
          className="text-xl font-light mb-10" 
          variants={item}
          initial="hidden"
          animate="show"
        >
          Virtuosity Global is now partnering with Ren3 to bring advanced AI
          solutions to businesses worldwide.
        </motion.p>
        <motion.div
          variants={item}
          initial="hidden"
          animate="show"
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            variant="outline"
            className="bg-white text-primary hover:bg-neutral-100 font-medium py-3 px-8 rounded-md shadow-lg transition duration-300"
            asChild
          >
            <motion.a
              href="/products"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Discover More
            </motion.a>
          </Button>
          <Button
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-white font-medium py-3 px-8 rounded-md shadow-lg transition duration-300"
            asChild
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Request a Demo
            </motion.a>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );

  return (
    <section className="bg-gradient-to-r from-secondary to-primary text-white overflow-hidden">
      <div className="container mx-auto px-4 relative h-[500px]">
        <AnimatePresence initial={false} mode="wait">
          {activeSlide === 0 ? cloudHero : ren3Hero}
        </AnimatePresence>
        
        {/* Slide indicators */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
          <button
            className={`w-3 h-3 rounded-full ${activeSlide === 0 ? 'bg-white' : 'bg-white/40'}`}
            onClick={() => setActiveSlide(0)}
            aria-label="Show cloud hero"
          />
          <button
            className={`w-3 h-3 rounded-full ${activeSlide === 1 ? 'bg-white' : 'bg-white/40'}`}
            onClick={() => setActiveSlide(1)}
            aria-label="Show Ren3 partnership hero"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
