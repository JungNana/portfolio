# Portfolio

Personal portfolio site of Anastasiia Kazhan, published with GitHub Pages.

Live site: https://jungnana.github.io/portfolio/

## Structure

- `index.html` – page content (about, web, game UI, graphic design, contact)
- `style.css` – styles
- `script.js` – lightbox (opens an image full-size on click)
- `images/` – project images (compressed for the web)
- `files/` – PDF case study
- `.nojekyll` – tells GitHub Pages to serve files as-is

## How to add a new work

1. Put the image into `images/` (JPG, up to ~1600 px wide is enough).
2. In `index.html` find the right section and copy one line like this:

   ```html
   <a href="images/my-work.jpg"><img src="images/my-work.jpg" alt="Short description" loading="lazy"></a>
   ```

3. Commit and push to `main`. GitHub Pages redeploys in about a minute.
