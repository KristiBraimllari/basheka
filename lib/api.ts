// Sanity CMS API Integration
import { client, getImageUrl, getFileUrl } from './sanity-client'
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

// GROQ Query for Hero Section
const heroQuery = `*[_type == "heroSection"][0]{
  _id,
  title,
  subtitle,
  image,
  video,
  ctaPrimary,
  ctaSecondary
}`

// GROQ Query for Services
const servicesQuery = `*[_type == "service"] | order(order asc){
  _id,
  title,
  slug,
  shortDescription,
  fullDescription,
  image,
  features,
  technicalSpecs,
  processSteps[]{
    title,
    description,
    image
  },
  order
}`

// GROQ Query for Single Service
const serviceBySlugQuery = `*[_type == "service" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  shortDescription,
  fullDescription,
  image,
  features,
  technicalSpecs,
  processSteps[]{
    title,
    description,
    image
  }
}`

// GROQ Query for Projects
const projectsQuery = `*[_type == "project"] | order(completionDate desc){
  _id,
  title,
  "slug": slug.current,
  description,
  images[],
  industry,
  "services": services[]->_id,
  materials,
  client,
  testimonial,
  completionDate
}`

// GROQ Query for Single Project
const projectBySlugQuery = `*[_type == "project" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  description,
  images[],
  industry,
  "services": services[]->_id,
  materials,
  client,
  testimonial,
  completionDate
}`

// GROQ Query for Resources
const resourcesQuery = `*[_type == "resource"] | order(publishedDate desc){
  _id,
  title,
  type,
  description,
  downloadFile,
  category,
  tags,
  publishedDate
}`

// GROQ Query for Team Members
const teamMembersQuery = `*[_type == "teamMember"] | order(order asc){
  _id,
  name,
  role,
  bio,
  image,
  order
}`

// GROQ Query for Timeline Events
const timelineEventsQuery = `*[_type == "timelineEvent"] | order(year asc){
  _id,
  year,
  title,
  description,
  image
}`

// GROQ Query for Sustainability Metrics
const sustainabilityMetricsQuery = `*[_type == "sustainabilityMetric"] | order(order asc){
  _id,
  label,
  value,
  unit,
  description,
  order
}`

// Transform Sanity data to HeroSection
function transformHeroSection(data: any): HeroSection {
  if (!data) {
    // Fallback to mock data
    const { heroData } = require('./cms-data')
    return heroData
  }

  return {
    id: data._id,
    title: data.title || '',
    subtitle: data.subtitle || '',
    videoUrl: data.video ? getFileUrl(data.video) : undefined,
    imageUrl: getImageUrl(data.image),
    ctaPrimary: {
      label: data.ctaPrimary?.label || 'Get Started',
      link: data.ctaPrimary?.link || '/quote',
    },
    ctaSecondary: data.ctaSecondary?.label
      ? {
          label: data.ctaSecondary.label,
          link: data.ctaSecondary.link || '/portfolio',
        }
      : undefined,
  }
}

// Transform Sanity data to Service
function transformService(data: any): Service {
  return {
    id: data._id,
    slug: data.slug?.current || data.slug || '',
    title: data.title || '',
    shortDescription: data.shortDescription || '',
    fullDescription: data.fullDescription || data.shortDescription || '',
    icon: data.icon,
    imageUrl: getImageUrl(data.image) || '/images/placeholder.jpg',
    features: data.features || [],
    technicalSpecs: data.technicalSpecs
      ? {
          machineCapabilities: data.technicalSpecs.machineCapabilities,
          materialThickness: data.technicalSpecs.materialThickness,
          tolerances: data.technicalSpecs.tolerances,
        }
      : undefined,
    processSteps: data.processSteps?.map((step: any) => ({
      title: step.title,
      description: step.description,
      imageUrl: getImageUrl(step.image),
    })),
  }
}

// Transform Sanity data to Project
function transformProject(data: any): Project {
  return {
    id: data._id,
    slug: data.slug || '',
    title: data.title || '',
    description: data.description || '',
    images: data.images?.map((img: any) => getImageUrl(img)).filter(Boolean) || [],
    industry: data.industry || '',
    services: data.services || [],
    materials: data.materials || [],
    client: data.client,
    testimonial: data.testimonial
      ? {
          quote: data.testimonial.quote,
          author: data.testimonial.author,
          role: data.testimonial.role,
        }
      : undefined,
    completionDate: data.completionDate,
  }
}

// API Functions
export async function getHeroSection(): Promise<HeroSection> {
  try {
    // Check if Sanity is configured
    if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || !client) {
      const { heroData } = await import('./cms-data')
      return heroData
    }

    const data = await client.fetch(heroQuery)
    return transformHeroSection(data)
  } catch (error) {
    console.error('Error fetching hero section from Sanity:', error)
    // Fallback to mock data
    const { heroData } = await import('./cms-data')
    return heroData
  }
}

export async function getServices(): Promise<Service[]> {
  try {
    if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || !client) {
      const { services } = await import('./cms-data')
      return services
    }

    const data = await client.fetch(servicesQuery)
    return data.map(transformService)
  } catch (error) {
    console.error('Error fetching services from Sanity:', error)
    // Fallback to mock data
    const { services } = await import('./cms-data')
    return services
  }
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  try {
    if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || !client) {
      const { services } = await import('./cms-data')
      return services.find((s) => s.slug === slug) || null
    }

    const data = await client.fetch(serviceBySlugQuery, { slug })
    if (!data) return null
    return transformService(data)
  } catch (error) {
    console.error('Error fetching service from Sanity:', error)
    return null
  }
}

export async function getProjects(): Promise<Project[]> {
  try {
    if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || !client) {
      const { projects } = await import('./cms-data')
      return projects
    }

    const data = await client.fetch(projectsQuery)
    return data.map(transformProject)
  } catch (error) {
    console.error('Error fetching projects from Sanity:', error)
    // Fallback to mock data
    const { projects } = await import('./cms-data')
    return projects
  }
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || !client) {
      const { projects } = await import('./cms-data')
      return projects.find((p) => p.slug === slug) || null
    }

    const data = await client.fetch(projectBySlugQuery, { slug })
    if (!data) return null
    return transformProject(data)
  } catch (error) {
    console.error('Error fetching project from Sanity:', error)
    return null
  }
}

export async function getResources(): Promise<Resource[]> {
  try {
    if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || !client) {
      const { resources } = await import('./cms-data')
      return resources
    }

    const data = await client.fetch(resourcesQuery)
    return data.map((item: any) => ({
      id: item._id,
      title: item.title,
      type: item.type,
      description: item.description,
      downloadUrl: item.downloadFile ? getFileUrl(item.downloadFile) : undefined,
      category: item.category,
      tags: item.tags || [],
      publishedDate: item.publishedDate,
    }))
  } catch (error) {
    console.error('Error fetching resources from Sanity:', error)
    const { resources } = await import('./cms-data')
    return resources
  }
}

export async function getTestimonials(): Promise<Testimonial[]> {
  // Testimonials are embedded in projects, but you can create a separate content type if needed
  const { testimonials } = await import('./cms-data')
  return testimonials
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  try {
    if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || !client) {
      const { teamMembers } = await import('./cms-data')
      return teamMembers
    }

    const data = await client.fetch(teamMembersQuery)
    return data.map((item: any) => ({
      id: item._id,
      name: item.name,
      role: item.role,
      bio: item.bio,
      imageUrl: getImageUrl(item.image),
    }))
  } catch (error) {
    console.error('Error fetching team members from Sanity:', error)
    const { teamMembers } = await import('./cms-data')
    return teamMembers
  }
}

export async function getTimelineEvents(): Promise<TimelineEvent[]> {
  try {
    if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || !client) {
      const { timelineEvents } = await import('./cms-data')
      return timelineEvents
    }

    const data = await client.fetch(timelineEventsQuery)
    return data.map((item: any) => ({
      id: item._id,
      year: item.year,
      title: item.title,
      description: item.description,
      imageUrl: getImageUrl(item.image),
    }))
  } catch (error) {
    console.error('Error fetching timeline events from Sanity:', error)
    const { timelineEvents } = await import('./cms-data')
    return timelineEvents
  }
}

export async function getSustainabilityMetrics(): Promise<SustainabilityMetric[]> {
  try {
    if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || !client) {
      const { sustainabilityMetrics } = await import('./cms-data')
      return sustainabilityMetrics
    }

    const data = await client.fetch(sustainabilityMetricsQuery)
    return data.map((item: any) => ({
      id: item._id,
      label: item.label,
      value: item.value,
      unit: item.unit,
      description: item.description,
    }))
  } catch (error) {
    console.error('Error fetching sustainability metrics from Sanity:', error)
    const { sustainabilityMetrics } = await import('./cms-data')
    return sustainabilityMetrics
  }
}

// Helper function to submit quote form data
export async function submitQuoteForm(data: Record<string, string>): Promise<boolean> {
  // You can integrate with Sanity to store form submissions
  // Or use a service like Formspree, SendGrid, etc.
  console.log('Quote form submitted:', data)
  return true
}

// Helper function to submit contact form data
export async function submitContactForm(data: Record<string, string>): Promise<boolean> {
  console.log('Contact form submitted:', data)
  return true
}
