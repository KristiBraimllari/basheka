import { defineType } from 'sanity'

export default defineType({
  name: 'resource',
  title: 'Resource',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'type',
      title: 'Resource Type',
      type: 'string',
      options: {
        list: [
          { title: 'Brochure', value: 'brochure' },
          { title: 'Guide', value: 'guide' },
          { title: 'Spec Sheet', value: 'spec-sheet' },
          { title: 'CAD File', value: 'cad-file' },
          { title: 'Article', value: 'article' },
        ],
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'downloadFile',
      title: 'Download File',
      type: 'file',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'publishedDate',
      title: 'Published Date',
      type: 'date',
    },
  ],
  preview: {
    select: {
      title: 'title',
      type: 'type',
    },
    prepare({ title, type }) {
      return {
        title,
        subtitle: type,
      }
    },
  },
})

