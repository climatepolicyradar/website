<script>
  import { affiliation_types } from '$lib/stores/formOptions';

  import Button from '$lib/Components/Button.svelte';
  import Spacer from '$lib/Components/Spacer.svelte';

  let status = 'new';
  let errorMessage = 'An error has occured';
  let formElement;
  let submitted = false;
  let inputError = null;

  // options selected in each group

  let affTypes = '';

  // 'other' text input values
  let otherAffTypes = '';

  const optionsError = 'Please select at least one of the below options.';
  const otherInputError = 'Please indicate other(s) below:';

  const handleChange = (e) => {
    const element = e.currentTarget;
    const nodeName = e.currentTarget.nodeName;
    let value = element.value;
    const targetElement = document.getElementById(
      `other_input_${element.name.slice(0, -2)}`
    );
    if (nodeName === 'INPUT' && value !== 'Other') return;
    if (nodeName === 'INPUT' && !element.checked) {
      value = '';
    }
    toggleOtherInput(value, targetElement);
  };

  const toggleOtherInput = (value, targetElement) => {
    if (value === 'Other') {
      targetElement.classList.add('show');
    } else {
      targetElement.classList.remove('show');
    }
  };

  const validateCheckBoxInputs = () => {
    if (!affTypes.length) {
      inputError = 'Please fix errors noted in red below:';
    }
  };

  const validateOtherInputs = () => {
    if (affTypes.indexOf('Other') > -1 && otherAffTypes.trim().length === 0) {
      inputError = 'Please fix errors noted in red below:';
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData(formElement);
    submitted = true;
    inputError = '';
    validateCheckBoxInputs();
    validateOtherInputs();

    if (inputError.length) {
      window.scrollTo(0, 0);
      return;
    }

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        status = 'success';
        console.log('Form successfully submitted');
        window.scrollTo(0, 0);
      })
      .catch((error) => {
        console.error(error);
        errorMessage = error;
      });
  };
</script>

{#if status === 'new'}
  {#if inputError}
    <p class="error-message above-form">
      {inputError}
    </p>
  {/if}
  <form
    class="c-request-form"
    name="short-request"
    method="POST"
    netlify
    bind:this={formElement}
    on:submit={handleSubmit}
  >
    <label class="c-request-form__label">
      <span class="c-request-form__label-text required">Full Name</span>
      <input
        type="text"
        name="name"
        placeholder="First and surname"
        autocomplete="name"
        required
      />
    </label>

    <label class="c-request-form__label">
      <span class="c-request-form__label-text required"
        >Organisation/Affiliation</span
      >
      <input
        type="text"
        name="organisation"
        placeholder="Organisation"
        autocomplete="organization"
        required
      />
    </label>

    <label class="c-request-form__label">
      <span class="c-request-form__label-text required">Affiliation type:</span>
      <select
        name="affiliation_type[]"
        id="affiliation_type"
        on:change={handleChange}
        bind:value={affTypes}
        required
      >
        <option value="">Select one</option>
        {#each $affiliation_types as option, index}
          <option value={option.value}>{option.label}</option>
        {/each}
      </select>
    </label>
    {#if affTypes.indexOf('Other') > -1 && otherAffTypes.trim().length === 0 && submitted}
      <div class="error-message">
        {otherInputError}
      </div>
    {/if}
    <label
      id="other_input_affiliation_type"
      class="c-request-form__other margin"
    >
      <input
        class="required"
        type="text"
        name="other_affiliation"
        placeholder="Enter other affiliation"
        bind:value={otherAffTypes}
      />
    </label>

    <label class="c-request-form__label">
      <span class="c-request-form__label-text required">Email</span>
      <input
        type="email"
        name="email"
        placeholder="Email address"
        autocomplete="email"
        required
      />
    </label>

    <div class="c-request-form__label--vertical">
      <span />
      <Button type="submit" color="dark-glow" arrow>Submit request</Button>
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
    }
  }
  .u-type-body-lg {
    margin-top: 0;
  }

  .c-request-form__label {
    margin-bottom: 16px;
  }
  .c-request-form__label--vertical {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
  }

  @media (min-width: 768px) {
    .c-request-form__label {
      display: grid;
      grid-template-columns: 200px 1fr;
      margin-bottom: 16px;
      align-items: baseline;
    }
  }

  .c-request-form__other {
    display: none;
    margin-bottom: 16px;
  }
  :global(.c-request-form__other.show) {
    display: block !important;
  }
  @media (min-width: 768px) {
    .c-request-form__other.margin {
      margin-left: 200px;
    }
  }

  .c-request-form__row-group {
    margin: 12px 0;
    border-top: 1px solid var(--color-indigo-200);
    padding: 24px 0 12px 0;
  }

  .no-border {
    border: none;
  }

  .c-request-form__row-checkbox {
    margin: 8px 0;
  }
  .c-request-form__row-checkbox label {
    color: var(--color-indigo-500);
    display: flex;
    align-items: flex-start;
  }
  .c-request-form__row-checkbox span {
    line-height: 1.5;
  }
  fieldset {
    border: none;
    padding: 0;
    margin: 0;
  }
  legend {
    display: none;
  }
  input[type='checkbox'],
  input[type='radio'] {
    margin-right: 8px;
    margin-top: 6px;
  }

  input[type='text'],
  input[type='email'],
  select {
    width: 100%;
    margin-bottom: 16px;
    padding: 16px;
    line-height: 36px;
    line-height: 1;
    background-color: white;
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
    border: 1px solid var(--color-indigo-400);
  }

  .note {
    display: block;
    font-size: 14px;
    line-height: 0.75;
    margin-bottom: 16px;
  }

  .u-no-bees {
    display: none;
  }
  .required:after {
    content: '*';
    color: var(--color-orange);
    margin-left: 4px;
  }
  .error-message {
    color: var(--color-orange);
  }
  .error-message.above-form {
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 24px;
  }
  .error-message a {
    text-decoration: underline;
  }

  :global(.c-request-form__label--vertical .c-button) {
    margin-top: 24px;
    box-shadow: 0 0 32px rgba(31, 147, 255, 0.12);
  }
  @media (min-width: 768px) {
    :global(.c-request-form__label--vertical .c-button) {
      width: 200px;
    }
  }
</style>
