import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-secondary to-primary py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
            Get Cloud Right. Be Cloud Native.
          </h1>
          <p className="text-xl font-light mb-10">
            Accelerate your business with enterprise-grade cloud infrastructure, DevOps automation, and AI-driven solutions.
          </p>
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-white text-primary hover:bg-neutral-100 font-medium py-3 px-8 rounded-md shadow-lg transition duration-300"
            asChild
          >
            <a href="#contact">Consult With Us</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
