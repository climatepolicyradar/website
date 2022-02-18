<script>
  export let excerpt;
  export let title;
  export let image;
</script>

<title>{title}</title>
<meta name="description" content={excerpt} />
<meta property="og:type" content="article" />
<meta name="title" property="og:title" content={title} />
<meta name="description" property="og:description" content={excerpt} />
<meta name="image" property="og:image" content={image} />
<meta name="twitter:card" content="summary" />
<meta name="twitter:site" content="@climatepolradar" />
<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={excerpt} />
<meta name="twitter:creator" content="@climatepolradar" />
<meta name="twitter:image" content={image} />
