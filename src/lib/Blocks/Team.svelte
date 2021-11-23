<script>
  import { onMount } from 'svelte';
  import { modalStore } from '$lib/stores/theme';

  import CardsGrid from '$lib/Components/CardsGrid.svelte';
  import CardTeam from '$lib/Components/CardTeam.svelte';
  import Wrapper from '$lib/Components/Wrapper.svelte';
  import Modal from '$lib/Components/Modal.svelte';
  import Button from '$lib/Components/Button.svelte';
  import Heading from '$lib/Components/Heading.svelte';
  import CardTeamCta from '$lib/Components/CardTeamCta.svelte';
  import TeamProfile from '$lib/Components/TeamProfile.svelte';

  let activePerson;
  let activeFilter;
  

  const handleModal = (person) => {
    activePerson = person;
    $modalStore.team = true;
  };

  const handleFilter = (group) => {
    // Toggle behaviour
    // activeFilter = activeFilter === group ? false : group;

    // Simple tab behaviour
    activeFilter = group;

    if (activeFilter) {
      visibleMembers = members.filter((person) => person.group === activeFilter);
    } else {
      visibleMembers = members;
    }
  };

  onMount(() => {
    handleFilter('Team');
  });
  export let members;
  export let groups;
  let visibleMembers = members;
</script>

<div class="b-team">
  <Wrapper>
    <Heading>
      <h3 class="u-type-body-xxl">Our Team</h3>

      <div class="b-team__filter">
        {#each groups as group}
          <Button
            size="xs"
            color={activeFilter === group ? 'white' : 'sky-fade'}
            action={() => handleFilter(group)}
          >
            {group}
          </Button>
        {/each}
      </div>
    </Heading>
    
    <CardsGrid columnsTiny="1" columnsMobile="2" columnsTablet="3" columnsDesktop="4">
      {#each visibleMembers as person}
        <CardTeam
          name={person.name}
          role={person.role}
          image={person.image}
          bio={person.bio}
          action={() => handleModal(person)}
        />
      {/each}

      {#if activeFilter === 'Team'}
        <CardTeamCta />
      {/if}

    </CardsGrid>

    <Modal open={$modalStore.team} theme="light" size="md">
      {#if activePerson}
        <TeamProfile person={activePerson} />
      {/if}
    </Modal>
  </Wrapper>
</div>

<style>
  .b-team {
    padding: 64px 0;
    color: #fff;
    background-color: var(--color-indigo);
    min-height: 80vh;
  }

  @media (min-width: 321px) {
    .b-team {
      padding: 120px 0;
    }
  }

  @media (min-width: 768px) {
    .b-team {
      padding: 160px 0;
    }
  }

  @media (max-width: 767px) {
    .b-team__filter {
      margin-top: 24px;
    }
  }

  :global(.b-team__filter .c-button + .c-button) {
    margin-left: 8px;
  }

  @media (min-width: 768px) {
    :global(.b-team__filter .c-button + .c-button) {
      margin-left: 16px;
    }
  }

  @media (max-width: 767px) {
    :global(.b-team .c-heading) {
      align-items: flex-start;
      flex-direction: column;
    }
  }
</style>
