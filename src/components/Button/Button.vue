<script>
  export default {
    name: "Button",
    props: {
      active: {
        default: false
      },
      disabled: {
        default: false
      },
      accent: {
        type: String,
        default: 'black'
      }
    },
    methods: {
      click() {
        this.$emit('click')
      }
    },
    computed: {
      buttonAccent() {
        return {
          '--button-color': this.accent
        }
      }
    }
  }
</script>

<template>
  <button
    type="button"
    class="button"
    :class="{
      'button--active': active,
      'button--disabled': disabled
    }"
    :tabindex="disabled ? -1 : null"
    :style="buttonAccent"
    @click="click"
  >
    <slot />
  </button>
</template>

<style lang="scss">
  .button {
    position: relative;
    display: block;
    min-width: 5rem;
    height: 5rem;
    padding: .5rem 1rem;
    border-width: .2rem;
    border-style: solid;
    border-color: transparent;
    font-family: inherit;
    font-size: 2.2rem;
    background-color: white;
    color: var(--button-color);
    border-radius: .6rem;
    line-height: 0;
    cursor: pointer;
    outline: none;
    box-shadow: 0 0 2rem 0 rgba(180, 180, 180, .4);

    &:hover,
    &:focus {
      border-color: var(--button-color);
    }

    &--active {
      background-color: var(--button-color);
      color: white;
    }

    &--active:hover {
      border-color: white;
    }

    &:disabled {
      opacity: .5;
      pointer-events: none;
    }
  }
</style>
