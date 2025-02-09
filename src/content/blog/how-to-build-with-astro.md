---
title: How to Develop an Astro Website
excerpt: A comprehensive guide to setting up and developing a website using Astro, including installation, project structure, components, styling, and deployment.
publishDate: 'Aug 5 2023'
tags:
  - Guide
seo:
  image:
    src: '/astro-img.webp'
    alt: Astro Image
---

![Astro Image](/astro-img.webp)

## 1. Install Astro

First, install Astro globally or create a new project:

```sh
# Install Astro globally (optional)
npm install -g create-astro

# Create a new Astro project
npm create astro@latest my-astro-site

# Navigate into your project folder
cd my-astro-site

# Install dependencies
npm install
```

## 2. Run the Development Server

Start the local development server:

```sh
npm run dev
```

By default, the site runs at `http://localhost:4321/`.

## 3. Project Structure

Astro projects follow this structure:

```
my-astro-site/
├── src/
│   ├── pages/        # Pages for routing
│   ├── components/   # Reusable UI components
│   ├── layouts/      # Layout files
│   └── styles/       # Global styles
├── public/           # Static assets (images, fonts, etc.)
├── astro.config.mjs  # Astro configuration
└── package.json      # Project dependencies
```

## 4. Create a New Page

Astro uses `.astro` files for pages. Create a new page in `src/pages/about.astro`:

```astro
---
// Frontmatter (JavaScript logic here)
const title = "About Us";
---

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>{title}</title>
</head>
<body>
  <h1>{title}</h1>
  <p>Welcome to our Astro website!</p>
</body>
</html>
```

## 5. Using Components

Create a component in `src/components/Button.astro`:

```astro
---
const { text } = Astro.props;
---
<button>{text}</button>
```

Use it in a page:

```astro
---
import Button from "../components/Button.astro";
---

<Button text="Click Me" />
```

## 6. Styling with Tailwind CSS

Install Tailwind CSS:

```sh
npm install -D tailwindcss
npx tailwindcss init
```

Update `tailwind.config.cjs` to include:

```js
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {}
  },
  plugins: []
};
```

Then import Tailwind in `src/styles/global.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Import this file in `astro.config.mjs`:

```js
import './src/styles/global.css';
```

## 7. Deploying Your Astro Site

Build your project:

```sh
npm run build
```

Deploy to services like Vercel, Netlify, or GitHub Pages.

For Vercel:

```sh
npm install -g vercel
vercel
```

## 8. Conclusion

You now have a basic Astro website! Explore more features like SSR, API routes, and integrations to enhance your site.
