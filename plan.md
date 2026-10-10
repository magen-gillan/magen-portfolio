# Magen Gillan — Project Atlas

## Implementation

A static GitHub Pages portfolio built with semantic HTML, CSS, and vanilla JavaScript. The site presents non-empty GitHub repositories as a curated atlas, with Alisha featured first and Magen Play as the next visual card. Project details open in an accessible dialog and include source links, stack, update date, release tag, and direct APK/download links where available.

Public repositories refresh their latest release and APK link from the GitHub Releases API on page load. The site remains usable if the API is unavailable because it includes curated fallback data.

## Design

- **Movement:** editorial software catalog with a quiet Swiss grid and tactile paper texture.
- **Principles:** strong hierarchy, asymmetrical composition, generous whitespace, useful motion.
- **Color:** warm paper and ink create a personal archive feeling; acid lime marks active/current work.
- **Layout:** large featured Alisha card, offset smaller Magen Play card, then a compact atlas of projects.
- **Signature elements:** circular M avatar, lime status pulse, numbered project cards.
- **Interaction:** cards are invitations to inspect; language/theme settings persist locally.
- **Brand essence:** a living index of playful software by an independent maker. Curious, precise, warm.
- **Typography:** Manrope for voice and DM Mono for metadata.
- **Avatar:** the profile image can be replaced by each visitor and persists via localStorage on that device. A public GitHub Pages site has no server-side database, so global sharing of a visitor's replacement requires a backend in a later phase.

## Structure

- `index.html`: accessible shell and page sections
- `styles.css`: responsive visual system and dark mode
- `projects.js`: curated project metadata and fallback release links
- `app.js`: rendering, i18n, dialog, release refresh, avatar persistence
- `.github/workflows/pages.yml`: GitHub Pages deployment
