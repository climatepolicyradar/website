<script>
  import { onMount } from 'svelte';
  import Wrapper from './Wrapper.svelte';

  let navBar;
  let navIndicator;
  let sections = {};

  onMount(() => {
    // Update sticky nav links when section intersects
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        let highestRatio = 0;
        let activeSection;

        const lastActive = document.querySelector(`.c-sticky-nav .is-active`);
        if (lastActive) {
          lastActive.classList.remove('is-active');
        }

        // Store index of intersectionRatio's
        entries.map((entry) => {
          const id = entry.target.getAttribute('id');
          sections[id] = {
            id: id,
            ratio: entry.intersectionRatio,
            passed: {
              top: entry.boundingClientRect.top < 0,
              half: entry.boundingClientRect.top < window.innerHeight * 0.5,
            },
            // entry: entry,
          };
        });

        Object.keys(sections).map((sectionId) => {
          const section = sections[sectionId];
          highestRatio = section.ratio > highestRatio ? section.ratio : highestRatio;
          

          if (highestRatio === section.ratio || (section.passed.half && !section.passed.top)) {
            activeSection = section.id;
          }
          // default if page not scrolled
          if(highestRatio === 0) {
            activeSection = Object.keys(sections)[0];
          }
        });
        //console.log('ACTIVE', activeSection);

        const currentlyActiveItem = document.querySelector(
          `.c-sticky-nav a[href="#${activeSection}"]`
        );
        currentlyActiveItem.classList.add('is-active');
        if (navIndicator) {
          navIndicator.style.transform = `translate(${currentlyActiveItem.offsetLeft}px, -50%)`;
          navIndicator.style.width = `${currentlyActiveItem.offsetWidth}px`;
          navIndicator.style.opacity = '1';
        }
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
      }
    );

    // Track all sections that have an `id` applied
    document.querySelectorAll('section[id]').forEach((section) => {
      sectionObserver.observe(section);
    });

    // Add [stuck] attr when stuck to top of viewport
    const stickyObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio < 1) {
          entry.target.classList.add('is-sticky');
        } else {
          entry.target.classList.remove('is-sticky');
        }
      },
      {
        rootMargin: '-40px 0px 0px 0px',
        threshold: [1],
      }
    );

    stickyObserver.observe(navBar);
  });
</script>

<div class="c-sticky-nav" bind:this={navBar}>
  <Wrapper type="standard">
    <nav class="c-sticky-nav__inner">
      <slot />
      <span class="c-sticky-nav__indicator" bind:this={navIndicator} />
    </nav>
  </Wrapper>
</div>

<style>
  .c-sticky-nav {
    position: sticky;
    top: 105px;
    z-index: 99;
    transform: translateY(-50%);
  }

  @media (min-width: 768px) {
    .c-sticky-nav {
      top: 170px;
    }
  }

  .c-sticky-nav__inner {
    position: relative;
    display: flex;
    padding: 16px;
    background: #ebf2ff;
    border-radius: 80px;
  }

  @media (max-width: 320px) {
    .c-sticky-nav__inner {
      padding: 8px;
    }
  }

  @media (min-width: 768px) {
    :global(.is-sticky) {
      pointer-events: none;
    }

    :global(.is-sticky .c-sticky-nav__inner) {
      background-color: transparent;
    }
  }

  :global(.c-sticky-nav a) {
    display: inline-flex;
    padding: 8px 16px;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    font-size: 14px;
    line-height: 31px;
    color: var(--color-indigo);
    border-radius: 30px;
    pointer-events: all;
    /* white-space: nowrap; */
    z-index: 1;
  }

  @media (min-width: 500px) {
    :global(.c-sticky-nav a) {
      padding: 8px 22px;
      font-size: 18px;
    }
  }

  :global(.c-sticky-nav a + a) {
    margin-left: 5px;
  }

  .c-sticky-nav__indicator {
    display: inline-block;
    content: '1';
    position: absolute;
    left: 0;
    top: 50%;
    width: 10px; /* updated dynamically */
    height: 47px;
    font-size: 18px;
    border-radius: 30px;
    background-color: #fff;
    opacity: 0; /* updated dynamically */
    transform: translate(12px, -50%); /* updated dynamically */
    transition: transform 0.3s ease, width 0.4s ease;
  }
</style>
