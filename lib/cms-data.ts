// Mock CMS Data - Replace with actual API calls to your headless CMS
import type {
  HeroSection,
  Service,
  Project,
  Resource,
  Testimonial,
  TeamMember,
  TimelineEvent,
  SustainabilityMetric,
} from './cms-types'

export const heroData: HeroSection = {
  id: '1',
  title: 'Transforming Steel Into Structures',
  subtitle: 'Precision fabrication, laser cutting, and end-to-end project delivery for heavy construction',
  videoUrl: '/videos/hero-fabrication.mp4',
  imageUrl: '/images/hero-fabrication.jpg',
  ctaPrimary: {
    label: 'Get a Quote',
    link: '/quote',
  },
  ctaSecondary: {
    label: 'View Portfolio',
    link: '/portfolio',
  },
}

export const services: Service[] = [
  {
    id: '1',
    slug: 'laser-cutting',
    title: 'Laser Cutting',
    shortDescription: 'Precision laser cutting with state-of-the-art equipment for complex geometries',
    fullDescription: 'Our advanced laser cutting services deliver exceptional precision and quality for a wide range of materials and thicknesses. With cutting-edge fiber laser technology, we can handle complex geometries and tight tolerances.',
    icon: 'laser',
    imageUrl: '/images/services/laser-cutting.jpg',
    features: [
      'Fiber laser technology',
      'Up to 1" material thickness',
      '±0.005" tolerance',
      'Complex geometries',
      'Fast turnaround',
    ],
    technicalSpecs: {
      machineCapabilities: '12kW Fiber Laser',
      materialThickness: 'Up to 1" (25mm)',
      tolerances: '±0.005" (±0.13mm)',
    },
    processSteps: [
      {
        title: 'Material Selection',
        description: 'Choose the right grade and thickness for your project',
        imageUrl: '/images/process/material-selection.jpg',
      },
      {
        title: 'CAD Programming',
        description: 'Precise programming ensures optimal cutting paths',
        imageUrl: '/images/process/cad-programming.jpg',
      },
      {
        title: 'Laser Cutting',
        description: 'High-speed cutting with minimal heat-affected zones',
        imageUrl: '/images/process/laser-cutting.jpg',
      },
      {
        title: 'Quality Inspection',
        description: 'Rigorous quality checks ensure perfect results',
        imageUrl: '/images/process/quality-inspection.jpg',
      },
    ],
  },
  {
    id: '2',
    slug: 'structural-fabrication',
    title: 'Heavy Structural Fabrication',
    shortDescription: 'Large-scale structural steel fabrication for bridges, buildings, and industrial facilities',
    fullDescription: 'We specialize in heavy structural fabrication for major construction projects. From bridges to high-rise buildings, our team delivers complex structural components with precision and reliability.',
    icon: 'structure',
    imageUrl: '/images/services/structural-fabrication.jpg',
    features: [
      'Large-scale projects',
      'Custom structural components',
      'Welding and assembly',
      'Quality certifications',
      'Project management',
    ],
  },
  {
    id: '3',
    slug: 'metal-finishing',
    title: 'Metal Finishing',
    shortDescription: 'Professional surface treatments and coatings for durability and aesthetics',
    fullDescription: 'Complete metal finishing services including sandblasting, powder coating, and protective coatings to ensure longevity and visual appeal.',
    icon: 'finishing',
    imageUrl: '/images/services/metal-finishing.jpg',
    features: [
      'Sandblasting',
      'Powder coating',
      'Protective coatings',
      'Custom colors',
      'Quality assurance',
    ],
  },
  {
    id: '4',
    slug: 'project-management',
    title: 'End-to-End Project Management',
    shortDescription: 'Complete project delivery from design consultation to final installation',
    fullDescription: 'Our experienced project managers coordinate every aspect of your project, ensuring on-time delivery and seamless execution from concept to completion.',
    icon: 'management',
    imageUrl: '/images/services/project-management.jpg',
    features: [
      'Design consultation',
      'Timeline management',
      'Quality control',
      'Installation support',
      'Ongoing maintenance',
    ],
  },
]

export const projects: Project[] = [
  {
    id: '1',
    slug: 'downtown-bridge-renovation',
    title: 'Downtown Bridge Renovation',
    description: 'Complete structural steel replacement for a historic downtown bridge, maintaining architectural integrity while meeting modern safety standards.',
    images: ['/images/projects/bridge-1.jpg', '/images/projects/bridge-2.jpg'],
    industry: 'Infrastructure',
    services: ['1', '2'],
    materials: ['A36 Steel', 'Weathering Steel'],
    client: 'City Department of Transportation',
    testimonial: {
      quote: 'Exceptional work on a complex project. They delivered on time and exceeded our quality expectations.',
      author: 'John Smith',
      role: 'Project Manager',
    },
    completionDate: '2024-03-15',
  },
  {
    id: '2',
    slug: 'industrial-facility-expansion',
    title: 'Industrial Facility Expansion',
    description: 'Fabrication and installation of structural steel for a 50,000 sq ft manufacturing facility expansion.',
    images: ['/images/projects/facility-1.jpg'],
    industry: 'Industrial',
    services: ['2', '4'],
    materials: ['A992 Steel'],
    completionDate: '2024-01-20',
  },
  {
    id: '3',
    slug: 'custom-architectural-elements',
    title: 'Custom Architectural Elements',
    description: 'Precision laser-cut decorative panels and custom metalwork for a modern office building facade.',
    images: ['/images/projects/architectural-1.jpg'],
    industry: 'Commercial',
    services: ['1', '3'],
    materials: ['Stainless Steel', 'Corten Steel'],
    completionDate: '2024-02-10',
  },
]

export const resources: Resource[] = [
  {
    id: '1',
    title: 'Steel Grade Reference Guide',
    type: 'guide',
    description: 'Comprehensive guide to steel grades and their applications',
    downloadUrl: '/resources/steel-grade-guide.pdf',
    category: 'Technical',
    tags: ['steel', 'materials', 'specifications'],
    publishedDate: '2024-01-15',
  },
  {
    id: '2',
    title: 'Laser Cutting Capabilities Sheet',
    type: 'spec-sheet',
    description: 'Detailed specifications for our laser cutting services',
    downloadUrl: '/resources/laser-cutting-specs.pdf',
    category: 'Services',
    tags: ['laser-cutting', 'specifications'],
    publishedDate: '2024-01-20',
  },
  {
    id: '3',
    title: 'Advantages of Laser Cutting vs Plasma Cutting',
    type: 'article',
    description: 'Learn about the benefits of laser cutting technology',
    downloadUrl: '/resources/laser-vs-plasma.pdf',
    category: 'Education',
    tags: ['laser-cutting', 'comparison'],
    publishedDate: '2024-02-01',
  },
]

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: 'Outstanding quality and professionalism. They transformed our vision into reality.',
    author: 'Sarah Johnson',
    role: 'Architect',
    company: 'Design Studio Inc.',
  },
  {
    id: '2',
    quote: 'The precision and attention to detail exceeded our expectations. Highly recommended.',
    author: 'Michael Chen',
    role: 'Engineering Manager',
    company: 'Construction Corp',
  },
]

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Robert Martinez',
    role: 'Founder & CEO',
    bio: 'With over 30 years of experience in steel fabrication, Robert leads our team with a commitment to excellence and innovation.',
    imageUrl: '/images/team/robert.jpg',
  },
  {
    id: '2',
    name: 'Jennifer Lee',
    role: 'Operations Manager',
    bio: 'Jennifer ensures smooth operations and quality control across all projects, bringing 15 years of industry expertise.',
    imageUrl: '/images/team/jennifer.jpg',
  },
]

export const timelineEvents: TimelineEvent[] = [
  {
    id: '1',
    year: '1995',
    title: 'Company Founded',
    description: 'Started as a small fabrication shop with a vision for excellence',
  },
  {
    id: '2',
    year: '2005',
    title: 'Laser Cutting Expansion',
    description: 'Invested in first fiber laser cutting system',
  },
  {
    id: '3',
    year: '2015',
    title: 'Major Facility Expansion',
    description: 'Expanded to 100,000 sq ft facility to serve larger projects',
  },
  {
    id: '4',
    year: '2024',
    title: 'Sustainability Initiative',
    description: 'Achieved carbon-neutral operations through renewable energy',
  },
]

export const sustainabilityMetrics: SustainabilityMetric[] = [
  {
    id: '1',
    label: 'Recycled Material',
    value: '95',
    unit: '%',
    description: 'Of all steel processed is recycled',
  },
  {
    id: '2',
    label: 'Carbon Reduction',
    value: '40',
    unit: '%',
    description: 'Reduction in carbon footprint since 2020',
  },
  {
    id: '3',
    label: 'Renewable Energy',
    value: '100',
    unit: '%',
    description: 'Of facility powered by renewable sources',
  },
]

