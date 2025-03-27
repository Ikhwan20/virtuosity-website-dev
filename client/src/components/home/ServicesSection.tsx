import { SectionHeader } from "@/components/ui/section-header";
import ServiceCard from "./ServiceCard";
import { services } from "@/lib/services";
import { motion } from "framer-motion";

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-40 bg-gradient-to-r from-primary/0 to-primary/5 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-40 bg-gradient-to-l from-primary/0 to-primary/5 rounded-tr-full"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          <SectionHeader
            title="Cloud Solutions Tailored for Your Business"
            description="Discover our comprehensive suite of enterprise services designed to transform your organization's digital infrastructure and capabilities."
          />
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
        
        {/* Bottom CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-lg text-gray-600 mb-6">
            Not sure which solution is right for you? Our experts can guide you through the options.
          </p>
          <motion.a 
            href="#contact" 
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            Schedule a consultation
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
