import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, Cloud, Shield, Zap, Globe, Cpu, Database, Layers } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

const Products = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-primary py-24 text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={item} className="flex justify-center mb-10">
              <motion.img 
                src="https://i.ibb.co/jvYLVQmq/image-2025-03-27-142713360.png" 
                alt="Ren3 AI Logo" 
                className="h-20 md:h-24 w-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              />
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-5xl font-montserrat font-bold mb-6 text-center"
              variants={item}
            >
              Introducing Ren3 AI – Smarter, Faster, More Efficient.
            </motion.h1>
            <motion.p 
              className="text-xl font-light mb-10 text-center"
              variants={item}
            >
              Leverage the power of AI to transform your business.
            </motion.p>
            <motion.div variants={item} className="flex justify-center">
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white text-primary hover:bg-neutral-100 font-medium py-3 px-8 rounded-md shadow-lg transition duration-300"
              >
                <motion.span 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2"
                >
                  Request a Demo
                  <ChevronRight size={16} />
                </motion.span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Why Ren3 AI?"
            description="Discover how Ren3 AI can revolutionize your business operations with cutting-edge artificial intelligence technology."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <motion.div
              className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-4">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Agentic AI</h3>
              <p className="text-gray-600">
                AI that acts independently to optimize workflows and complete complex tasks with minimal human intervention.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-4">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">On-Premise & Secure</h3>
              <p className="text-gray-600">
                Keep your data private and secure with on-premise deployment options and transparent data processing.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-4">
                <Database size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Proven Use Cases</h3>
              <p className="text-gray-600">
                From document analysis to productivity enhancement and sentiment analysis - Ren3 AI delivers measurable results.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-4">
                <Globe size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Multi-lingual AI Assistant</h3>
              <p className="text-gray-600">
                Communicate with your AI assistant in multiple languages, providing organization-wide intelligence across borders.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">How Ren3 AI Enhances Our Offerings</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our partnership with Ren3 allows us to provide AI-powered solutions integrated into our consulting and automation services.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white">
                      <Cloud size={18} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Enhanced Cloud Solutions</h3>
                    <p className="text-gray-600 mt-2">
                      AI-powered optimization of cloud workloads and infrastructure management.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white">
                      <Cpu size={18} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">DevOps Automation</h3>
                    <p className="text-gray-600 mt-2">
                      Intelligent automation tools powered by AI to streamline your DevOps pipeline.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white">
                      <Layers size={18} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Application Modernization</h3>
                    <p className="text-gray-600 mt-2">
                      Transform legacy applications with AI-driven insights and modernization pathways.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <Button 
                  className="bg-primary hover:bg-primary/90 text-white"
                  asChild
                >
                  <a href="/#services">
                    <span className="flex items-center gap-2">
                      Explore Our Services
                      <ChevronRight size={16} />
                    </span>
                  </a>
                </Button>
              </div>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2 flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative w-full max-w-md h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl overflow-hidden shadow-lg">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img 
                    src="https://i.ibb.co/jvYLVQmq/image-2025-03-27-142713360.png" 
                    alt="Ren3 AI Integration" 
                    className="w-32 absolute opacity-10"
                  />
                  <div className="z-10 text-center p-6">
                    <h3 className="text-2xl font-bold mb-4">Transforming Businesses with AI</h3>
                    <p className="text-gray-700 mb-6">
                      Ren3 AI seamlessly integrates with Virtuosity's existing solutions to deliver enhanced value.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-lg shadow">
                        <p className="font-bold text-primary text-xl">30%</p>
                        <p className="text-sm text-gray-600">Productivity Gain</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow">
                        <p className="font-bold text-primary text-xl">40%</p>
                        <p className="text-sm text-gray-600">Cost Reduction</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow">
                        <p className="font-bold text-primary text-xl">24/7</p>
                        <p className="text-sm text-gray-600">Availability</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow">
                        <p className="font-bold text-primary text-xl">90%</p>
                        <p className="text-sm text-gray-600">Customer Satisfaction</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Business with AI?</h2>
            <p className="text-xl max-w-2xl mx-auto mb-10">
              Take the first step towards intelligent automation and AI-powered business transformation with Virtuosity and Ren3.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white text-primary hover:bg-neutral-100 font-medium"
              >
                <span className="flex items-center gap-2">
                  Schedule a Consultation
                  <ChevronRight size={16} />
                </span>
              </Button>
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-white"
              >
                <span className="flex items-center gap-2">
                  Explore Ren3 AI
                  <ChevronRight size={16} />
                </span>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Products;