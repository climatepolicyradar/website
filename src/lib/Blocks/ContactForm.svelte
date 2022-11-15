<script>
  import Button from '$lib/Components/Button.svelte';
  import Spacer from '$lib/Components/Spacer.svelte';

  let status = 'new';
  let errorMessage = 'An error has occured';
  let formElement;

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData(formElement);

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
    class="c-contact-form"
    name="contact"
    method="POST"
    netlify
    bind:this={formElement}
    on:submit={handleSubmit}
  >
    <span>Hello,</span>

    <div class="c-contact-form__row">
      <div class="c-contact-form__field">
        I'm
        <label class="c-contact-form__label">
          <span class="u-sr-only">Name</span>
          <input type="text" name="name" placeholder="Name" autocomplete="name" required />
        </label>
      </div>

      <div class="c-contact-form__field">
        from:
        <label>
          <span class="u-sr-only">Organisation</span>
          <input
            type="text"
            name="organisation"
            placeholder="organisation"
            autocomplete="organization"
          />
        </label>
      </div>
    </div>

    <div class="c-contact-form__row">
      and I'm getting in touch about
      <label>
        <span class="u-sr-only">Topic</span>
        <select name="topic[]">
          <option selected>select topic</option>
          <option value="research">Collaborating on research</option>
          <option value="open_source">Contributing to open source code</option>
          <option value="careers">Working at Climate Policy Radar</option>
          <option value="offer">Offering you a service/product</option>
          <option value="other">Something else</option>
        </select>
      </label>
    </div>

    <div class="c-contact-form__row">
      You can email me at
      <label>
        <span class="u-sr-only">Email</span>
        <input type="email" name="email" placeholder="email address" autocomplete="email" required />
      </label>
    </div>

    <label>
      <span class="u-sr-only">Message</span>
      <textarea name="message" placeholder="Your message" rows="6" />
    </label>

    <Button type="submit" color="blue" size="lg" arrow>Send message</Button>

    <!-- Honeypot -->
    <span class="u-no-bees">
      <label>bees: <input name="bee-field" /></label>
    </span>
    <input type="hidden" name="form-name" value="contact" />
  </form>
{/if}

{#if status === 'success'}
  <Spacer size="md" />
  <h1>Thank you, we'll be in touch shortly</h1>
  <Spacer size="sm" />
  <Button href="/" arrow>Back to the homepage</Button>
{/if}

{#if status === 'error'}
  <div class="error-message">
    <Spacer size="md" />
    <h2>Error: {errorMessage}</h2>
    <Spacer size="sm" />
    <Button action={() => status = 'new'} arrow>Please try again</Button>
    <Spacer size="sm" />
    <p>
      Or email us at: <a href="mailto:info@climatepolicyradar.org" target="_blank" rel="noopener noreferrer external">info@climatepolicyradar.org</a>
    </p>
  </div>
{/if}

<style>
  .c-contact-form {
    max-width: 800px;
    font-size: 21px;
    font-weight: 500;
    line-height: 1.7;
  }

  .c-contact-form input[type='text'],
  .c-contact-form input[type='email'],
  .c-contact-form select {
    width: 100%;
    margin-bottom: 0;
    font-size: 21px;
    font-weight: 500;
    line-height: 1;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.35);
    color: var(--color-indigo-500);
    /* appearance: none; */
  }

  .c-contact-form input[type='text']:focus-within,
  .c-contact-form input[type='email']:focus-within,
  .c-contact-form select:focus-within,
  .c-contact-form textarea:focus-within {
    outline: 2px solid var(--color-sky-600);
  }

  .c-contact-form input::placeholder {
    color: var(--color-indigo-500);
    opacity: 1; /* Firefox */
  }

  .c-contact-form textarea {
    width: 100%;
    padding: 24px;
    margin-top: 1rem;
    line-height: 1.2;
    background-color: var(--color-sky-600);
    border-radius: 15px;
  }

  .c-contact-form__field {
    display: flex;
    width: 100%;
    align-items: baseline;
  }

  .c-contact-form__field label {
    flex-grow: 1;
    margin-left: 12px;
    margin-right: 12px;
  }

  @media (min-width: 768px) {
    .c-contact-form {
      font-size: 36px;
      line-height: 1.4;
    }

    .c-contact-form input[type='text'],
    .c-contact-form input[type='email'],
    .c-contact-form select {
      margin-left: 12px;
      margin-right: 12px;
      font-size: 36px;
    }

    .c-contact-form input[type='text'],
    .c-contact-form select {
      max-width: 300px;
    }

    .c-contact-form__row {
      display: flex;
    }
  }

  .u-no-bees {
    display: none;
  }
</style>
