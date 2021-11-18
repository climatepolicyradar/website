<script context="module">
  export const prerender = true;
</script>

<script>
  import { theme } from '$lib/stores/theme';
  import RequestForm from '$lib/Blocks/RequestForm.svelte';
  import Spacer from '$lib/Components/Spacer.svelte';
  import Wrapper from '$lib/Components/Wrapper.svelte';

  $theme = {
    footer: 'light',
    header: 'light',
  };
</script>

<Spacer size="2xl" />
<Wrapper>
  <RequestForm />
</Wrapper>
