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
    description:
      "Scale applications seamlessly across multiple cloud platforms with the right container orchestration tool.",
    image:
      "https://www.virtuosity-global.com/wp-content/uploads/2022/04/sam_cloud.png",
    features: [
      "Multi-cloud orchestration with Kubernetes",
      "Broadcom VMware infrastructure solutions",
      "Cloud migration and optimization",
      "Seamless scalability and management",
    ],
    technologies: [
      { name: "Kubernetes", url: "https://kubernetes.io/" },
      { name: "VMware", url: "https://www.vmware.com/" },
      {
        name: "OpenShift",
        url: "https://www.redhat.com/en/technologies/cloud-computing/openshift",
      },
      {
        name: "Alibaba Cloud",
        url: "https://www.alibabacloud.com/en?_p_lc=12&utm_key=se_1007714444&utm_content=se_1007714444&gad_source=1&gclid=Cj0KCQjwy46_BhDOARIsAIvmcwNGeb5jkSDqazZ11fMoqpVG_MWJg7CJ9H3xEpZ6LkvV_igaLRgrjecaAiPbEALw_wcB",
      },
      { name: "Rancher", url: "https://www.rancher.com" },
      {
        name: "Azure",
        url: "https://azure.microsoft.com/en-us/pricing/purchase-options/azure-account/search?icid=free-search&ef_id=_k_Cj0KCQjwy46_BhDOARIsAIvmcwMB9M4YpNDv7BKM7--8vTv0myzFZG__IPIYXZjyKju9oOWL6ZxuO1QaAkLvEALw_wcB_k_&OCID=AIDcmm4wmbigzm_SEM__k_Cj0KCQjwy46_BhDOARIsAIvmcwMB9M4YpNDv7BKM7--8vTv0myzFZG__IPIYXZjyKju9oOWL6ZxuO1QaAkLvEALw_wcB_k_&gad_source=1&gclid=Cj0KCQjwy46_BhDOARIsAIvmcwMB9M4YpNDv7BKM7--8vTv0myzFZG__IPIYXZjyKju9oOWL6ZxuO1QaAkLvEALw_wcB",
      },
      { name: "Red Hat", url: "https://www.redhat.com/en" },
    ],
  },
  {
    id: "devops",
    title: "DevOps Platform",
    description:
      "Automate software development with a complete DevOps toolchain, freeing developers for critical tasks.",
    image:
      "https://www.virtuosity-global.com/wp-content/uploads/2022/04/sam_devops.png",
    features: [
      "CI/CD pipeline implementation",
      "Infrastructure as Code (IaC)",
      "DevSecOps integration",
      "Automated testing and deployment",
    ],
    technologies: [
      { name: "GitLab", url: "https://about.gitlab.com/" },
      { name: "Jenkins", url: "https://www.jenkins.io/" },
      { name: "Terraform", url: "https://www.terraform.io/" },
      { name: "Ansible", url: "https://www.ansible.com/" },
      { name: "Jira", url: "https://www.atlassian.com/software/jira" },
      { name: "HashiCorp Vault", url: "https://www.vaultproject.io" },
      {
        name: "fluentbit",
        url: "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiFwNfus6eMAxWmUGwGHa-jA40QFnoECAwQAQ&url=https%3A%2F%2Ffluentbit.io%2F&usg=AOvVaw3aWkg1i4snaHauspDU1EXN&opi=89978449",
      },
      {
        name: "sonarqube",
        url: "https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwivtsv0s6eMAxVUpWYCHaMBKMwYABAAGgJzbQ&co=1&gclid=Cj0KCQjwy46_BhDOARIsAIvmcwMob5xZ5wO9YYO592qpssV5T_cR57Sx4DsudxFXcq6x4CvjLIlO2OIaAheyEALw_wcB&ohost=www.google.com&cid=CAESV-D2CTmHEJgvnXnFfDz8RbHpZZ-ts8_fXwKEueqwGEgSAoXB1rjAtUXR5TXQUIcjKORDcN5wd3WcBNbWXxboaLW7QtPgzWvvjq2BFBLTupNEaCevDVXZ7g&sig=AOD64_1-JY-4ggxIk50qVNZHBWqvNE_Mtg&q&adurl&ved=2ahUKEwir3cb0s6eMAxW6cWwGHbReANQQ0Qx6BAgJEAE",
      },
      {
        name: "Grafana",
        url: "https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwiB5539s6eMAxX_qGYCHdO8OcQYABAAGgJzbQ&co=1&gclid=Cj0KCQjwy46_BhDOARIsAIvmcwOJ3SL8wETOwUvbIj5PMfqvKEnElbWQ4QXrcnv5ft7r14RGMwWbLJQaAij2EALw_wcB&ohost=www.google.com&cid=CAESV-D2VA13fbC1GJzROYwjYyKzJ7pGykFc7N5dwbtPWGm5A7ZbVaTK9fyCiD9EAsAdvkl2-hNb9JNfZ0cRJh3HVYiOjiLHHsrRAjWZXtQO0Hv0AdHjSiXYAA&sig=AOD64_3AukaWF_WXnkShRR96vUitTVjbCw&q&adurl&ved=2ahUKEwj_8Zj9s6eMAxUVS2cHHTE9NlgQ0Qx6BAgJEAE",
      },
      {
        name: "Docker",
        url: "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiTpKCDtKeMAxW0RmwGHXJeI3MQFnoECAoQAQ&url=https%3A%2F%2Fwww.docker.com%2F&usg=AOvVaw3p9e1qPvdfjCrUwPYAhUlS&opi=89978449",
      },
      { name: "Harbor", url: "https://goharbor.io" },
      {
        name: "elasticsearch",
        url: "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiT9oWXtKeMAxXKTGwGHbF4EPkQFnoECBsQAQ&url=https%3A%2F%2Fwww.elastic.co%2Felasticsearch&usg=AOvVaw0Fo3tBwKdqGgqMlwCq4nOJ&opi=89978449",
      },
      {
        name: "kibana",
        url: "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi_ypGdtKeMAxUKXWwGHRUpBcYQFnoECA4QAQ&url=https%3A%2F%2Fwww.elastic.co%2Fkibana&usg=AOvVaw1GhD_mgvtW6eKQAhWuJR19&opi=89978449",
      },
    ],
  },
  {
    id: "microservices",
    title: "Cloud Native Applications",
    description:
      "Build modern applications with microservices for faster deployment and market adaptability.",
    image:
      "https://www.virtuosity-global.com/wp-content/uploads/2022/04/sam_microservices-1.png",
    features: [
      "Monolith to microservices migration",
      "API gateway implementation",
      "Service mesh architecture",
      "Event-driven design patterns",
    ],
    technologies: [
      {
        name: "Kafka",
        url: "https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwiSjLyptKeMAxUQFIMDHSfJHu0YABAAGgJzZg&co=1&gclid=Cj0KCQjwy46_BhDOARIsAIvmcwPMiJMNirH34f1dmlu7VWPcU_TRN6XyWucvLJFKvEgcE12b4NXDhBkaAujVEALw_wcB&ohost=www.google.com&cid=CAESV-D2l-8G6Zf1Vp-1s5919-wgRdMAlzicqsrsS0o8yDUBcTP9hjsrR7y4v5pow-C4t_N-PAtNV-b4QtSMLqOZgX3_Y-m5NH9Od44B7_ecJlM0WZn2mhZAZQ&sig=AOD64_38Ydjk1lk9LUsllBgSEKsKFfgRpg&q&adurl&ved=2ahUKEwjkvbaptKeMAxWAd2wGHULnCAIQ0Qx6BAgKEAE",
      },
      {
        name: "Redis",
        url: "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwilsomytKeMAxXHUGcHHZxkDrsQFnoECCQQAQ&url=https%3A%2F%2Fredis.io%2F&usg=AOvVaw0SPzotNaWJKDkbJZ8FW9ft&opi=89978449",
      },
      {
        name: "YugabyteDB",
        url: "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiMx7i4tKeMAxWXSWwGHef5EJQQFnoECAoQAQ&url=https%3A%2F%2Fwww.yugabyte.com%2F&usg=AOvVaw2jUgbKRN31qpa4G3wT97NH&opi=89978449",
      },
    ],
  },
  {
    id: "ai",
    title: "AI Driven Business Productivity",
    description:
      "Enhance productivity with secure, multi-lingual AI assistants and private AI deployments.",
    image: "https://i.ibb.co/nNxbn340/ai-tools-logo.png",
    features: [
      "Private AI deployments",
      "Multi-lingual AI assistants",
      "LLM fine-tuning and integration",
      "Workflow automation with AI",
    ],
    technologies: [
      { name: "ReN3.ai", url: "https://ren3.ai/" },
      { name: "OpenAI", url: "https://openai.com/" },
      { name: "DeepSeek", url: "https://www.deepseek.com/" },
      { name: "Claude", url: "https://www.anthropic.com/claude" },
      { name: "Mistral", url: "https://mistral.ai/" },
      { name: "Llama", url: "https://ai.meta.com/llama/" },
    ],
  },
];
