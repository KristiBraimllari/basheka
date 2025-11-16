# Deployment Guide

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git (for version control)

## Local Development Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Environment Variables

Create a `.env.local` file in the root directory for environment-specific variables:

```env
# CMS Configuration (when integrating with headless CMS)
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_access_token

# Or for HubSpot CMS
HUBSPOT_API_KEY=your_api_key

# Or for Strapi
STRAPI_API_URL=https://your-strapi-instance.com/api

# Analytics (optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

## CMS Integration

The website is designed to work with headless CMS solutions. To integrate:

1. **Choose your CMS** (Contentful, Strapi, Sanity, HubSpot CMS, etc.)
2. **Set up content models** based on the types defined in `/lib/cms-types.ts`
3. **Update API functions** in `/lib/api.ts` with your CMS API calls
4. **Replace mock data** in `/lib/cms-data.ts` with actual API calls

### Example: Contentful Integration

```typescript
// lib/api.ts
import { createClient } from 'contentful'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
})

export async function getServices(): Promise<Service[]> {
  const entries = await client.getEntries({ content_type: 'service' })
  return entries.items.map((entry: any) => ({
    id: entry.sys.id,
    slug: entry.fields.slug,
    title: entry.fields.title,
    // ... map other fields
  }))
}
```

## Adding Media Assets

1. **Images**: Place images in `/public/images/` directory
   - Recommended formats: WebP, AVIF for better performance
   - Use Next.js Image component for optimization

2. **Videos**: Place videos in `/public/videos/` directory
   - Recommended: MP4 format with H.264 codec
   - Optimize videos for web (compress, use appropriate resolution)

3. **Documents**: Place downloadable resources in `/public/resources/` directory
   - PDFs, CAD files, spec sheets, etc.

## Building for Production

1. **Build the Application**
   ```bash
   npm run build
   ```

2. **Test Production Build Locally**
   ```bash
   npm start
   ```

## Deployment Options

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Configure environment variables
4. Deploy automatically on every push

### Netlify

1. Push your code to GitHub
2. Connect repository in Netlify
3. Build command: `npm run build`
4. Publish directory: `.next`
5. Configure environment variables

### Self-Hosted

1. Build the application: `npm run build`
2. Start the server: `npm start`
3. Use a process manager like PM2
4. Set up reverse proxy (nginx)
5. Configure SSL certificate

## Performance Optimization

- Images are automatically optimized by Next.js
- Videos should be compressed and optimized before upload
- Enable CDN for static assets
- Use lazy loading for images and videos
- Implement caching strategies

## SEO Configuration

- Update `app/sitemap.ts` with your actual domain
- Update `app/robots.ts` with your actual domain
- Configure metadata in each page's metadata export
- Add structured data (JSON-LD) if needed

## Analytics Integration

Add Google Analytics or other analytics tools:

```typescript
// app/layout.tsx
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
```

## Form Submission

Currently, forms log to console. To enable actual form submissions:

1. **Set up a backend API** or use a service like:
   - Formspree
   - SendGrid
   - AWS SES
   - Your own API endpoint

2. **Update form handlers** in:
   - `/components/QuoteForm.tsx`
   - `/app/contact/page.tsx`
   - `/lib/api.ts`

## Live Chat Integration

To add live chat functionality:

1. Choose a service (Intercom, Drift, HubSpot Chat, etc.)
2. Add the chat widget script to `app/layout.tsx`
3. Configure according to the service's documentation

## Maintenance

- Regularly update dependencies: `npm update`
- Monitor performance with analytics
- Update content through your CMS
- Review and update SEO metadata periodically
- Test forms and interactive features regularly

