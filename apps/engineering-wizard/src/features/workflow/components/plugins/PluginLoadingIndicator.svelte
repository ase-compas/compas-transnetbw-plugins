<script lang="ts">
  import Spinner from '../../../../components/shared/Spinner.svelte';

  interface Props {
    message?: string;
  }

  let { message = 'Loading...' }: Props = $props();
</script>

<div class="plugin-loading">
  <Spinner size="40px" color="var(--primary-base, #4a7a7f)" />
  <span class="message">{message}</span>
</div>

<style>
  .plugin-loading {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  .message {
    font-size: 1rem;
    color: #333;
  }
</style>
