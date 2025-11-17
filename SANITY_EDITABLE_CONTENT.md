# Sanity CMS - Editable Content Guide

This document outlines all content that can be edited through Sanity CMS. All content is now connected to Sanity and will be reflected on your Vercel deployment.

## Content Types Available in Sanity

### 1. Site Settings (`siteSettings`)
**Location in Sanity:** Site Settings (single document)

**Editable Fields:**
- Company Name
- Tagline
- Contact Information:
  - Phone Number
  - Email Address
  - Address (Street, City, State, ZIP Code)
- Hero Badge Text (homepage hero section badge)
- About Page Content:
  - Hero Badge
  - Hero Title
  - Hero Description
- Contact Page Content:
  - Hero Title
  - Hero Description
- Quote Page Content:
  - Hero Title
  - Hero Description

**Where it appears:**
- Footer (company name, tagline, contact info)
- Homepage hero badge
- About page hero section
- Contact page hero section
- Quote page hero section

---

### 2. Hero Section (`heroSection`)
**Location in Sanity:** Hero Section (single document)

**Editable Fields:**
- Title
- Subtitle
- Image
- Video (optional, overrides image)
- Primary CTA (Button Label & Link)
- Secondary CTA (Button Label & Link)

**Where it appears:**
- Homepage hero section

---

### 3. Services (`service`)
**Location in Sanity:** Services (multiple documents)

**Editable Fields:**
- Title
- Slug (URL-friendly identifier)
- Short Description
- Full Description
- Image
- Features (array of strings)
- Technical Specifications:
  - Machine Capabilities
  - Material Thickness
  - Tolerances
- Process Steps (array):
  - Title
  - Description
  - Image
- Order (display order)

**Where it appears:**
- Homepage services section
- Services listing page (`/services`)
- Individual service detail pages (`/services/[slug]`)

---

### 4. Projects (`project`)
**Location in Sanity:** Projects (multiple documents)

**Editable Fields:**
- Title
- Slug (URL-friendly identifier)
- Description
- Images (array)
- Industry
- Services (related services)
- Materials (array)
- Client Information:
  - Name
  - Company
- Testimonial (optional):
  - Quote
  - Author
  - Role
- Completion Date

**Where it appears:**
- Portfolio listing page (`/portfolio`)
- Individual project detail pages (`/portfolio/[slug]`)

---

### 5. Trust Signals (`trustSignal`)
**Location in Sanity:** Trust Signals (multiple documents)

**Editable Fields:**
- Label (e.g., "Certified Quality")
- Value (e.g., "ISO 9001", "500+")
- Icon (award, shield, users, calendar)
- Order (display order)

**Where it appears:**
- Homepage trust signals section

---

### 6. Team Members (`teamMember`)
**Location in Sanity:** Team Members (multiple documents)

**Editable Fields:**
- Name
- Role
- Bio
- Image
- Order (display order)

**Where it appears:**
- About page team section

---

### 7. Timeline Events (`timelineEvent`)
**Location in Sanity:** Timeline Events (multiple documents)

**Editable Fields:**
- Year
- Title
- Description
- Image

**Where it appears:**
- About page timeline section

---

### 8. Sustainability Metrics (`sustainabilityMetric`)
**Location in Sanity:** Sustainability Metrics (multiple documents)

**Editable Fields:**
- Label
- Value
- Unit
- Description
- Order (display order)

**Where it appears:**
- About page sustainability section

---

### 9. Resources (`resource`)
**Location in Sanity:** Resources (multiple documents)

**Editable Fields:**
- Title
- Type (brochure, guide, spec sheet, etc.)
- Description
- Download File
- Category
- Tags (array)
- Published Date

**Where it appears:**
- Resources page (`/resources`)

---

### 10. Homepage Sections (`homepageSection`)
**Location in Sanity:** Homepage Sections (multiple documents)

**Editable Fields:**
- Section Type (introNarrative, servicesOverview, portfolioPreview)
- Title
- Subtitle
- Content
- Image
- Video (optional)
- CTA (Button Label & Link)
- Order (display order)

**Note:** Currently, the homepage uses hardcoded sections. This schema is available for future use if you want to make additional homepage sections editable.

---

## How to Edit Content

1. **Access Sanity Studio:**
   - Navigate to `https://your-vercel-url.com/basheka` (or `http://localhost:3000/basheka` in development)
   - Log in with your Sanity credentials

2. **Edit Content:**
   - Click on any content type in the left sidebar
   - Select the document you want to edit
   - Make your changes
   - Click "Publish" to save and publish your changes

3. **Changes are Live:**
   - After publishing, changes will be reflected on your Vercel deployment
   - Vercel will automatically rebuild and deploy your site with the new content

---

## Content That's Still Hardcoded (Future Enhancements)

The following content is currently hardcoded but can be made editable in the future:

- Navigation menu items
- Footer links
- Homepage intro narrative section text
- Homepage feature blocks ("Why Choose Us" section)
- Portfolio preview section on homepage
- CTA section text on homepage
- Service page hero sections
- Portfolio page hero section
- Resources page hero section
- Quote page form fields
- Contact page form fields

If you need any of these made editable, let me know and I can add the necessary schemas and update the pages.

---

## Important Notes

1. **Images:** All images uploaded to Sanity are automatically optimized and served via Sanity's CDN.

2. **Fallbacks:** If Sanity is not configured or fails to fetch data, the site will fall back to default/mock data to ensure the site always works.

3. **Ordering:** Many content types have an "Order" field that controls the display order. Lower numbers appear first.

4. **Slugs:** Service and Project slugs are used in URLs. Changing a slug will change the URL, so be careful when editing.

5. **Required Fields:** Some fields are required (marked with validation). Make sure to fill these in when creating new content.

---

## Need Help?

If you need to make additional content editable or have questions about editing content in Sanity, refer to the `SANITY_SETUP_GUIDE.md` file or reach out for assistance.

