<script lang="ts">
  interface Props {
    size?: string;
    color?: string;
    trackColor?: string;
  }

  let { size = '16px', color = 'currentColor', trackColor = 'rgba(0, 0, 0, 0.15)' }: Props = $props();
</script>

<span
  class="spinner"
  style={`width:${size}; height:${size}; border-color:${trackColor}; border-top-color:${color};`}
></span>

<style>
  .spinner {
    display: inline-block;
    box-sizing: border-box;
    border-style: solid;
    border-width: 2px;
    border-radius: 50%;
    animation: spinner-rotate 0.7s linear infinite;
  }

  @keyframes spinner-rotate {
    to { transform: rotate(360deg); }
  }
</style>
