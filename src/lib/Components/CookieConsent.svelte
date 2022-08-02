<script>
  import { onMount } from 'svelte';
  import Button from './Button.svelte';
  import { deleteCookies } from '$lib/helpers/cookie';

  let hide = true;
  $: hide;
  
  const cookieConsent = "CPR-cookie-consent";
  
  onMount(() => {
    const cc = localStorage[cookieConsent];
    if(!cc) hide = false;
  });
  
  const cookiesAcceptHandler = () => {
    localStorage[cookieConsent] = "true";
    gtag('consent', 'update', {
      'analytics_storage': 'granted'
    });
    hide = true;
  };
  
  const cookiesRejectHandler = () => {
    localStorage[cookieConsent] = "false";
    // Remove existing cookies if already set
    deleteCookies();
    hide = true;
  };
</script>

<div class="cookie-consent hide--{hide}">
  <div class="cookie-consent__content">
      <h3 class="u-type-h3">Cookies and your privacy</h3>
      <p class="cc_text">
        We take your trust and privacy seriously. <br/>
        Climate Policy Radar uses safe tracking cookies to analyse traffic to our website and improve your experience, <a href="/privacy-policy">read our cookie policy here</a>. You can reject them if you wish.
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

<style>
  .cookie-consent {
    position: fixed;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    max-width: 600px;
    background-color: var(--color-sky);
    /* background-color: var(--color-white); */
    border-radius: 30px;
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
