import { writable } from 'svelte/store';

const mobileMenuOpen = writable(false);

const theme = writable({
  header: 'dark',
  footer: 'light',
});

const screenSize = writable({
  sm: true,
  md: false,
  lg: false,
});

const MODAL_DEFAULT = {
  cta: false,
  team: false,
};

const modalStore = writable(MODAL_DEFAULT);

modalStore.closeAll = () => modalStore.set( {
  cta: false,
  team: false,
});

export { theme, screenSize, modalStore, mobileMenuOpen };
