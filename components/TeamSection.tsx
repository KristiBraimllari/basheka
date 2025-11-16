'use client'

import { motion } from 'framer-motion'
import type { TeamMember } from '@/lib/cms-types'

interface TeamSectionProps {
  members: TeamMember[]
}

export default function TeamSection({ members }: TeamSectionProps) {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1024px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-apple-title md:text-[72px] text-[48px] font-semibold text-apple-gray-700 mb-6 tracking-tight leading-[1.05]">
            Our Team
          </h2>
          <p className="text-[21px] text-apple-gray-500 max-w-2xl mx-auto">
            Meet the skilled professionals who bring expertise, dedication, and craftsmanship to every project.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
              whileHover={{ y: -8 }}
              className="bg-apple-gray-50 rounded-3xl overflow-hidden"
            >
              <div className="h-80 bg-apple-gray-200 relative overflow-hidden">
                {member.imageUrl ? (
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${member.imageUrl})` }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-apple-gray-300 to-apple-gray-400">
                    <span className="text-white text-5xl font-semibold">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-apple-gray-700 mb-1 tracking-tight">
                  {member.name}
                </h3>
                <p className="text-apple-gray-500 font-medium mb-4">{member.role}</p>
                <p className="text-apple-gray-500 leading-relaxed">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
