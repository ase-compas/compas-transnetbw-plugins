<script>
  export let label = "";
  export let value = "";

  function handleDateTimeChange(event) {
    value = event.target.value;
  }
</script>

<div class="custom-text-field">
  <input
    type="datetime-local"
    id="datetime-picker"
    bind:value={value}
    on:change={handleDateTimeChange}
    class="custom-text-field__input"
    placeholder=""
  />
  <label for="datetime-picker" class="custom-floating-label">{label}</label>
  <span class="custom-line"></span>
</div>

<style>
  .custom-text-field {
    position: relative;
    display: inline-block;
    width: 100%;
    max-width: 300px;
  }

  .custom-text-field__input {
    width: 100%;
    margin-top: 5px;
    padding: 14px 4px;
    font-size: 16px;
    border: none;
    border-bottom: 1px solid #aaa;
    background: transparent;
    outline: none;
  }

  .custom-floating-label {
    position: absolute;
    left: 4px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 16px;
    color: #aaa;
    pointer-events: none;
    transition: 0.2s ease all;
  }

  .custom-text-field__input:focus + .custom-floating-label,
  .custom-text-field__input:not(:placeholder-shown) + .custom-floating-label {
    top: 0;
    font-size: 12px;
    color: #6200ee;
  }

  .custom-line {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 100%;
    background-color: #6200ee;
    transform: scaleX(0);
    transition: transform 0.2s ease;
  }

  .custom-text-field__input:focus ~ .custom-line {
    transform: scaleX(1);
  }
</style>
