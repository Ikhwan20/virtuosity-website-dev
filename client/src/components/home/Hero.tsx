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
          <motion.h1 
            className="text-4xl md:text-5xl font-montserrat font-bold mb-6"
            variants={item}
          >
            Get Cloud Right. Be Cloud Native.
          </motion.h1>
          <motion.p 
            className="text-xl font-light mb-10"
            variants={item}
          >
            Accelerate your business with enterprise-grade cloud infrastructure, DevOps automation, and AI-driven solutions.
          </motion.p>
          <motion.div variants={item}>
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
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
