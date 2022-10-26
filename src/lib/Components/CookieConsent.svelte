<script>
  import { onMount } from 'svelte';
  import Button from './Button.svelte';
  import { setCookie, getCookie } from '$lib/helpers/cookie';
  import Hotjar from '$lib/Components/Hotjar.svelte';

  let hide = true;
  let loadHotjar = false;
  $: hide, loadHotjar;
  
  const cookieConsent = "CPR-CC";
  
  onMount(() => {
    const cc = getCookie(cookieConsent);
    if(!cc) hide = false;
    if(cc === "true") loadHotjar = true;
  });
  
  const cookiesAcceptHandler = () => {
    setCookie(cookieConsent, true);
    gtag('consent', 'update', {
      'analytics_storage': 'granted'
    });
    hide = true;
    loadHotjar = true;
  };
  
  const cookiesRejectHandler = () => {
    setCookie(cookieConsent, false);
    hide = true;
  };
</script>

<div class="cookie-consent hide--{hide}">
  <div class="cookie-consent__content">
      <h3 class="u-type-h3">Cookies and your privacy</h3>
      <p class="cc_text">
        We take your trust and privacy seriously. Climate Policy Radar uses cookies to make our site work optimally, analyse traffic to our website and improve your experience. Read our <a href="/privacy-policy">privacy and cookie policy</a> to learn more. By accepting cookies you will help us make our site better, but you can reject them if you wish.
      </p>
      <div class="cookie-consent__buttons">
        <div class="cookie-consent__accept">
          <Button color="blue" size="cta" action={cookiesAcceptHandler}>Accept</Button>
        </div>
        <div class="cookie-consent__reject">
          <Button color="white" size="cta" action={cookiesRejectHandler}>Reject</Button>
        </div>
      </div>
  </div>
</div>

{#if loadHotjar}
  <Hotjar />
{/if}

<style>
  .cookie-consent {
    position: fixed;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    max-width: 600px;
    background-color: var(--color-sky);
    border-radius: 30px;
    z-index: 99;
  }
  .hide--true {
    display: none;
  }
  .cc_text {
    line-height: 1.4;
  }
  .cc_text a {
    text-decoration: underline;
  }
  .cookie-consent__content {
    padding: 16px 24px;
  }
  .cookie-consent__buttons {
    display: flex;
    place-content: flex-end;
  }
  .cookie-consent__reject {
    margin-left: 16px;
  }
</style>
