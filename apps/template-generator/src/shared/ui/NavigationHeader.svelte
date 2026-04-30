<script lang="ts">
  import TabBar from '@smui/tab-bar';
  import Tab, { Icon, Label } from '@smui/tab';

  interface Props {
    activeTab?: string;
    title?: string;
  }

  const tabs = ['Data Types', 'Default Types', 'Settings'];
  const iconByTab: Record<string, string> = {
    'Data Types': 'table_view',
    'Default Types': 'star',
    'Settings': 'settings',
  };

  let {
    activeTab = $bindable(tabs[0]),
    title = 'Navigation',
  }: Props = $props();
</script>

<div class="navigation-header">
  <span class="navigation-header__title">{title}</span>
  <TabBar tabs={tabs} bind:active={activeTab}>
    {#snippet tab(tab)}
      <Tab {tab} minWidth>
        <Icon class="material-icons">{iconByTab[tab]}</Icon>
        <Label>{tab}</Label>
      </Tab>
    {/snippet}
  </TabBar>
</div>

<style>
  .navigation-header {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid var(--base-01, #d7d7d7);
  }

  .navigation-header__title {
    font-size: var(--tg-font-size-small);
    color: var(--mdc-theme-text-secondary-on-background, #666);
    font-weight: var(--tg-font-weight-heading);
  }
</style>
