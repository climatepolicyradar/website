<script>
  import { modalStore } from '$lib/stores/theme';
  import {
    data_types,
    geo_scope,
    data_focus,
    policy_databases,
  } from '$lib/stores/formOptions';

  import Button from '$lib/Components/Button.svelte';
  import Spacer from '$lib/Components/Spacer.svelte';

  let status = 'new';
  let errorMessage = 'An error has occured';
  let formElement;

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData(formElement);
    const dataTypes = new URLSearchParams(formData).getAll('data_types');
    console.log(d);
    return;

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        status = 'success';
        console.log('Form successfully submitted');
      })
      .catch((error) => {
        console.error(error);
        errorMessage = error;
      });
  };
</script>

{#if status === 'new'}
  <form
    class="c-request-form"
    name="request"
    method="POST"
    netlify
    bind:this={formElement}
    on:submit={handleSubmit}
  >
    <label class="c-request-form__label">
      <span class="c-request-form__label-text">Name</span>
      <input
        type="text"
        name="name"
        placeholder="Name"
        autocomplete="name"
        required
      />
    </label>

    <label class="c-request-form__label">
      <span class="c-request-form__label-text">Organisation</span>
      <input
        type="text"
        name="organisation"
        placeholder="Organisation"
        autocomplete="organization"
      />
    </label>

    <label class="c-request-form__label">
      <span class="c-request-form__label-text">Email</span>
      <input
        type="email"
        name="email"
        placeholder="Email address"
        autocomplete="email"
        required
      />
    </label>

    <div class="c-request-form__row">
      <div class="c-request-form__row-group">
        <span class="c-request-form__label-text"
          >What type(s) of climate policy data are you interested in? (select
          all that apply)</span
        >
        {#each $data_types as option, index}
          <div class="c-request-form__row-checkbox">
            <label for={option.id}>
              <input
                type="checkbox"
                name="data_types"
                value={option.value}
                id={option.id}
              />
              <span>{option.label}</span>
            </label>
          </div>
        {/each}

        <input type="text" name="other_data_types" />
      </div>

      <div class="c-request-form__row-group">
        <span class="c-request-form__label-text"
          >What's the geographical scope of the data you're interested in?
          (select all that apply)</span
        >

        {#each $geo_scope as option, index}
          <div class="c-request-form__row-checkbox">
            <label for={option.id}>
              <input
                type="checkbox"
                name="data_types"
                value={option.value}
                id={option.id}
              />
              <span>{option.label}</span>
            </label>
          </div>
        {/each}
      </div>

      <div class="c-request-form__row-group">
        <span class="c-request-form__label-text"
          >What is the focus of the data you're interested in? (select all that
          apply)</span
        >
        {#each $data_focus as option, index}
          <div class="c-request-form__row-checkbox">
            <label for={option.id}>
              <input
                type="checkbox"
                name="data_types"
                value={option.value}
                id={option.id}
              />
              <span>{option.label}</span>
            </label>
          </div>
        {/each}
        <input type="text" name="other_data_focus" />
      </div>

      <div class="c-request-form__row-group">
        <span class="c-request-form__label-text"
          >Have you used any of these climate policy databases in the past?</span
        >
        {#each $policy_databases as option, index}
          <div class="c-request-form__row-checkbox">
            <label for={option.id}>
              <input
                type="checkbox"
                name="data_types"
                value={option.value}
                id={option.id}
              />
              <span>{option.label}</span>
            </label>
          </div>
        {/each}
        <input type="text" name="other_policy_databases" />
      </div>
    </div>

    <label class="c-request-form__label">
      <span class="c-request-form__label-text">Message</span>
      <textarea name="message" placeholder="Your message" rows="6" />
    </label>

    <div class="c-request-form__label">
      <span />
      <Button type="submit" color="dark-glow" arrow>Send message</Button>
    </div>

    <!-- Honeypot -->
    <span class="u-no-bees">
      <label>bees: <input name="bee-field" /></label>
    </span>
    <input type="hidden" name="form-name" value="request" />
  </form>
{/if}

{#if status === 'success'}
  <Spacer size="md" />
  <h1>Thank you, we'll be in touch shortly</h1>
  <Spacer size="sm" />
  <Button action={() => modalStore.closeAll()} arrow>Close form</Button>
{/if}

{#if status === 'error'}
  <div class="error-message">
    <Spacer size="md" />
    <h2>Error: {errorMessage}</h2>
    <Spacer size="sm" />
    <Button action={() => (status = 'new')} arrow>Please try again</Button>
    <Spacer size="sm" />
    <p>
      Or email us at: <a
        href="mailto:info@climatepolicyradar.org"
        target="_blank"
        rel="noopener noreferrer">info@climatepolicyradar.org</a
      >
    </p>
  </div>
{/if}

<style>
  .c-request-form {
    max-width: 980px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.7;
  }

  @media (min-width: 768px) {
    .c-request-form {
      font-size: 18px;
      line-height: 36px;
    }
  }

  .c-request-form__label {
    margin-bottom: 16px;
  }

  @media (min-width: 768px) {
    .c-request-form__label {
      display: grid;
      grid-template-columns: 180px 1fr;
      margin-bottom: 16px;
      align-items: baseline;
    }
  }

  .c-request-form__row {
    margin-bottom: 16px;
  }

  .c-request-form__row-group {
    margin: 12px 0;
    border-top: 1px solid var(--color-indigo-200);
    padding: 12px 0;
  }

  .c-request-form__row-checkbox {
    margin: 4px 0;
  }
  .c-request-form__row-checkbox label {
    color: var(--color-indigo-500);
  }
  input[type='checkbox'] {
    margin-right: 8px;
  }

  input[type='text'],
  input[type='email'],
  select {
    width: 100%;
    margin-bottom: 16px;
    padding: 16px;
    line-height: 36px;
    line-height: 1;
    /* border: none; */
    background-color: var(--color-indigo-100);
    border-radius: 6px;
    border: 1px solid var(--color-indigo-400);
  }

  @media (min-width: 768px) {
    input[type='text'],
    input[type='email'],
    select {
      margin-bottom: 0;
    }
  }

  input[type='text']:focus-within,
  input[type='email']:focus-within,
  select:focus-within,
  textarea:focus-within {
    outline: 2px solid var(--color-blue-400);
  }

  input::placeholder {
    color: rgba(0, 0, 0, 0.6);
    opacity: 1;
  }

  textarea {
    width: 100%;
    padding: 18px;
    margin-top: 1rem;
    line-height: 1.2;
    background-color: #f9f9f9;
    border-radius: 15px;
    border: none;
  }

  .u-no-bees {
    display: none;
  }

  .error-message a {
    text-decoration: underline;
  }

  :global(.c-request-form__label .c-button) {
    margin-top: 24px;
    box-shadow: 0 0 32px rgba(31, 147, 255, 0.12);
  }
</style>
