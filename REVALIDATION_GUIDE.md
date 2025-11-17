# Content Update Guide

After publishing content in Sanity, your website will automatically fetch the latest data on the next page load because all pages are now configured for dynamic rendering.

## Automatic Updates

All pages are set to `dynamic = 'force-dynamic'`, which means:
- ✅ Content is fetched fresh from Sanity on every request
- ✅ No need to rebuild or redeploy after publishing in Sanity
- ✅ Changes appear immediately when you refresh the page

## Manual Revalidation (Optional)

If you want to manually trigger cache revalidation (useful for Vercel deployments), you can use the revalidation API endpoint.

### Setup

1. Add a revalidation secret to your environment variables:

**Local (.env.local):**
```env
REVALIDATION_SECRET=your-secret-key-here
```

**Vercel (Project Settings → Environment Variables):**
```
REVALIDATION_SECRET=your-secret-key-here
```

### Usage

**Revalidate all pages:**
```bash
curl -X POST "https://your-domain.com/api/revalidate?secret=your-secret-key-here"
```

**Revalidate a specific page:**
```bash
curl -X POST "https://your-domain.com/api/revalidate?secret=your-secret-key-here&path=/services"
```

**Available paths:**
- `/` - Homepage
- `/services` - Services listing
- `/services/[slug]` - Individual service pages
- `/portfolio` - Portfolio listing
- `/portfolio/[slug]` - Individual project pages
- `/about` - About page
- `/resources` - Resources page

### Setting Up Sanity Webhook (Advanced)

For automatic revalidation when content is published in Sanity:

1. Go to your Sanity project settings
2. Navigate to API → Webhooks
3. Create a new webhook:
   - **Name**: Vercel Revalidation
   - **URL**: `https://your-domain.com/api/revalidate?secret=your-secret-key-here`
   - **Dataset**: production
   - **Trigger on**: Create, Update, Delete
   - **Filter**: Leave empty to trigger on all content types
   - **HTTP method**: POST

## Troubleshooting

**Content not updating?**
1. Make sure you **published** the content in Sanity (not just saved as draft)
2. Check browser console for `[Sanity]` log messages
3. Hard refresh the page (Cmd+Shift+R or Ctrl+Shift+R)
4. Verify environment variables are set correctly

**Revalidation endpoint not working?**
1. Check that `REVALIDATION_SECRET` is set in environment variables
2. Verify the secret in the URL matches your environment variable
3. Check Vercel function logs for errors

