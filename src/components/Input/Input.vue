<script>
  export default {
    name: "Input",
    props: {
      type: {
        type: String,
        default: "text"
      },
      palceholder: {
        type: String,
        default: null
      },
      disabled: {
        type: Boolean,
        default: false
      },
    },
    methods: {
      onEnter(e) {
        this.$emit('onEnter');
        e.target.value = null;
      }
    }
  }
</script>

<template>
    <input
      class="input"

      :type="type"
      :disabled="disabled"
      :palceholder="palceholder"
      :tabindex="disabled ? -1 : null"

      @input="$emit('input', $event.target.value)"
      @keydown.enter="onEnter($event)"
    />
</template>

<style lang="scss">
  .input {
    display: block;
    width: 100%;
    min-width: 0;
    height: 5rem;
    padding: .5rem 1.5rem;
    border-width: .2rem;
    border-style: solid;
    border-color: transparent;
    font-family: inherit;
    font-size: 1.8rem;
    background-color: white;
    color: black;
    border-radius: .6rem;
    line-height: 0;
    box-shadow: 0 0 2rem 0 rgba(200, 200, 200, .5);
    outline: none;

    &:hover,
    &:focus {
      border-color: black;
    }
    &:disabled {
      opacity: .5;
      pointer-events: none;
    }
  }
</style>
