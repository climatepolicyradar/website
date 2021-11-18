<script>
  import Modal from '$lib/Components/Modal.svelte';
  import Spacer from '$lib/Components/Spacer.svelte';
  import RequestForm from './RequestForm.svelte';

  export let open = false;
</script>

<Modal theme="light" {open}>
  <div class="b-request-modal">
    <h3 class="u-type-body-xl u-color-blue">Request early access</h3>
    <p class="u-type-body-xl">
      If you'd like to keep track of our progress, or request early access to Climate Policy Radar's
      tools, please get in touch:
    </p>
    <Spacer size="md" />
    <RequestForm />
  </div>
</Modal>

<style>
  .b-request-modal {
    max-width: 600px;
  }

  h3,
  p {
    margin: 0;
  }
</style>
