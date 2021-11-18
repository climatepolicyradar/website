<script context="module">
  export function load({ error, status }) {
    return {
      props: {
        status: status,
        error: error,
      },
    };
  }
</script>

<script>
  import { dev } from '$app/env';
  import Banner from '$lib/Blocks/Banner.svelte';
  import Pill from '$lib/Components/Pill.svelte';
  import Spacer from '$lib/Components/Spacer.svelte';
  import Wrapper from '$lib/Components/Wrapper.svelte';
  import { theme } from '$lib/stores/theme';

  export let status;
  export let error;

  $theme = {
    footer: 'light',
    header: 'light',
  };
</script>

<Banner theme="light" size="sm">
  <svelte:fragment slot="pill">
    <Pill color="blue" upper>{status}</Pill>
    <Spacer size="sm" />
  </svelte:fragment>

  <h1 slot="heading" class="u-gradient-text--dark-to-blue">
    {error.name}: {error.message}
  </h1>
</Banner>

{#if dev}
  <Wrapper>
    <pre>
      {error.stack}
    </pre>
  </Wrapper>
{/if}

<style>
  pre {
    background-color: #fafafa;
    border-radius: 1rem;
    padding: 2rem;
    font-size: 10px;
    overflow: auto;
  }
</style>
