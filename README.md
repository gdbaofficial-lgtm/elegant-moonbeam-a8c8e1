# Gaya District Basketball Association — Free Hosting Package

This is a plain static HTML/CSS/JavaScript website. It is prepared for both **Netlify** and **GitHub Pages**.

## Option 1 — Netlify (easiest)

1. Create/sign in to a Netlify account.
2. Open Netlify Drop: https://app.netlify.com/drop
3. Unzip this package.
4. Drag the **gdba_publish** folder into the Drop zone.
5. Netlify will publish it and provide a `*.netlify.app` URL.

The included `netlify.toml` sets the publish directory to the project root.

## Option 2 — GitHub Pages

1. Create a new **public** GitHub repository, for example `gdba-website`.
2. Upload **all files and folders inside this package** to the repository's `main` branch.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **GitHub Actions**.
5. The included `.github/workflows/pages.yml` will deploy the site automatically.
6. Your site will normally be available at:
   `https://YOUR-USERNAME.github.io/gdba-website/`

## Important

- Keep `index.html` at the repository root.
- Keep the `assets` folder beside `index.html`.
- The five supplied GDBA photographs are already included in `assets/`.
- The official GDBA logo is included as `assets/gdba-logo.png`.
- No build command or Node.js installation is required.

## Before publishing publicly

Verify the association's official phone number, email, address, office-bearer names, affiliations, achievements and social-media links. The website currently uses the information supplied for the GDBA project.
