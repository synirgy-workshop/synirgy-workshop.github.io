# SynIRgy Workshop Website

Website for the SynIRgy Workshop at WWW 2027.

## Overview

This is a Next.js website built with TypeScript for hosting on GitHub Pages. The website includes all typical sections found on academic workshop websites for conferences like SIGIR or KDD.

## Features

- **Home**: Overview of the workshop, topics of interest, and format
- **Call for Papers**: Submission guidelines and topics
- **Important Dates**: Key deadlines and dates
- **Program**: Workshop schedule and sessions
- **Speakers**: Keynote speakers information
- **Organizers**: Workshop chairs and program committee
- **Submission**: Detailed submission guidelines
- **Accepted Papers**: List of accepted papers
- **2026 Edition**: Archive of the ECIR 2026 keynote, program, and papers

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/synirgy-workshop/synirgy-workshop.github.io.git
cd synirgy-workshop.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

To build the site for GitHub Pages:

```bash
npm run build
```

The static files will be generated in the `out` directory.

## Deployment to GitHub Pages

### Automatic Deployment (Recommended)

1. Push your code to the `main` branch
2. Go to your repository Settings → Pages
3. Under "Source", select "GitHub Actions"
4. The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically build and deploy your site on every push to `main`

### Manual Deployment

1. Build the site: `npm run build`
2. Commit and push the `out` directory to the `gh-pages` branch

### Important Note

This repository is configured for root domain deployment at `https://synirgy-workshop.github.io/`. The `basePath` and `assetPrefix` in `next.config.js` are set to empty strings because the repository name follows the `orgname.github.io` pattern. For project subdirectory deployments, you would need to set these to match your repository name (e.g., `'/repo-name'`).

## Customization

### Updating Content

- Edit the page files in `app/[page-name]/page.tsx`
- Update styles in `app/globals.css` or create page-specific CSS files
- Modify navigation items in `components/Navigation.tsx`

### Styling

The website uses CSS for styling. You can:
- Modify `app/globals.css` for global styles
- Add page-specific CSS files in each page directory
- Update component styles in `components/`

## Project Structure

```
synirgy-workshop.github.io/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   └── [pages]/           # Individual pages
├── components/             # React components
│   ├── Navigation.tsx     # Navigation bar
│   └── Footer.tsx         # Footer component
├── .github/
│   └── workflows/         # GitHub Actions workflows
├── next.config.js         # Next.js configuration
├── package.json           # Dependencies
└── tsconfig.json          # TypeScript configuration
```

## Technologies Used

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **CSS**: Custom styling (no CSS framework)

## License

This project is open source and available under the MIT License.

## Contact

For questions about the workshop, please email synirgy@outlook.com.
