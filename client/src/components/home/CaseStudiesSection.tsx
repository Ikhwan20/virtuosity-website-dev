import { useState } from "react";
import { SectionHeader } from "@/components/ui/section-header";
import { CaseStudyTab } from "@/components/ui/case-study-tab";
import { StatsCard } from "@/components/ui/stats-card";
import { Card, CardContent } from "@/components/ui/card";
import { caseStudies } from "@/lib/caseStudies";
import { motion, AnimatePresence } from "framer-motion";

const CaseStudiesSection = () => {
  const [activeTab, setActiveTab] = useState("telco");

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  const activeCase = caseStudies.find(study => study.id === activeTab);

  return (
    <section id="case-studies" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <SectionHeader
            title="Some of our clients' Cloud Native journeys with us:"
            description="Explore how we've helped organizations across various industries transform their IT infrastructure."
          />
        </motion.div>

        <motion.div 
          className="mb-8 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="border-b border-gray-200 flex flex-wrap">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                <CaseStudyTab
                  id={study.id}
                  label={study.industry}
                  isActive={activeTab === study.id}
                  onClick={handleTabChange}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {activeCase && (
            <motion.div
              key={activeCase.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-white rounded-lg shadow-lg overflow-hidden">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                    {activeCase.stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                      >
                        <StatsCard
                          value={stat.value}
                          label={stat.label}
                        />
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    >
                      <h3 className="text-xl font-montserrat font-bold mb-4">Background</h3>
                      <p className="text-neutral-600 mb-4">{activeCase.background}</p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7, duration: 0.5 }}
                    >
                      <h3 className="text-xl font-montserrat font-bold mb-4">The Journey</h3>
                      <p className="text-neutral-600 mb-4">{activeCase.journey}</p>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
