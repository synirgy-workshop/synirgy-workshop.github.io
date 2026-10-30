# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 static website for the SynIRgy Workshop at WWW 2027, built with TypeScript and deployed to GitHub Pages. The site uses the Next.js App Router with static export (`output: 'export'`) to generate a completely static site.

## Development Commands

```bash
# Development
npm run dev          # Start dev server at http://localhost:3000

# Production
npm run build        # Build static site to ./out directory
npm run start        # Start production server (for testing)

# Linting
npm run lint         # Run ESLint
```

## GitHub Pages Deployment

### Critical Configuration

The site is configured for GitHub Pages with a root domain deployment. Since the repository is named `synirgy-workshop.github.io`, it deploys to the organization's root domain. The `basePath` and `assetPrefix` in `next.config.js` are set to empty strings:

```javascript
const repoName = ''  // Empty for root domain (orgname.github.io)
```

**Important**: This configuration is for root domain sites (e.g., `orgname.github.io`). For project subdirectories, set `repoName` to `'/repo-name'`.

### Deployment Process

1. **Automatic**: Push to `main` branch triggers `.github/workflows/deploy.yml`
2. **Manual**: Trigger workflow from Actions tab
3. Site deploys to: `https://synirgy-workshop.github.io/`

### Troubleshooting Deployment

- **404 errors**: Verify `basePath` matches repository name exactly
- **Missing styles/assets**: Check browser console for 404s; likely basePath mismatch
- **Build failures**: Check Actions tab; ensure Node.js 20+ compatibility

## Architecture

### Next.js Configuration

- **Static Export**: Configured with `output: 'export'` for GitHub Pages
- **Images**: Set to `unoptimized: true` (required for static export)
- **Trailing Slash**: Enabled for GitHub Pages compatibility
- **Path Alias**: `@/*` maps to project root (configured in tsconfig.json)

### Layout Structure

The site uses Next.js App Router with a consistent layout:

- **Root Layout** (`app/layout.tsx`): Wraps all pages with Navigation + Footer
- **Navigation** (`components/Navigation.tsx`): Client component with mobile menu
- **Footer** (`components/Footer.tsx`): Shared footer component

### Page Organization

All pages follow the App Router convention at `app/[page-name]/page.tsx`:

- `/` - Home
- `/call-for-papers/` - Submission topics and guidelines
- `/important-dates/` - Key deadlines
- `/program/` - Tentative workshop schedule
- `/speakers/` - Keynote speakers (not in nav until announced)
- `/organizers/` - Workshop chairs and committee
- `/submission/` - Detailed submission process
- `/accepted-papers/` - Accepted papers list (not in nav until announced)
- `/2026/` - Archive of the ECIR 2026 edition (keynote, program, papers)

### Navigation Updates

To add/remove pages, update the `navItems` array in `components/Navigation.tsx:12-22`. Each item requires:
- `href`: Route path (must match page location)
- `label`: Display text in navbar

### Styling

- **Global styles**: `app/globals.css` (typography, containers, cards)
- **Component styles**: Co-located CSS files (e.g., `Navigation.css`)
- **No CSS framework**: Custom CSS only
- **Design system**: Blue accent (#2563eb), system fonts, responsive breakpoints

### TypeScript

- **Strict mode enabled**: All type errors must be resolved
- **Target**: ES5 for broad compatibility
- **Module resolution**: `bundler` (Next.js optimized)

## Common Modifications

### Adding a New Page

1. Create `app/[page-name]/page.tsx`
2. Add route to `navItems` in `components/Navigation.tsx`
3. Follow existing page structure for consistency

### Updating Content

- Pages are self-contained in `app/[page-name]/page.tsx`
- Use semantic HTML with descriptive headings
- Maintain consistent styling with `.card` classes from `globals.css`

### Changing Site Metadata

Edit `metadata` export in `app/layout.tsx:6-9` for site title and description.

## Academic Conference Context

This is an academic workshop website. Content should follow academic conference conventions:

- **Important Dates**: Use standard academic milestone naming (submission deadline, notification, camera-ready, workshop date)
- **Call for Papers**: Include topics of interest, submission guidelines, formatting requirements
- **Program Committee**: List organizers with affiliations and roles
- **Submission Process**: Link to external submission systems (e.g., EasyChair)
