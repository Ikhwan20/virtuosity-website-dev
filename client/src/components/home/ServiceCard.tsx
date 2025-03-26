import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronDown } from "lucide-react";
import { type Service } from "@/lib/services";
import { Badge } from '@/components/ui/badge';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDetails = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Card className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <CardContent className="p-6">
        <h3 className="text-xl font-montserrat font-bold mb-3">{service.title}</h3>
        <p className="text-neutral-600 mb-4">{service.description}</p>
        <div className="w-full h-48 flex justify-center items-center mb-4">
          <img 
            src={service.image} 
            alt={service.title} 
            className="max-w-full max-h-full object-contain"
          />
        </div>
        <Button
          variant="ghost"
          className="text-secondary hover:text-primary flex items-center font-medium p-0"
          onClick={toggleDetails}
        >
          {isExpanded ? "Show Less" : "Learn More"} 
          {isExpanded ? <ChevronDown className="ml-2" /> : <ChevronRight className="ml-2" />}
        </Button>
      </CardContent>
      
      {isExpanded && (
        <div className="px-6 pb-6">
          <div className="pt-4 border-t border-gray-200">
            <h4 className="font-montserrat font-bold mb-2">Features:</h4>
            <ul className="list-disc pl-5 mb-4">
              {service.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            {service.technologies && (
              <div className="flex flex-wrap gap-2 mt-4">
                {service.technologies.map((tech, index) => (
                  <Badge key={index} variant="secondary" className="bg-neutral-100 rounded-full px-3 py-1 text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            )}
            {service.extraLink && (
              <div className="mt-4">
                <a href={service.extraLink.url} className="text-secondary hover:text-primary font-medium">
                  {service.extraLink.text} →
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </Card>
  );
};

export default ServiceCard;
