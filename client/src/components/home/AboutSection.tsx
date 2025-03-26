import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-neutral-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <SectionHeader
            title="About the Virtuosity Solutions Team"
            description="Our story and commitment to excellence in cloud solutions"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Card className="bg-white rounded-lg shadow-lg h-full">
              <CardContent className="p-8">
                <motion.h3 
                  className="text-2xl font-montserrat font-bold mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Who are we?
                </motion.h3>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <p className="text-neutral-600 mb-4">
                    <strong>Virtuosity Solutions</strong>, established in 2014, is head-quartered in Malaysia, to serve the ASEAN region in Next-Generation Enterprise IT Infrastructure and driving change in How the World Develops and Runs Software.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <p className="text-neutral-600 mb-4">
                    We have a team of capable Cloud Infra Architects, Software Developers, Data Scientists & Deep Learning Practitioners ready to provide Cloud Infrastructure consultation services, DevOps consultation / implementation and Software Development. We are the leading company in cloud solutions across Malaysia and the ASEAN region.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <p className="text-neutral-600">
                    Our expertise spans across various industries including telecommunications, facilities management, financial services, and more.
                  </p>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Card className="bg-white rounded-lg shadow-lg h-full">
              <CardContent className="p-8">
                <motion.h3 
                  className="text-2xl font-montserrat font-bold mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Our Corporate Citizenship
                </motion.h3>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <p className="text-neutral-600 mb-6">
                    We take our professionalism very seriously to bring Peace-of-Mind and the Best Partnership Experience to You. We will manage and investigate all complaints and reports received while keeping the identity of the complainant confidential.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Button 
                    className="bg-primary text-white hover:bg-primary/80"
                    asChild
                  >
                    <a 
                      href="https://www.virtuosity-global.com/wp-content/uploads/2022/04/Virtuosity-Sdn-Bhd-ANTI_BRIBERY_AND_CORRUPTION-Policy.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center"
                    >
                      <FileText className="mr-2" size={16} />
                      View & Download our Anti-Bribery & Corruption Policy
                    </a>
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
