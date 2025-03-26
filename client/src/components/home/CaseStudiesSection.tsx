import { useState } from "react";
import { SectionHeader } from "@/components/ui/section-header";
import { CaseStudyTab } from "@/components/ui/case-study-tab";
import { StatsCard } from "@/components/ui/stats-card";
import { Card, CardContent } from "@/components/ui/card";
import { caseStudies } from "@/lib/caseStudies";

const CaseStudiesSection = () => {
  const [activeTab, setActiveTab] = useState("telco");

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  const activeCase = caseStudies.find(study => study.id === activeTab);

  return (
    <section id="case-studies" className="py-16">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Some of our clients' Cloud Native journeys with us:"
          description="Explore how we've helped organizations across various industries transform their IT infrastructure."
        />

        <div className="mb-8 flex justify-center">
          <div className="border-b border-gray-200 flex flex-wrap">
            {caseStudies.map(study => (
              <CaseStudyTab
                key={study.id}
                id={study.id}
                label={study.industry}
                isActive={activeTab === study.id}
                onClick={handleTabChange}
              />
            ))}
          </div>
        </div>

        {activeCase && (
          <Card className="bg-white rounded-lg shadow-lg overflow-hidden">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                {activeCase.stats.map((stat, index) => (
                  <StatsCard
                    key={index}
                    value={stat.value}
                    label={stat.label}
                  />
                ))}
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-montserrat font-bold mb-4">Background</h3>
                  <p className="text-neutral-600 mb-4">{activeCase.background}</p>
                </div>
                <div>
                  <h3 className="text-xl font-montserrat font-bold mb-4">The Journey</h3>
                  <p className="text-neutral-600 mb-4">{activeCase.journey}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
};

export default CaseStudiesSection;
