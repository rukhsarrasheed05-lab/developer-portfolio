# Mira Cho — 3D Developer Portfolio

A dark, animated 3D portfolio built with React, Vite, Tailwind CSS,
React Three Fiber / drei, and Framer Motion — inspired by the classic
"3D dev portfolio" template genre (react-three-fiber hero model,
floating tech icons, tilt project cards, timeline, EmailJS contact form),
built from scratch with original content and a custom 3D scene.

## Stack

- **Vite + React 19**
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **@react-three/fiber** + **@react-three/drei** + **three.js** — 3D scenes
- **framer-motion** — scroll reveals and hero transitions
- **react-vertical-timeline-component** — experience timeline
- **@emailjs/browser** — contact form (bring your own EmailJS keys)
- **react-icons** — iconography

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build      # production build -> dist/
npm run preview    # preview the production build
```

## Structure

```
src/
  components/
    canvas/          3D scenes (CoreCanvas, StarsCanvas, TechOrb, ContactOrb)
    Navbar.jsx, Hero.jsx, About.jsx, Tech.jsx,
    Experience.jsx, Works.jsx, Contact.jsx, Footer.jsx
  constants/index.js  all editable content lives here
  hoc/SectionWrapper.jsx   scroll-reveal wrapper used by every section
  utils/useTilt.js         lightweight custom tilt effect (no extra deps)
  index.css            design tokens (Tailwind @theme block)
```

## Making it yours

1. **Content** — edit `src/constants/index.js`: nav links, services,
   tech stack, experience, and projects all live there. Swap the name
   and copy in `Navbar.jsx`, `Hero.jsx`, `About.jsx`, `Contact.jsx`,
   and `Footer.jsx`.
2. **Contact form** — the form in `Contact.jsx` is wired to
   EmailJS (see their SDK docs). Create a free account, then replace
   `YOUR_SERVICE_ID`, `YOUR_TEMPLATE_ID`, and `YOUR_PUBLIC_KEY` in
   that file. Until then the form will show an error state on submit
   — that's expected.
3. **Colors** — the palette (deep space navy `#030014`, violet
   `#8452ff`, teal `#00e5c7`) is defined once in `src/index.css`
   under the `@theme` block. Change it there and it propagates
   everywhere via Tailwind's arbitrary utilities.
4. **3D scene** — `CoreCanvas.jsx` is an original "distributed
   systems core": a distorting icosahedron with a wireframe shell and
   three orbiting nodes, rather than a literal 3D computer model. Swap
   in a GLTF model with `@react-three/drei`'s `useGLTF` if you'd
   rather use a real asset.

## Notes on performance

- All canvases respect `prefers-reduced-motion` and fall back to a
  static/low-motion scene.
- The production bundle is a single ~1.3MB JS chunk (mostly three.js).
  For a real deployment, consider lazy-loading the canvas components
  with `React.lazy` so the initial paint doesn't wait on the 3D
  libraries.
