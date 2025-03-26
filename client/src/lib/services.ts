export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  technologies?: string[];
  extraLink?: {
    text: string;
    url: string;
  };
}

export const services: Service[] = [
  {
    id: "hybrid-cloud",
    title: "Hybrid Cloud Platform",
    description: "With the right container orchestration tool, you can freely scale and move applications across multiple cloud platforms.",
    image: "https://www.virtuosity-global.com/wp-content/uploads/2022/04/sam_cloud.png",
    features: [
      "Multi-cloud orchestration with Kubernetes",
      "Broadcom VMware infrastructure solutions",
      "Cloud migration and optimization",
      "Seamless scalability and management"
    ],
    technologies: ["Kubernetes", "VMware", "OpenShift"]
  },
  {
    id: "devops",
    title: "DevOps Platform",
    description: "Automate development processes with a DevOps toolchain. Free up Developers to engage in higher value, business-critical decisions.",
    image: "https://www.virtuosity-global.com/wp-content/uploads/2022/04/sam_devops.png",
    features: [
      "CI/CD pipeline implementation",
      "Infrastructure as Code (IaC)",
      "DevSecOps integration",
      "Automated testing and deployment"
    ],
    technologies: ["GitLab", "Jenkins", "Terraform", "Ansible"]
  },
  {
    id: "microservices",
    title: "Microservices Architecture",
    description: "Build modern applications with Microservices Architecture - obtain quicker deployment response to changing market demand.",
    image: "https://www.virtuosity-global.com/wp-content/uploads/2022/04/sam_microservices-1.png",
    features: [
      "Monolith to microservices migration",
      "API gateway implementation",
      "Service mesh architecture",
      "Event-driven design patterns"
    ],
    technologies: ["Spring Boot", "Node.js", "Docker", "Istio"]
  },
  {
    id: "ai",
    title: "AI Driven Business Productivity",
    description: "Jumpstart your AI journey with a Private Secure, Multi-lingual AI Assistant, with Proven Productivity Solution.",
    image: "https://images.unsplash.com/photo-1677442140651-1c4c0ddf1ea1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    features: [
      "Private AI deployments",
      "Multi-lingual AI assistants",
      "LLM fine-tuning and integration",
      "Workflow automation with AI"
    ],
    technologies: ["ReN3.ai", "OpenAI", "DeepSeek", "Claude", "Mistral", "Llama"],
    extraLink: {
      text: "Watch ReN3.ai Demo Videos",
      url: "#"
    }
  }
];
