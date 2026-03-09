# HTML Structure Reference - Sudharsan Portfolio Clone

This document outlines the semantic HTML structure and class naming conventions used to recreate the "My Space" portfolio design.

## 1. Global Layout
The site follows a standard vertical flow with semantic sections.

```html
<body>
    <div class="top-marquee">...</div>
    <header class="hero">...</header>
    <main class="content-wrapper">
        <section class="about-section">...</section>
        <div class="folder-container">...</div>
        <section class="projects-section">...</section>
        <section class="creations-section">...</section>
        <div class="software-marquee">...</div>
    </main>
    <footer class="footer">...</footer>
</body>
```

## 2. Section Breakdowns

### A. Top Marquee
A simple utility bar for scrolling text.
- `.top-marquee`: Outer container (black background).
- `.marquee-content`: Inner container holding the repeating text.

### B. Hero Section (My Space)
The visual "hook" of the site.
- `.hero`: Full viewport height container with a sky gradient.
- `.astronaut-container`: Centered wrapper for text and imagery.
    - `.welcome-text`: Small lead-in text.
    - `.main-title`: Large heading ("MY SPACE") + `.ufo-icon`.
    - `.astronaut-wrapper`: Relative container for the astronaut and rocks.
        - `.astronaut-img`: The main floating image.
        - `.floating-rocks`: Container for animated rock elements (`.rock-1`, `.rock-2`).

### C. About Card (Bento Style)
A structured card displaying personal info.
- `.about-card`: Grid/Flex container with white background and rounded corners.
    - `.profile-img-container`: Left/Top side holding the portrait.
    - `.about-info`: Right/Bottom side for text content.
        - `h2`: Name.
        - `.role`: Job title (accent color).
        - `.bio`: Descriptive paragraph.
        - `.about-footer`: Flex container for logos and the resume button.
            - `.partner-logos`: List of partner/client names.
            - `.btn-resume`: Highlighted action button (green).

### D. Projects Grid
A 2-column responsive layout for main work.
- `.projects-section`: Container with a `.section-title`.
- `.projects-grid`: CSS Grid (`grid-template-columns: 1fr 1fr`).
    - `.project-card`: Individual work item.
        - `.project-image-wrapper`: Cropped container for the thumbnail.
        - `.project-details`: Padding area for text and CTA.
            - `.category`: Small label (e.g., "Fashion").
            - `h3`: Project title.
            - `.btn-project`: Action button (green).

### E. Creations Grid
A 3-column grid for smaller, technical projects.
- `.creations-section`: Container with a `.section-title`.
- `.creations-grid`: CSS Grid (`grid-template-columns: repeat(3, 1fr)`).
    - `.creation-card`: Bento-style card for "Vibe Coding" projects.
        - `.creation-img`: Icon or small visual.
        - `.type`: Small metadata label (e.g., "Figma plugin").
        - `h4`: Creation title.
        - `.icon-link`: Arrow icon for the external link.

### F. Software Marquee
A curved, flowing animation of tool icons.
- `.software-marquee`: Container handling the overflow.
- `.curved-marquee`: Flex container holding `.software-item` elements (Ps, Ai, Figma, etc.).

### G. Footer (Connect)
The high-impact closing section.
- `.footer`: Centered container with a wavy top boundary (`::before` or SVG).
    - `.footer-top-text`: Lead-in quote.
    - `.footer-connect`: Main contact area.
        - `h2`: "Connect here".
        - `.email-link`: Large, bold email address with a directional arrow.
        - `.footer-links`: Flex container for social/legal links (e.g., [LinkedIn], [Resume]).
    - `.footer-watermark`: Massive, semi-transparent background text ("[The End]").

## 3. Key CSS Classes for Vibe Coding
- `.btn-primary / .btn-resume`: Rounded, bold buttons with specific accent colors.
- `.section-title`: Standardized heading style with an underline or border.
- `.reveal-on-scroll`: (JS-targeted) Class for triggering Intersection Observer animations.
