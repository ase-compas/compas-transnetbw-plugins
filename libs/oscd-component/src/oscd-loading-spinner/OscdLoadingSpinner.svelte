<script lang="ts">
  export let loadingDone: boolean = true;
  export let message: string = 'Loading...';
</script>

<style>
  .loading-spinner-container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }

  .loading-spinner {
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-top: 4px solid #3498db;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;
  }

  .loading-message {
    margin-top: 1rem;
    font-size: 1.5rem;
    color: white;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>

<div>
  {#if !loadingDone}
    <div class="overlay">
      <div class="loading-spinner-container">
        <div class="loading-spinner"></div>
        <span class="loading-message">{message}</span>
      </div>
    </div>
  {/if}
</div>
