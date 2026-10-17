# Nova Cart

Nova Cart is a responsive, single-page storefront demo for curated everyday products, home goods, audio, fitness, and fashion essentials.

## Storefront Sections

- **Home:** seasonal promotion and featured product
- **Shop:** product grid with category filters
- **Trending:** highlighted customer favorites
- **Deals:** limited-time promotion with a countdown
- **Reviews:** customer testimonials and ratings
- **Trust:** shipping, returns, checkout, and support information
- **Newsletter:** email signup interaction
- **Footer:** store links and social links

## Features

- Responsive navigation with a mobile menu
- Native smooth scrolling for in-page links, with reduced-motion support
- Scroll-triggered reveal effects with a static fallback when reduced motion is preferred or `IntersectionObserver` is unavailable
- Product category filtering and live result count
- Add-to-cart counter with an on-page confirmation toast
- Wishlist toggle
- Promotional countdown timer
- Newsletter form confirmation in the page
- Search field and product presentation UI
- Search-engine and social-sharing metadata

## Built With

- HTML5
- CSS in `styles.css`
- Vanilla JavaScript in `script.js`
- Tailwind CSS via CDN
- Google Fonts and Font Awesome via CDN

## Run Locally

Open `index.html` in a browser, or serve the folder with a local development server such as VS Code Live Server. No build step is required.

Fonts, icons, and Tailwind CSS load from external CDNs, so an internet connection is needed for those assets.

## Project Files

- `index.html` — page content, metadata, and embedded page styles
- `styles.css` — shared typography, animations, and UI styles
- `script.js` — navigation, scroll effects, product interactions, countdown, and newsletter behavior
- `images/` — local product images and other static image assets

## Prototype Scope

This is a front-end demo, not a connected ecommerce backend. The cart count and wishlist are session-only UI state; checkout, search results, and newsletter subscriptions are not persisted or sent to a server.
