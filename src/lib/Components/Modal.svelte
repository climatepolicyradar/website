<script>
  import { modalStore } from '$lib/stores/theme';
  import Overlay from './Overlay.svelte';

  export let theme = 'light';
  export let size = 'lg';
  export let open = false;
</script>

{#if open}
  <Overlay />

  <div class="c-modal c-modal--{theme} c-modal--{size}">
    <button class="c-modal__close" on:click={() => modalStore.closeAll()}>
      <span />
    </button>
    <div class="c-modal__content">
      <slot />
    </div>
  </div>
{/if}

<style>
  .c-modal {
    position: fixed;
    z-index: 101;
    top: 50%;
    left: 50%;
    max-width: 90%;
    max-height: 90vh;
    overflow-y: auto;
    overscroll-behavior: contain;
    border-radius: 30px;
    transform: translate(-50%, -50%);
    width: 90%;
    max-width: 1280px;
  }

  .c-modal--md {
    padding: 32px;
  }

  .c-modal--lg {
    padding: 60px 36px 36px;
  }

  @media (min-width: 768px) {
    .c-modal {
      padding: 64px;
    }
  }

  .c-modal--light {
    color: var(--color-indigo);
    background-image: linear-gradient(147.98deg, #ebf2ff 14.7%, #ffffff 26.53%);
    box-shadow: 0 0 120px rgba(255, 255, 255, 0.32);
  }

  .c-modal--dark {
    color: #fff;
    background-color: var(--color-indigo);
  }

  .c-modal__close {
    position: absolute;
    display: flex;
    top: 32px;
    right: 32px;
    width: 44px;
    height: 44px;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: 0;
    border-radius: 100%;
    cursor: pointer;
    appearance: none;
  }

  @media (max-width: 767px) {
    .c-modal__close {
      position: fixed;
    }
  }

  .c-modal__close span {
    display: block;
    position: relative;
    z-index: 2;
    width: 18px;
    height: 2px;
    background-color: var(--color-indigo);
  }

  .c-modal__close:hover span {
    background-color: #fff;
  }

  .c-modal__close::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 48px;
    height: 48px;
    background: linear-gradient(
      134.5deg,
      rgba(50, 35, 50, 1) 0%,
      rgba(31, 147, 255, 1) 0%,
      rgba(255, 255, 255, 1) 53%
    );
    border-radius: 50%;
    z-index: 0;
    transform: translate(-2px, -2px);
    transition: transform 0.2s ease;
  }

  .c-modal__close:hover::before {
    transform: translate(-2px, -2px) rotate(-180deg);
  }

  .c-modal__close::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 44px;
    height: 44px;
    background-color: #fff;
    border-radius: 50%;
    z-index: 1;
    transition: background-color 0.2s ease;
  }

  .c-modal__close:hover::after {
    background-color: var(--color-indigo);
  }
</style>
