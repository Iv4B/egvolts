# EG Volts

Nuxt 4 starter for a statically rendered one-page website on GitHub Pages.

## Development

Use Node.js 24 (`nvm use`), then:

```sh
npm ci
npm run dev
```

Edit `app/app.vue` to build the page. Page metadata lives in `nuxt.config.ts`.

## Static output

```sh
NUXT_APP_BASE_URL=/egvolts/ npm run generate
```

Upload `.output/public` to static hosting. It includes prerendered HTML, JavaScript, CSS, and `.nojekyll`; no Node server is required. For local root-path previews, run `npm run generate` and `npm run preview`.

## GitHub Pages

In this repository's **Settings → Pages → Build and deployment**, select **GitHub Actions** as the source. The Pages workflow builds pull requests and deploys pushes to `main`, or can be run manually. If the default branch differs, update the workflow's push branch.

The expected site URL is https://iv4b.github.io/egvolts/.
For a custom domain, set the workflow's `NUXT_APP_BASE_URL` to `/` and configure the domain in Pages settings.
