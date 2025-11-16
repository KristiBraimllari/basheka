import { defineType } from 'sanity'

export default defineType({
  name: 'sustainabilityMetric',
  title: 'Sustainability Metric',
  type: 'document',
  fields: [
    {
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'value',
      title: 'Value',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'unit',
      title: 'Unit',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
    },
  ],
  preview: {
    select: {
      title: 'label',
      subtitle: 'value',
    },
  },
})

