import { defineType } from 'sanity'

export default defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'video',
      title: 'Hero Video',
      type: 'file',
      options: {
        accept: 'video/*',
      },
    },
    {
      name: 'ctaPrimary',
      title: 'Primary CTA',
      type: 'object',
      fields: [
        {
          name: 'label',
          title: 'Label',
          type: 'string',
        },
        {
          name: 'link',
          title: 'Link',
          type: 'string',
        },
      ],
    },
    {
      name: 'ctaSecondary',
      title: 'Secondary CTA',
      type: 'object',
      fields: [
        {
          name: 'label',
          title: 'Label',
          type: 'string',
        },
        {
          name: 'link',
          title: 'Link',
          type: 'string',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})

