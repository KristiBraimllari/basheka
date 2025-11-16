import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Calendar, Building, Wrench } from 'lucide-react'
import { projects, services } from '@/lib/cms-data'
import Image from 'next/image'
import BackButton from '@/components/BackButton'

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  const projectServices = services.filter((s) => project.services.includes(s.id))

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-apple-gray-700 text-white relative">
        <div className="max-w-[1024px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col items-start space-y-4 mb-6">
            <BackButton href="/portfolio" label="Back to Portfolio" variant="dark" />
            <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-white">
              {project.industry}
            </div>
          </div>
          <h1 className="text-apple-title md:text-[80px] text-[56px] font-semibold mb-6 tracking-tight leading-[1.05]">
            {project.title}
          </h1>
          <p className="text-[21px] text-white/80 max-w-3xl">
            {project.description}
          </p>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 bg-white">
        <div className="max-w-[1024px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex items-start space-x-3">
              <Building className="text-apple-gray-700 flex-shrink-0 mt-1" size={24} />
              <div>
                <div className="text-sm text-apple-gray-500">Industry</div>
                <div className="font-semibold text-apple-gray-700">{project.industry}</div>
              </div>
            </div>
            {project.completionDate && (
              <div className="flex items-start space-x-3">
                <Calendar className="text-apple-gray-700 flex-shrink-0 mt-1" size={24} />
                <div>
                  <div className="text-sm text-apple-gray-500">Completed</div>
                  <div className="font-semibold text-apple-gray-700">
                    {new Date(project.completionDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                    })}
                  </div>
                </div>
              </div>
            )}
            {project.client && (
              <div className="flex items-start space-x-3">
                <Wrench className="text-apple-gray-700 flex-shrink-0 mt-1" size={24} />
                <div>
                  <div className="text-sm text-apple-gray-500">Client</div>
                  <div className="font-semibold text-apple-gray-700">{project.client}</div>
                </div>
              </div>
            )}
          </div>

          {/* Images Gallery */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {project.images.map((image, index) => (
              <div
                key={index}
                className="relative h-96 rounded-3xl overflow-hidden bg-apple-gray-200"
              >
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${image})` }}
                />
              </div>
            ))}
          </div>

          {/* Services Used */}
          <div className="mb-12">
            <h2 className="text-5xl font-semibold text-apple-gray-700 mb-4 tracking-tight">
              Services Provided
            </h2>
            <div className="flex flex-wrap gap-3">
              {projectServices.map((service) => (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  className="bg-apple-gray-50 text-apple-gray-700 px-4 py-2 rounded-full hover:bg-apple-gray-100 transition-colors font-medium border border-apple-gray-200"
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Materials */}
          <div className="mb-12">
            <h2 className="text-5xl font-semibold text-apple-gray-700 mb-4 tracking-tight">
              Materials Used
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.materials.map((material, index) => (
                <span
                  key={index}
                  className="bg-apple-gray-50 text-apple-gray-700 px-4 py-2 rounded-full font-medium border border-apple-gray-200"
                >
                  {material}
                </span>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          {project.testimonial && (
            <div className="bg-apple-gray-50 rounded-3xl p-8 border-l-4 border-apple-gray-700">
              <p className="text-[21px] text-apple-gray-700 italic mb-4 leading-relaxed">
                &quot;{project.testimonial.quote}&quot;
              </p>
              <div>
                <div className="font-semibold text-apple-gray-700">
                  {project.testimonial.author}
                </div>
                <div className="text-apple-gray-500">{project.testimonial.role}</div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-apple-gray-700 text-white">
        <div className="max-w-[1024px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-apple-title md:text-[80px] text-[56px] font-semibold mb-8 tracking-tight leading-[1.05]">
            Ready to Start Your Project?
          </h2>
          <p className="text-[21px] text-white/80 mb-12">
            Let&apos;s discuss how we can bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="px-8 py-4 bg-white text-apple-gray-700 rounded-full text-lg font-medium hover:bg-apple-gray-100 transition-all"
            >
              Our Services
            </Link>
            <Link
              href="/quote"
              className="px-8 py-4 text-white text-lg font-medium hover:text-white/80 transition-colors underline decoration-2 underline-offset-4"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

