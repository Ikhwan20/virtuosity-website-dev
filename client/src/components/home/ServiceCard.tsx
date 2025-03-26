import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronDown, ExternalLink } from "lucide-react";
import { type Service, type Technology } from "@/lib/services";
import { Badge } from '@/components/ui/badge';
import { motion, AnimatePresence } from "framer-motion";

interface ServiceCardProps {
  service: Service;
  index?: number;
}

const ServiceCard = ({ service, index = 0 }: ServiceCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDetails = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{ y: -5 }}
    >
      <Card className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full border-t-2 border-primary">
        <CardContent className="p-6">
          <motion.h3 
            className="text-xl font-montserrat font-bold mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
          >
            {service.title}
          </motion.h3>
          
          <motion.p 
            className="text-neutral-600 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
          >
            {service.description}
          </motion.p>
          
          <motion.div 
            className="w-full h-48 flex justify-center items-center mb-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
          >
            {service.id === "ai" ? (
              <div className="w-full h-full flex items-center justify-center">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ) : (
              <img 
                src={service.image} 
                alt={service.title} 
                className="max-w-full max-h-full object-contain"
              />
            )}
          </motion.div>
          
          <motion.div
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant={isExpanded ? "ghost" : "outline"} 
              className={`flex items-center font-medium ${isExpanded ? 'text-secondary hover:text-secondary/80 p-0' : 'text-primary hover:text-primary border-primary hover:bg-primary/10'}`}
              onClick={toggleDetails}
            >
              {isExpanded ? "Show Less" : "Learn More"} 
              <motion.div
                animate={{ rotate: isExpanded ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isExpanded ? <ChevronDown className="ml-2" /> : <ChevronRight className="ml-2" />}
              </motion.div>
            </Button>
          </motion.div>
        </CardContent>
        
        <AnimatePresence>
          {isExpanded && (
            <motion.div 
              className="px-6 pb-6"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="pt-4 border-t border-gray-200">
                <h4 className="font-montserrat font-bold mb-2">Features:</h4>
                <ul className="list-disc pl-5 mb-4">
                  {service.features.map((feature, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.3 }}
                    >
                      {feature}
                    </motion.li>
                  ))}
                </ul>
                
                {service.technologies && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {service.technologies.map((tech, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05, duration: 0.3 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <a 
                          href={tech.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-block"
                        >
                          <Badge 
                            variant="outline" 
                            className="bg-white border-primary/20 text-primary hover:bg-primary/5 transition-colors duration-200 rounded-full px-3 py-1 text-sm flex items-center gap-1"
                          >
                            {tech.name}
                            <ExternalLink size={12} className="ml-1" />
                          </Badge>
                        </a>
                      </motion.div>
                    ))}
                  </div>
                )}
                
                {service.extraLink && (
                  <motion.div 
                    className="mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                  >
                    <motion.a 
                      href={service.extraLink.url} 
                      className="text-primary hover:text-primary/80 font-medium inline-block"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {service.extraLink.text} →
                    </motion.a>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;
