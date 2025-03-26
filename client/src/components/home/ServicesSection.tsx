import { SectionHeader } from "@/components/ui/section-header";
import ServiceCard from "./ServiceCard";
import { services } from "@/lib/services";

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 bg-neutral-100">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Which cloud solution suits your business strategy needs best?"
          description="We provide end-to-end cloud infrastructure and development solutions tailored to your business requirements."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
