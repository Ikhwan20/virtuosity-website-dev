import { SectionHeader } from "@/components/ui/section-header";
import ServiceCard from "./ServiceCard";
import { services } from "@/lib/services";
import { motion } from "framer-motion";

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 bg-neutral-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <SectionHeader
            title="Which cloud solution suits your business strategy needs best?"
            description="We provide end-to-end cloud infrastructure and development solutions tailored to your business requirements."
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
