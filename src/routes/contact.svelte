<script context="module">
  export const prerender = true
</script>

<script>
  import Pill from '$lib/Components/Pill.svelte'
  import Wrapper from '$lib/Components/Wrapper.svelte'
  import Spacer from '$lib/Components/Spacer.svelte'
  import ContactForm from '$lib/Blocks/ContactForm.svelte'
  import MetaTags from '$lib/Components/MetaTags.svelte'
  import Banner from '$lib/Blocks/Banner.svelte'

  const title = 'Contact | Climate Policy Radar'
  const excerpt = 'Get in touch with not-for profit data-led climate startup, Climate Policy Radar'
  const image = 'https://climatepolicyradar.org/images/logo.png'
  const path = '/contact'
</script>

<MetaTags {title} {excerpt} {image} {path} />

<Banner theme="dark" size="sm">
  <h1 slot="heading">Collaborate</h1>
  <h2 slot="heading-2" class="u-type-body-xxl">We’re open: open data, open source, and open to collaboration</h2>
  <p slot="subheading">
    We work with research institutions, public policy organisations, NGOs, data and tech providers, the media and many
    others to unearth data, generate insights and share knowledge.
  </p>
  <p slot="subheading-2">
    We are always seeking new collaborations on data, research and outreach. Please get in touch to discuss how we can
    work together.
  </p>
</Banner>

<Spacer size="md" />

<Wrapper>
  <h2 class="u-type-body-xxxl">Get in touch</h2>
  <Spacer size="sm" />
  <ContactForm />
</Wrapper>
