import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronDown, ExternalLink, ArrowRight } from "lucide-react";
import { type Service, type Technology } from "@/lib/services";
import { Badge } from '@/components/ui/badge';
import { motion, AnimatePresence } from "framer-motion";

interface ServiceCardProps {
  service: Service;
  index?: number;
}

// Service icons mapping
const serviceIcons: Record<string, JSX.Element> = {
  "hybrid-cloud": <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 16.2A4.5 4.5 0 0 0 17.5 8h-1.8A7 7 0 1 0 4 14.9"></path><path d="M12 20v2"></path><path d="M16 20v-2"></path><path d="M8 20v-1"></path></svg>,
  "devops": <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M7 7h10"></path><path d="M10 11h4"></path><path d="M7 15h10"></path></svg>,
  "microservices": <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="8" height="8" x="3" y="3" rx="2"></rect><rect width="8" height="8" x="13" y="3" rx="2"></rect><rect width="8" height="8" x="3" y="13" rx="2"></rect><rect width="8" height="8" x="13" y="13" rx="2"></rect></svg>,
  "ai": <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2H2v10h10V2z"></path><path d="M22 12h-4v4h-4v4h8v-8z"></path><path d="M16 12V6h-4V2"></path><path d="M12 12H2v10h10V12z"></path><path d="M12 12V6"></path></svg>
};

const ServiceCard = ({ service, index = 0 }: ServiceCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDetails = () => {
    setIsExpanded(!isExpanded);
  };

  // Generate a gradient class based on the service ID
  const getGradientClass = (id: string) => {
    switch(id) {
      case 'hybrid-cloud':
        return 'from-blue-500/10 to-sky-400/10';
      case 'devops':
        return 'from-orange-500/10 to-amber-400/10';
      case 'microservices':
        return 'from-green-500/10 to-emerald-400/10';
      case 'ai':
        return 'from-purple-500/10 to-violet-400/10';
      default:
        return 'from-primary/10 to-secondary/10';
    }
  };

  // Get the appropriate icon for the service
  const getServiceIcon = (id: string) => {
    return serviceIcons[id] || serviceIcons['hybrid-cloud'];
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
      className="h-full"
    >
      <Card className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full border-none">
        <div className={`h-2 w-full bg-gradient-to-r ${getGradientClass(service.id)}`}></div>
        <CardContent className="p-0">
          {/* Card Header with Icon */}
          <div className="px-6 pt-6 pb-4 flex items-start gap-4">
            <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${getGradientClass(service.id)} flex items-center justify-center text-primary`}>
              {getServiceIcon(service.id)}
            </div>
            <div className="flex-1">
              <motion.h3 
                className="text-xl font-montserrat font-bold mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
              >
                {service.title}
              </motion.h3>
              
              <motion.p 
                className="text-neutral-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
              >
                {service.description}
              </motion.p>
            </div>
          </div>
          
          {/* Technology Pills */}
          {service.technologies && (
            <motion.div 
              className="px-6 py-4 border-t border-gray-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <h4 className="text-sm font-medium text-gray-500 mb-3">Powered By:</h4>
              <div className="flex flex-wrap gap-2">
                {service.technologies.slice(0, 5).map((tech, i) => (
                  <motion.a
                    key={i}
                    href={tech.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.05, duration: 0.3 }}
                    whileHover={{ scale: 1.05 }}
                    className="inline-block"
                  >
                    <Badge 
                      variant="outline" 
                      className="bg-gradient-to-r from-gray-50 to-white border-gray-200 text-gray-700 hover:border-primary/30 transition-colors duration-200 rounded-full px-3 py-1 text-xs"
                    >
                      {tech.name}
                    </Badge>
                  </motion.a>
                ))}
                {service.technologies.length > 5 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.3 }}
                  >
                    <Badge 
                      variant="outline" 
                      className="bg-white border-primary/20 text-primary/80 px-2 py-1 text-xs cursor-pointer"
                      onClick={toggleDetails}
                    >
                      +{service.technologies.length - 5} more
                    </Badge>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
          
          {/* Features Preview */}
          <motion.div 
            className="px-6 py-4 border-t border-gray-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <div className="flex flex-wrap gap-y-2">
              {service.features.slice(0, 2).map((feature, i) => (
                <motion.div 
                  key={i}
                  className="flex items-start w-full gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.3 }}
                >
                  <div className="min-w-5 w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span className="text-sm text-gray-600">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Action Button */}
          <motion.div 
            className="px-6 py-4 border-t border-gray-100 bg-gray-50/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              variant="ghost"
              className="w-full justify-between text-primary hover:text-primary/90 hover:bg-primary/5 px-4 py-2 h-auto font-medium"
              onClick={toggleDetails}
            >
              <span>{isExpanded ? "Show Less" : "View Details"}</span>
              <motion.div
                animate={{ rotate: isExpanded ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isExpanded ? <ChevronDown size={18} /> : <ArrowRight size={18} />}
              </motion.div>
            </Button>
          </motion.div>
        </CardContent>
        
        <AnimatePresence>
          {isExpanded && (
            <motion.div 
              className="border-t border-gray-100 bg-gray-50/80"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-6">
                <h4 className="font-montserrat font-bold mb-3 text-gray-800">All Features:</h4>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <motion.li 
                      key={i}
                      className="flex items-start gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                    >
                      <div className="min-w-5 w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                
                {service.technologies && service.technologies.length > 0 && (
                  <div className="mb-6">
                    <h4 className="font-montserrat font-bold mb-3 text-gray-800">All Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.02, duration: 0.3 }}
                          whileHover={{ scale: 1.03 }}
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
                  </div>
                )}
                
                {service.extraLink && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.3 }}
                    className="mt-4"
                  >
                    <Button
                      variant="outline"
                      className="bg-white border-primary text-primary hover:bg-primary/5 transition-colors"
                      asChild
                    >
                      <motion.a 
                        href={service.extraLink.url}
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                        className="inline-flex items-center gap-2"
                      >
                        {service.extraLink.text}
                        <ChevronRight size={16} />
                      </motion.a>
                    </Button>
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