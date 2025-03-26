export interface Technology {
  name: string;
  url: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  technologies?: Technology[];
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
    technologies: [
      { name: "Kubernetes", url: "https://kubernetes.io/" },
      { name: "VMware", url: "https://www.vmware.com/" },
      { name: "OpenShift", url: "https://www.redhat.com/en/technologies/cloud-computing/openshift" }
    ]
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
    technologies: [
      { name: "GitLab", url: "https://about.gitlab.com/" },
      { name: "Jenkins", url: "https://www.jenkins.io/" },
      { name: "Terraform", url: "https://www.terraform.io/" },
      { name: "Ansible", url: "https://www.ansible.com/" }
    ]
  },
  {
    id: "microservices",
    title: "Cloud Native Applications",
    description: "Build modern applications with Microservices Architecture - obtain quicker deployment response to changing market demand.",
    image: "https://www.virtuosity-global.com/wp-content/uploads/2022/04/sam_microservices-1.png",
    features: [
      "Monolith to microservices migration",
      "API gateway implementation",
      "Service mesh architecture",
      "Event-driven design patterns"
    ],
    technologies: [
      { name: "Spring Boot", url: "https://spring.io/projects/spring-boot" },
      { name: "Node.js", url: "https://nodejs.org/" },
      { name: "Docker", url: "https://www.docker.com/" },
      { name: "Istio", url: "https://istio.io/" }
    ]
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
    technologies: [
      { name: "ReN3.ai", url: "https://ren3.ai/" },
      { name: "OpenAI", url: "https://openai.com/" },
      { name: "DeepSeek", url: "https://www.deepseek.com/" },
      { name: "Claude", url: "https://www.anthropic.com/claude" },
      { name: "Mistral", url: "https://mistral.ai/" },
      { name: "Llama", url: "https://ai.meta.com/llama/" }
    ],
  }
];
