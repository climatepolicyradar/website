// import adapter from '@sveltejs/adapter-netlify';
import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import path from 'path';
import { fileURLToPath } from 'url';

const dirname = path.resolve(fileURLToPath(import.meta.url), '../');

const config = {
  kit: {
    target: '#svelte',
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null,
    }),
    // adapter: adapter(), // Netlify
    // prerender: {
    //   crawl: true,
    //   enabled: true,
    //   entries: ['*'],
    //   onError: 'continue', // https://github.com/sveltejs/kit/tree/master/packages/adapter-netlify#using-netlify-forms
    // },
  },
  extensions: ['.svelte', '.md'],
  preprocess: [
    mdsvex({
      extensions: ['.md'],
      layout: {
        latest: path.join(dirname, './src/routes/latest/layout.svelte'),
        jobs: path.join(dirname, './src/routes/jobs/layout.svelte'),
      },
    }),
  ],
};

export default config;
