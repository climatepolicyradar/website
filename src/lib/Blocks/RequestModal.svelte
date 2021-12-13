<script>
  import Modal from '$lib/Components/Modal.svelte';
  import Spacer from '$lib/Components/Spacer.svelte';
  import RequestForm from './RequestForm.svelte';

  export let open = false;
</script>

<Modal theme="light" {open}>
  <div class="b-request-modal">
    <h3 class="u-type-body-xl u-color-blue">Request early access</h3>
    <p class="u-type-body-md">
      We are working towards our first limited product release to a small group of users in March 2022. If you would like to have early access, please leave your details below, and we will be in touch.
    </p>
    <Spacer size="sm" />
    <RequestForm />
  </div>
</Modal>

<style>
  .b-request-modal {
    max-width: 600px;
  }

  /* h3,
  p {
    margin: 0;
  } */
</style>
