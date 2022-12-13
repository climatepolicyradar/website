<div class="b-content__wrapper">
  <slot />
</div>

<style>
  .b-content__wrapper :global(p),
  .b-content__wrapper :global(li),
  .b-content__wrapper :global(a),
  .b-content__wrapper :global(span) {
    font-size: 16px;
    line-height: 24px;
  }

  .b-content__wrapper :global(h3) {
    font-size: 24px;
    line-height: 28px;
    font-weight: 500;
  }

  @media only screen and (min-width: 720px) {
    .b-content__wrapper :global(h3) {
      font-size: 21px;
      line-height: 24px;
    }
  }

  .b-content__wrapper :global(a) {
    display: inline-block;
    position: relative;
    color: var(--color-indigo-600);
    font-weight: 500;
    text-decoration: none;
  }

  .b-content__wrapper :global(img) {
    max-width: 100%;
    border-radius: 30px;
  }

  .b-content__wrapper :global(a::after) {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: var(--color-indigo-600);
    bottom: 1px;
  }

  @media only screen and (min-width: 720px) {
    .b-content__wrapper :global(p),
    .b-content__wrapper :global(li),
    .b-content__wrapper :global(a),
    .b-content__wrapper :global(span) {
      font-size: 18px;
      line-height: 28px;
    }
  }

  .b-content__wrapper :global(p) {
    margin-bottom: 24px;
  }

  @media only screen and (min-width: 720px) {
    .b-content__wrapper :global(p) {
      margin-bottom: 32px;
    }
  }

  .b-content__wrapper :global(ol),
  .b-content__wrapper :global(ul) {
    margin-bottom: 70px;
  }
  
  .b-content__wrapper :global(ul) {
    padding-left: 20px;
  }
  
  .b-content__wrapper :global(ul.c-icon-list),
  .b-content__wrapper :global(ol) {
    padding-left: 0;
  }
  
  .b-content__wrapper :global(ol) {
    counter-reset: ordered-counter;
    list-style: none;
  }
  
  .b-content__wrapper :global(ol li) {
    counter-increment: ordered-counter;
  }
  
  .b-content__wrapper :global(ol li::before) {
    content: counter(ordered-counter);
    display: inline-flex;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    background-color: var(--color-grey);
    margin-right: 18px;
  }

  .b-content__wrapper :global(li) {
    margin-bottom: 20px;
  }

  .b-content__wrapper :global(ul li::marker) {
    color: var(--color-blue-500);
    font-size: 22px;
  }

  .b-content__wrapper :global(h1),
  .b-content__wrapper :global(h2),
  .b-content__wrapper :global(h3),
  .b-content__wrapper :global(h4),
  .b-content__wrapper :global(h5) {
    margin-top: 50px;
  }
  
  .b-content__wrapper :global(h2) {
    font-size: 21px;
    line-height: 27px;
    font-weight: 400;
    margin-bottom: 24px;
  }

  .b-content__wrapper :global(.c-card__title) {
    margin: 0;
    font-size: 24px;
    line-height: 28px;
    font-weight: 400;
  }

  @media only screen and (min-width: 720px) {
    .b-content__wrapper :global(h2) {
      font-size: 36px;
      line-height: 42px;
    }
  }

  .b-content__wrapper > :global(p:first-child) {
    font-size: 21px;
    line-height: 24px;
    margin-top: 0;
  }

  .b-content__wrapper > :global(p:first-child a) {
    font-size: 21px;
    line-height: 24px;
  }

  @media only screen and (min-width: 720px) {
    .b-content__wrapper > :global(p:first-child) {
      font-size: 24px;
      line-height: 32px;
    }
  }

  @media only screen and (min-width: 720px) {
    .b-content__wrapper > :global(p:first-child a) {
      font-size: 24px;
      line-height: 32px;
    }
  }

  /* Block specific styles */
  @media only screen and (max-width: 767px) {
    .b-content__wrapper :global(.c-icon-list-item--horizontal) {
      flex-direction: column; 
    }
  }
</style>