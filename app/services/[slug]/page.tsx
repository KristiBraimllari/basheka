import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, Download, CheckCircle } from 'lucide-react'
import { getServiceBySlug, getServices } from '@/lib/api'
import ProcessSteps from '@/components/ProcessSteps'
import TechnicalSpecs from '@/components/TechnicalSpecs'
import BackButton from '@/components/BackButton'

interface ServicePageProps {
  params: {
    slug: string
  }
}

// Force dynamic rendering to always fetch fresh data from Sanity
export const dynamic = 'force-dynamic'
export const dynamicParams = true

export async function generateStaticParams() {
  const services = await getServices()
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const service = await getServiceBySlug(params.slug)

  if (!service) {
    notFound()
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-apple-gray-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${service.imageUrl})` }}
          />
        </div>
        <div className="relative z-10 max-w-[1024px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col items-start space-y-4 mb-6">
            <BackButton href="/services" label="Back to Services" variant="dark" />
            <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-white">
              {service.title}
            </div>
          </div>
          <h1 className="text-apple-title md:text-[80px] text-[56px] font-semibold mb-6 tracking-tight leading-[1.05]">
            {service.title}
          </h1>
          <p className="text-[21px] text-white/80 mb-8 max-w-3xl">
            {service.shortDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/quote"
              className="group px-8 py-4 bg-white text-apple-gray-700 rounded-full text-lg font-medium hover:bg-apple-gray-100 transition-all inline-flex items-center justify-center space-x-2"
            >
              <span>Request a Quote</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 text-white text-lg font-medium hover:text-white/80 transition-colors underline decoration-2 underline-offset-4"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1024px] mx-auto px-6 lg:px-12">
          <h2 className="text-5xl font-semibold text-apple-gray-700 mb-6 tracking-tight">
            Overview
          </h2>
          <div className="prose prose-lg max-w-none text-apple-gray-500">
            <p className="text-[19px] leading-relaxed">{service.fullDescription}</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-apple-gray-50">
        <div className="max-w-[1024px] mx-auto px-6 lg:px-12">
          <h2 className="text-5xl font-semibold text-apple-gray-700 mb-8 tracking-tight">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {service.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 bg-white p-6 rounded-2xl"
              >
                <CheckCircle className="text-apple-gray-700 flex-shrink-0 mt-1" size={24} />
                <span className="text-apple-gray-700 text-lg">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      {service.technicalSpecs && (
        <TechnicalSpecs specs={service.technicalSpecs} />
      )}

      {/* Process Steps */}
      {service.processSteps && service.processSteps.length > 0 && (
        <ProcessSteps steps={service.processSteps} />
      )}

      {/* CTA Section */}
      <section className="py-32 bg-apple-gray-700 text-white">
        <div className="max-w-[1024px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-apple-title md:text-[80px] text-[56px] font-semibold mb-8 tracking-tight leading-[1.05]">
            Ready to Get Started?
          </h2>
          <p className="text-[21px] text-white/80 mb-12">
            Contact us today to discuss your project requirements and receive a detailed quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="px-8 py-4 bg-white text-apple-gray-700 rounded-full text-lg font-medium hover:bg-apple-gray-100 transition-all"
            >
              Get a Quote
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 text-white text-lg font-medium hover:text-white/80 transition-colors underline decoration-2 underline-offset-4"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

