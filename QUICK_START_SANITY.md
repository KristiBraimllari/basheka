# Quick Start: Sanity CMS Integration

## 🚀 5-Minute Setup

### Step 1: Install Dependencies
```bash
npm install @sanity/client @sanity/image-url
```

### Step 2: Install Sanity CLI & Create Project
```bash
npm install -g @sanity/cli
sanity login
sanity init
```

When prompted:
- Choose "Create new project"
- Project name: `steel-fabrication-cms`
- Dataset: `production` (default)
- Output path: `sanity` (or `./sanity`)
- Template: "Clean project with no predefined schemas"

### Step 3: Get Your Credentials

1. Go to [sanity.io/manage](https://www.sanity.io/manage)
2. Select your project
3. Copy your **Project ID** (e.g., `abc123xyz`)
4. Go to "API" → "Tokens" → Create new token with "Read" permissions
5. Copy the **API Token**

### Step 4: Create Environment Variables

Create `.env.local` in your project root:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token_here
```

### Step 5: Create Schemas

Copy the schema files from `SANITY_SETUP_GUIDE.md` into `sanity/schemas/`:
- `heroSection.ts`
- `service.ts`
- `project.ts`
- `resource.ts`
- `teamMember.ts`
- `timelineEvent.ts`
- `sustainabilityMetric.ts`

Update `sanity/schemas/index.ts` to export all schemas.

### Step 6: Start Sanity Studio

```bash
cd sanity
sanity dev
```

This opens Sanity Studio at `http://localhost:3333` where you can add content.

### Step 7: Test Your Integration

1. **Add content in Sanity Studio** (at `http://localhost:3333`)
2. **Start Next.js dev server** (in another terminal):
   ```bash
   npm run dev
   ```
3. **Verify content appears** on your website at `http://localhost:3000`

### Step 8: Deploy

**Deploy Sanity Studio:**
```bash
cd sanity
sanity deploy
```

**Deploy Next.js Website:**
1. Push to GitHub
2. Deploy to Vercel (recommended)
3. Add environment variables in Vercel dashboard
4. Deploy!

---

## ✅ Checklist

- [ ] Installed `@sanity/client` and `@sanity/image-url`
- [ ] Created Sanity project with `sanity init`
- [ ] Created `.env.local` with Project ID and API Token
- [ ] Created all schema files in `sanity/schemas/`
- [ ] Updated `sanity/schemas/index.ts`
- [ ] Started Sanity Studio and added content
- [ ] Tested website shows content from Sanity
- [ ] Deployed Sanity Studio
- [ ] Deployed Next.js website

---

## 📚 Full Documentation

See `SANITY_SETUP_GUIDE.md` for complete details, schema examples, and troubleshooting.

---

## 🆘 Troubleshooting

**"Cannot find module '@sanity/client'"**
- Run: `npm install @sanity/client @sanity/image-url`

**"Project ID not found"**
- Check `.env.local` has `NEXT_PUBLIC_SANITY_PROJECT_ID`
- Restart dev server after adding env vars

**Content not showing?**
- Make sure content is **published** in Sanity (not drafts)
- Check browser console for errors
- Verify API token has "Read" permissions

**Images not loading?**
- Images are automatically optimized by Sanity CDN
- Check that images are uploaded and published in Sanity

---

## 🎉 You're Done!

Your website is now connected to Sanity CMS. Add content through Sanity Studio and it will automatically appear on your website!

