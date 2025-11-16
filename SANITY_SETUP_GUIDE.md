# Sanity CMS Integration Guide

Complete step-by-step guide to connect your website to Sanity CMS.

## Step 1: Install Sanity Dependencies

```bash
npm install @sanity/client @sanity/image-url
```

## Step 2: Create Sanity Project

1. **Install Sanity CLI globally** (if not already installed):
   ```bash
   npm install -g @sanity/cli
   ```

2. **Login to Sanity**:
   ```bash
   sanity login
   ```

3. **Initialize Sanity in your project**:
   ```bash
   sanity init
   ```
   
   When prompted:
   - Choose "Create new project"
   - Enter project name: `steel-fabrication-cms`
   - Use default dataset: `production`
   - Choose output path: `sanity` (or `./sanity`)
   - Choose template: `Clean project with no predefined schemas`

## Step 3: Configure Sanity Project

1. **Get your project credentials**:
   - Go to [sanity.io/manage](https://www.sanity.io/manage)
   - Select your project
   - Go to "API" → "Tokens"
   - Create a new token with "Read" permissions
   - Copy the token (you'll need it later)

2. **Get your Project ID**:
   - In the same project settings, you'll see your Project ID
   - Copy it (format: `abc123xyz`)

## Step 4: Create Sanity Schemas

Create the following schema files in `sanity/schemas/`:

### `sanity/schemas/heroSection.ts`
```typescript
export default {
  name: 'heroSection',
  title: 'Hero Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
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
}
```

### `sanity/schemas/service.ts`
```typescript
export default {
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'fullDescription',
      title: 'Full Description',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Service Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'technicalSpecs',
      title: 'Technical Specifications',
      type: 'object',
      fields: [
        {
          name: 'machineCapabilities',
          title: 'Machine Capabilities',
          type: 'string',
        },
        {
          name: 'materialThickness',
          title: 'Material Thickness',
          type: 'string',
        },
        {
          name: 'tolerances',
          title: 'Tolerances',
          type: 'string',
        },
      ],
    },
    {
      name: 'processSteps',
      title: 'Process Steps',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
            },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
            },
          ],
        },
      ],
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
}
```

### `sanity/schemas/project.ts`
```typescript
export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'images',
      title: 'Project Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    },
    {
      name: 'industry',
      title: 'Industry',
      type: 'string',
    },
    {
      name: 'services',
      title: 'Services Used',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'service' }],
        },
      ],
    },
    {
      name: 'materials',
      title: 'Materials',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'client',
      title: 'Client Name',
      type: 'string',
    },
    {
      name: 'testimonial',
      title: 'Testimonial',
      type: 'object',
      fields: [
        {
          name: 'quote',
          title: 'Quote',
          type: 'text',
        },
        {
          name: 'author',
          title: 'Author',
          type: 'string',
        },
        {
          name: 'role',
          title: 'Role',
          type: 'string',
        },
      ],
    },
    {
      name: 'completionDate',
      title: 'Completion Date',
      type: 'date',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'images.0',
    },
  },
}
```

### `sanity/schemas/resource.ts`
```typescript
export default {
  name: 'resource',
  title: 'Resource',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
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
    prepare({ title, type }: any) {
      return {
        title,
        subtitle: type,
      }
    },
  },
}
```

### `sanity/schemas/teamMember.ts`
```typescript
export default {
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'image',
    },
  },
}
```

### `sanity/schemas/timelineEvent.ts`
```typescript
export default {
  name: 'timelineEvent',
  title: 'Timeline Event',
  type: 'document',
  fields: [
    {
      name: 'year',
      title: 'Year',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'year',
    },
  },
}
```

### `sanity/schemas/sustainabilityMetric.ts`
```typescript
export default {
  name: 'sustainabilityMetric',
  title: 'Sustainability Metric',
  type: 'document',
  fields: [
    {
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'value',
      title: 'Value',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
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
}
```

### Update `sanity/schemas/index.ts`

Make sure all schemas are exported:

```typescript
import heroSection from './heroSection'
import service from './service'
import project from './project'
import resource from './resource'
import teamMember from './teamMember'
import timelineEvent from './timelineEvent'
import sustainabilityMetric from './sustainabilityMetric'

export const schemaTypes = [
  heroSection,
  service,
  project,
  resource,
  teamMember,
  timelineEvent,
  sustainabilityMetric,
]
```

## Step 5: Start Sanity Studio

Run the Sanity Studio locally to add content:

```bash
cd sanity
sanity dev
```

This will open Sanity Studio at `http://localhost:3333` where you can:
- Add your content
- Upload images and videos
- Manage all your content types

## Step 6: Update Environment Variables

Create `.env.local` in your project root:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token_here
```

**Important:** 
- Get Project ID from [sanity.io/manage](https://www.sanity.io/manage)
- Create API token with "Read" permissions
- Never commit `.env.local` to Git

## Step 7: Update API File

Replace `lib/api.ts` with the Sanity integration code (see next file).

## Step 8: Test Locally

1. **Start Sanity Studio** (in one terminal):
   ```bash
   cd sanity
   sanity dev
   ```

2. **Start Next.js dev server** (in another terminal):
   ```bash
   npm run dev
   ```

3. **Add content in Sanity Studio** and verify it appears on your website

## Step 9: Deploy

### Deploy Sanity Studio

```bash
cd sanity
sanity deploy
```

This gives you a URL like `your-project.sanity.studio` where you can manage content.

### Deploy Next.js Website

1. **Push to GitHub**
2. **Deploy to Vercel** (recommended):
   - Import your GitHub repo
   - Add environment variables:
     - `NEXT_PUBLIC_SANITY_PROJECT_ID`
     - `NEXT_PUBLIC_SANITY_DATASET`
     - `SANITY_API_TOKEN`
   - Deploy!

## Troubleshooting

### Images not showing?
- Make sure image URLs are properly formatted
- Check that images are published in Sanity
- Verify CORS settings in Sanity project settings

### API errors?
- Verify your Project ID and API token
- Check that content is published (not drafts)
- Ensure dataset name matches (usually "production")

### Can't access Sanity Studio?
- Make sure you're logged in: `sanity login`
- Check that you have access to the project
- Verify the project ID is correct

## Next Steps

1. Add content through Sanity Studio
2. Customize schemas as needed
3. Set up webhooks for automatic rebuilds (optional)
4. Configure image optimization
5. Set up preview mode for draft content (optional)

## Resources

- [Sanity Documentation](https://www.sanity.io/docs)
- [GROQ Query Language](https://www.sanity.io/docs/groq)
- [Sanity Image URLs](https://www.sanity.io/docs/image-urls)
- [Next.js + Sanity Guide](https://www.sanity.io/guides/nextjs)

