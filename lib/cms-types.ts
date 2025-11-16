// CMS Data Types for Headless CMS Integration
// Compatible with Contentful, Strapi, Sanity, or HubSpot CMS

export interface HeroSection {
  id: string
  title: string
  subtitle: string
  videoUrl?: string
  imageUrl?: string
  ctaPrimary: {
    label: string
    link: string
  }
  ctaSecondary?: {
    label: string
    link: string
  }
}

export interface Service {
  id: string
  slug: string
  title: string
  shortDescription: string
  fullDescription: string
  icon?: string
  imageUrl: string
  features: string[]
  technicalSpecs?: {
    machineCapabilities?: string
    materialThickness?: string
    tolerances?: string
  }
  processSteps?: {
    title: string
    description: string
    imageUrl?: string
  }[]
  caseStudies?: string[] // IDs of related case studies
}

export interface Project {
  id: string
  slug: string
  title: string
  description: string
  images: string[]
  industry: string
  services: string[] // Service IDs
  materials: string[]
  client?: string
  testimonial?: {
    quote: string
    author: string
    role: string
  }
  completionDate?: string
}

export interface CaseStudy {
  id: string
  slug: string
  title: string
  challenge: string
  solution: string
  results: string
  projectId: string
  testimonial?: {
    quote: string
    author: string
    role: string
  }
}

export interface Resource {
  id: string
  title: string
  type: 'brochure' | 'guide' | 'spec-sheet' | 'cad-file' | 'article'
  description: string
  downloadUrl?: string
  category: string
  tags: string[]
  publishedDate: string
}

export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  company: string
  imageUrl?: string
  projectId?: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  imageUrl?: string
}

export interface TimelineEvent {
  id: string
  year: string
  title: string
  description: string
  imageUrl?: string
}

export interface SustainabilityMetric {
  id: string
  label: string
  value: string
  unit: string
  description?: string
}

