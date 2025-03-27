import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="bg-gradient-to-r from-secondary to-primary py-20 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div 
            className="flex justify-center mb-6"
            variants={item}
          >
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <img 
                src="https://i.ibb.co/jvYLVQmq/image-2025-03-27-142713360.png" 
                alt="Ren3 AI Logo" 
                className="h-8 w-auto"
              />
              <span className="text-sm font-medium">New Partnership Announcement</span>
            </div>
          </motion.div>
          <motion.h1 
            className="text-4xl md:text-5xl font-montserrat font-bold mb-6"
            variants={item}
          >
            Unlock AI-Powered Solutions with Our Latest Partnership
          </motion.h1>
          <motion.p 
            className="text-xl font-light mb-10"
            variants={item}
          >
            Virtuosity Global is now partnering with Ren3 to bring advanced AI solutions to businesses worldwide.
          </motion.p>
          <motion.div 
            variants={item}
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
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
