<script>
  import { MetaTags, JsonLd } from 'svelte-meta-tags';
  export let excerpt;
  export let title;
  export let image;
  export let path;
</script>

<!-- <title>{title}</title>
<meta name="description" content={excerpt} />
<meta property="og:type" content="article" />
<meta name="title" property="og:title" content={title} />
<meta name="description" property="og:description" content={excerpt} />
<meta name="image" property="og:image" content={image} />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@climatepolradar" />
<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={excerpt} />
<meta name="twitter:creator" content="@climatepolradar" />
<meta name="twitter:image" content={image} /> -->
<MetaTags
  {title}
  description={excerpt}
  canonical={`https://www.climatepolicyradar.org${path}`}
  openGraph={{
    url: `https://www.climatepolicyradar.org${path}`,
    title: title,
    description: excerpt,
    images: [
      {
        url: image,
      },
    ],
    site_name: 'Climate Policy Radar',
  }}
  twitter={{
    handle: '@climatepolradar',
    site: '@climatepolradar',
    cardType: 'summary_large_image',
    title: title,
    description: excerpt,
    image: image,
    imageAlt: 'Climate Policy Radar',
  }}
/>
