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
  import Spacer from '$lib/Components/Spacer.svelte';

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

  const getGroups = () => {
    const groups = [];
    members.forEach((member) => {
      if (groups.indexOf(member.group) === -1) {
        groups.push(member.group);
      }
    })
    return groups;
  }

  onMount(() => {
    handleFilter('Team');
  });
  export let members;
  let visibleMembers = members;
  const groups = getGroups();

</script>

<div class="b-team">
  {#each groups as group}
  <Wrapper>
    
    <Heading>
      <h3 class="u-type-body-xxl">{group}</h3>
    </Heading>
    
    <CardsGrid columnsTiny="1" columnsMobile="1" columnsTablet="3" columnsDesktop="4">
      {#each members as person}
        {#if person.group === group}
          <CardTeam
            name={person.name}
            role={person.role}
            image={person.image}
            bio={person.bio}
            action={() => handleModal(person)}
          />
        {/if}
      {/each}

      {#if group === 'Team'}
        <CardTeamCta />
      {/if}

    </CardsGrid>

    <Modal open={$modalStore.team} theme="light" size="md">
      {#if activePerson}
        <TeamProfile person={activePerson} />
      {/if}
    </Modal>
  </Wrapper>
  <Spacer size="lg" />
  {/each}
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
