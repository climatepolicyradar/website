# Climate Policy Radar

A microsite for Climate Policy Radar - Building the evidence base for evidence-based policymaking

- Dev: https://localhost:3000/
- Staging/QA: auto-generated when new PRs opened
- Production: https://climatepolicyradar.org/
- Trello: https://trello.com/b/lkWx4xWz/climate-policy-radar

## Getting Started

1. Clone this repo `git clone git@github.com:smithfield-studio/client-climate-policy-radar.git`
1. Move into project `cd client-climate-policy-radar`
1. Run `nvm use` to ensure you're using Node `v16`
1. Install dependencies `yarn` / `npm i`
1. Start dev server `yarn dev` / `npm run dev`

## Deployment / Building For Production

Merge PR / push to `production` branch to auto deploy to live site

## Build Notes

Built using [SvelteKit](https://kit.svelte.dev/) static site generator, the [documentation](https://kit.svelte.dev/docs) is pretty good and there is an active community on [Discord](https://discord.com/invite/yy75DKs).

The VSCode editor is recommended - you will be prompted to install useful extensions (Svelte syntax highlighting etc) when first opening the project.

## Latest & Job Posts

Content added using Markdown via [mdsvex](https://mdsvex.com/) ([Docs](https://mdsvex.com/docs)) allowing Svelte components to be used within Markdown content.

#### To add a new Job|Latest post

1. Create a new .md file with the desired slug, ie. `./src/routes/[jobs|latest]/{url-slug}.md`
1. Add Any Markdown / HTML / Svelte componets
1. For Latest posts, Add the featured image to `./statuc/images/{url-slug}.jpg` thumb, be sure to use an image optimiser to cruch these down before commiting, no pre-processing is run
1. Push to a new branch, create a PR to create a QA URL. Once happy + code has been reviewed; merge into the `production` branch to deploy to live site

## Hosting

The site is hosted and setup to auto deploy to [Netlify](https://www.netlify.com/)

## Support

For anything else please contact [support@smithfield.studio](mailto:support@smithfield.studio), thanks!

## Run Netlify CMS locally:

To run the CMS locally while developing, run `npx netlify-cms-proxy-server`

Then go to http://localhost:3000/admin/index.html
