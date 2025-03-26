import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-neutral-100">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="About the Virtuosity Team"
          description="Our story and commitment to excellence in cloud solutions"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="bg-white rounded-lg shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-montserrat font-bold mb-6">Who are we?</h3>
              <p className="text-neutral-600 mb-4">
                <strong>Virtuosity</strong>, established in 2014, is head-quartered in Malaysia, to serve the ASEAN region in Next-Generation Enterprise IT Infrastructure and driving change in How the World Develops and Runs Software.
              </p>
              <p className="text-neutral-600 mb-4">
                We have a team of capable Cloud Infra Architects, Software Developers, Data Scientists & Deep Learning Practitioners ready to provide Cloud Infrastructure consultation services, DevOps consultation / implementation and Software Development. We are the leading company in cloud solutions across Malaysia and the ASEAN region.
              </p>
              <p className="text-neutral-600">
                Our expertise spans across various industries including telecommunications, facilities management, financial services, and more.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white rounded-lg shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-montserrat font-bold mb-6">Our Corporate Citizenship</h3>
              <p className="text-neutral-600 mb-6">
                We take our professionalism very seriously to bring Peace-of-Mind and the Best Partnership Experience to You. We will manage and investigate all complaints and reports received while keeping the identity of the complainant confidential.
              </p>
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
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
