import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  __experimental_formPreviewTitle: false,
  fields: [
    defineField({
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
      description: 'The name of your company (appears in footer, navigation, etc.)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'Short tagline or description of your company',
    }),
    defineField({
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'object',
      fields: [
        defineField({
          name: 'phone',
          title: 'Phone Number',
          type: 'string',
        }),
        defineField({
          name: 'email',
          title: 'Email Address',
          type: 'string',
          validation: (Rule) => Rule.email(),
        }),
        defineField({
          name: 'address',
          title: 'Address',
          type: 'object',
          fields: [
            defineField({
              name: 'street',
              title: 'Street Address',
              type: 'string',
            }),
            defineField({
              name: 'city',
              title: 'City',
              type: 'string',
            }),
            defineField({
              name: 'state',
              title: 'State/Province',
              type: 'string',
            }),
            defineField({
              name: 'zipCode',
              title: 'ZIP/Postal Code',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'heroBadge',
      title: 'Hero Badge Text',
      type: 'string',
      description: 'Text that appears in the badge on the homepage hero (e.g., "Precision Fabrication Since 1995")',
    }),
    defineField({
      name: 'aboutHeroBadge',
      title: 'About Page Hero Badge',
      type: 'string',
      description: 'Badge text for the About page hero section',
    }),
    defineField({
      name: 'aboutHeroTitle',
      title: 'About Page Hero Title',
      type: 'string',
      description: 'Main title for the About page hero section',
    }),
    defineField({
      name: 'aboutHeroDescription',
      title: 'About Page Hero Description',
      type: 'text',
      description: 'Description text for the About page hero section',
    }),
    defineField({
      name: 'contactHeroTitle',
      title: 'Contact Page Hero Title',
      type: 'string',
      description: 'Main title for the Contact page hero section',
    }),
    defineField({
      name: 'contactHeroDescription',
      title: 'Contact Page Hero Description',
      type: 'text',
      description: 'Description text for the Contact page hero section',
    }),
    defineField({
      name: 'quoteHeroTitle',
      title: 'Quote Page Hero Title',
      type: 'string',
      description: 'Main title for the Quote page hero section',
    }),
    defineField({
      name: 'quoteHeroDescription',
      title: 'Quote Page Hero Description',
      type: 'text',
      description: 'Description text for the Quote page hero section',
    }),
  ],
  preview: {
    select: {
      title: 'companyName',
    },
  },
})

