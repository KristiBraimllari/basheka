import { MetadataRoute } from 'next'
import { services, projects } from '@/lib/cms-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://steelworks.com'

  const routes = [
    '',
    '/about',
    '/services',
    '/portfolio',
    '/resources',
    '/quote',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/portfolio/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...routes, ...serviceRoutes, ...projectRoutes]
}

