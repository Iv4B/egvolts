# EG Volts

Nuxt 4 starter for a statically rendered one-page website on GitHub Pages.

## Development

Use Node.js 24 (`nvm use`), then:

```sh
npm ci
npm run dev
```

Edit `app/app.vue` to update the About me, Past projects, Skills, and Contacts sections. The current copy and project examples are illustrative; replace the sample email and location before publishing. Contacts use a direct email link, with no form.

The logo is recreated as scalable SVG artwork in `public/egvolts-logo.svg` and `public/egvolts-mark.svg`. Its wordmark uses a system-font approximation of the reference. The charcoal (`#34424a`), grey (`#818b91`), and lime (`#afc448`) palette and responsive layouts live in `app/assets/css/main.css`. Page metadata lives in `nuxt.config.ts`.

## Static output

```sh
NUXT_APP_BASE_URL=/ npm run generate
```

Upload `.output/public` to static hosting. It includes prerendered HTML, JavaScript, CSS, and `.nojekyll`; no Node server is required. For local root-path previews, run `npm run generate` and `npm run preview`.

## GitHub Pages

In this repository's **Settings → Pages → Build and deployment**, select **GitHub Actions** as the source. The Pages workflow builds pull requests and deploys pushes to `main`, or can be run manually. If the default branch differs, update the workflow's push branch.

The production URL is https://egvolts.lv/. The workflow uses `NUXT_APP_BASE_URL=/` because the custom domain serves the site at its root. Keep `egvolts.lv` configured in Pages settings. If switching back to the default project URL without a custom domain, change the build base path to `/egvolts/`.
