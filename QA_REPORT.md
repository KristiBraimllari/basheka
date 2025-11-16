# QA Report - Missing CTAs and Issues

## Critical Missing CTAs

### 1. Homepage - Services Section
**Issue**: Services section shows individual services but NO link to main `/services` page
**Location**: `app/page.tsx` line 103-181
**Fix**: Add "View All Services" CTA button after the services grid

### 2. About Page - Multiple Missing CTAs
**Issue**: No link to Services page anywhere on About page
**Location**: `app/about/page.tsx`
**Fixes Needed**:
- Hero section: Add "Our Services" as secondary CTA
- Feature blocks section: Add CTA to services
- CTA section: Add link to services alongside careers link

### 3. Portfolio Page - Missing Services CTA
**Issue**: No link to Services page
**Location**: `app/portfolio/page.tsx`
**Fix**: Add "View Our Services" CTA in hero section and/or add CTA section at bottom

### 4. Contact Page - Missing Services CTA
**Issue**: No link to Services page
**Location**: `app/contact/page.tsx`
**Fix**: Add "Our Services" link in hero section or contact info section

### 5. Service Detail Pages - Missing Back Navigation
**Issue**: No "Back to Services" link on individual service pages
**Location**: `app/services/[slug]/page.tsx`
**Fix**: Add back navigation link similar to portfolio detail pages

### 6. Portfolio Detail Pages - Missing Services CTA
**Issue**: No link to Services page
**Location**: `app/portfolio/[slug]/page.tsx`
**Fix**: Add "Related Services" or "Our Services" link in CTA section

### 7. Resources Page - Missing CTAs
**Issue**: No link to Services page, no CTA section at bottom
**Location**: `app/resources/page.tsx`
**Fix**: Add Services CTA and bottom CTA section

### 8. Quote Page - Missing Services CTA
**Issue**: No link to Services page
**Location**: `app/quote/page.tsx`
**Fix**: Add "Browse Our Services" link

## Styling Inconsistencies

### 9. Service Detail Pages - Old Styling
**Issue**: Uses old color scheme (steel-600, copper-600, charcoal) instead of Apple styling
**Location**: `app/services/[slug]/page.tsx`
**Fix**: Update to use apple-gray colors and Apple design system

### 10. Portfolio Detail Pages - Old Styling
**Issue**: Uses old color scheme instead of Apple styling
**Location**: `app/portfolio/[slug]/page.tsx`
**Fix**: Update to use apple-gray colors and Apple design system

### 11. Resources Page - Old Styling
**Issue**: Uses old color scheme (steel-600, charcoal)
**Location**: `app/resources/page.tsx`
**Fix**: Update to use apple-gray colors and Apple design system

### 12. Quote Page - Old Styling
**Issue**: Uses old color scheme
**Location**: `app/quote/page.tsx`
**Fix**: Update to use apple-gray colors and Apple design system

## Additional Issues

### 13. Portfolio Page - Missing Bottom CTA
**Issue**: No CTA section at bottom of portfolio page
**Fix**: Add CTA section similar to other pages

### 14. Resources Page - Missing Bottom CTA
**Issue**: No CTA section at bottom
**Fix**: Add CTA section

### 15. Service Detail Pages - Missing Related Services
**Issue**: No section showing other available services
**Fix**: Add "Other Services" section at bottom

## Summary

**Total Issues Found**: 15
- **Missing CTAs**: 8
- **Styling Issues**: 4
- **Missing Sections**: 3

**Priority**: HIGH - Missing CTAs prevent users from discovering the Services page from most pages

