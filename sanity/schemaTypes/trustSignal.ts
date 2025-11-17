import { defineField, defineType } from 'sanity'
import { Award, Shield, Users, Calendar } from 'lucide-react'

export default defineType({
  name: 'trustSignal',
  title: 'Trust Signal',
  type: 'document',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      description: 'The label text (e.g., "Certified Quality", "Safety Standards")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'value',
      title: 'Value',
      type: 'string',
      description: 'The main value to display (e.g., "ISO 9001", "500+", "30+")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      description: 'Icon name (award, shield, users, calendar)',
      options: {
        list: [
          { title: 'Award', value: 'award' },
          { title: 'Shield', value: 'shield' },
          { title: 'Users', value: 'users' },
          { title: 'Calendar', value: 'calendar' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Display order (lower numbers appear first)',
      validation: (Rule) => Rule.required().min(0),
    }),
  ],
  preview: {
    select: {
      title: 'label',
      subtitle: 'value',
    },
  },
  orderings: [
    {
      title: 'Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
})

