# Redesign validation — 30 October 2026

- Production `npm run build` passed, including TypeScript and Next.js lint checks and static export.
- All 248 root-relative references in the exported HTML resolve to existing output files.
- Browser review: desktop, 390px phone, and 320px narrow-phone layouts; no horizontal page overflow observed.
- Mobile menu opens; Call for Papers navigates and dismisses the menu.
- Homepage generated images load. Organizer portraits load after changing relative image URLs to root-relative paths; archive speaker path was corrected consistently.
- Shared supporting-page banner reviewed on Call for Papers and Organizers.
- No browser console errors observed in final review.
- Existing conference dates and uncertainty labels retained from repository content; not independently reverified.
- Build emits advisory notices about old browser compatibility datasets; no build errors.
- Images generated with built-in image_gen and optimized to WebP; originals and exact prompts retained in this folder.
- Mockups are screenshots of the implemented website. Desktop and mobile are responsive views of one design direction.
- No deployment or Git push performed.
