/**
 * Dummy Domain/Industry Pages Data
 */

export interface DomainPage {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  icon?: string;
  published: boolean;
  features: string[];
  testimonials?: {
    name: string;
    company: string;
    quote: string;
  }[];
}

export const DUMMY_DOMAINS: DomainPage[] = [
  {
    id: 'domain-1',
    slug: 'healthcare',
    title: 'Healthcare Solutions',
    description: 'HIPAA-compliant development teams for healthcare applications',
    content: 'Our healthcare-specialized teams understand the unique challenges of building medical software. We ensure HIPAA compliance, data security, and patient privacy in every project.',
    icon: '🏥',
    published: true,
    features: [
      'HIPAA-Compliant Development',
      'Electronic Health Records (EHR)',
      'Telemedicine Platforms',
      'Patient Portal Development',
      'Medical Device Integration',
      'Healthcare Analytics',
    ],
    testimonials: [
      {
        name: 'Dr. Sarah Johnson',
        company: 'MedTech Innovations',
        quote: 'The team delivered a secure, compliant patient portal that exceeded our expectations.',
      },
    ],
  },
  {
    id: 'domain-2',
    slug: 'fintech',
    title: 'Fintech Development',
    description: 'Secure financial technology solutions with regulatory compliance',
    content: 'Build secure, scalable fintech applications with our experienced development teams. We specialize in payment processing, banking apps, and financial analytics.',
    icon: '💰',
    published: true,
    features: [
      'Payment Gateway Integration',
      'Banking Applications',
      'Cryptocurrency Platforms',
      'Financial Analytics',
      'Regulatory Compliance (PCI-DSS)',
      'Fraud Detection Systems',
    ],
    testimonials: [
      {
        name: 'Michael Chen',
        company: 'Digital Bank Co',
        quote: 'Their expertise in fintech helped us launch our mobile banking app ahead of schedule.',
      },
    ],
  },
  {
    id: 'domain-3',
    slug: 'ecommerce',
    title: 'E-commerce Solutions',
    description: 'Build scalable online stores and marketplaces',
    content: 'Create powerful e-commerce experiences with our specialized teams. From small shops to large marketplaces, we handle it all.',
    icon: '🛒',
    published: true,
    features: [
      'Custom E-commerce Platforms',
      'Marketplace Development',
      'Payment Processing',
      'Inventory Management',
      'Multi-vendor Support',
      'Mobile Commerce',
    ],
  },
  {
    id: 'domain-4',
    slug: 'saas',
    title: 'SaaS Products',
    description: 'Multi-tenant SaaS application development',
    content: 'Launch your SaaS product with our experienced teams. We build scalable, multi-tenant applications that grow with your business.',
    icon: '☁️',
    published: true,
    features: [
      'Multi-tenant Architecture',
      'Subscription Management',
      'API Development',
      'Third-party Integrations',
      'Analytics & Reporting',
      'Cloud Infrastructure',
    ],
  },
];

export const getDomainBySlug = (slug: string): DomainPage | undefined => {
  return DUMMY_DOMAINS.find(d => d.slug === slug && d.published);
};

export const getAllDomains = (): DomainPage[] => {
  return DUMMY_DOMAINS.filter(d => d.published);
};

