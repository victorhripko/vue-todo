<script>
  import Button from '../Button/Button.vue';
  import { CheckIcon, Trash2Icon } from 'vue-feather-icons';

  export default {
    name: "TodoItem",
    components: {
      Button,
      CheckIcon,
      Trash2Icon
    },
    props: {
      id: {
        type: String,
        default: null
      },
      task: {
        type: String,
        default: null
      },
      done: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      check() {
        this.$emit('check', this.id);
      },
      remove() {
        this.$emit('remove', this.id);
      }
    }
  }
</script>

<template>
  <div class="todo__task" :class="{'todo__task--done' : done }">
    <div class="todo__block">
      <Button @click="check" class="todo__btn" :active="done" accent="#4834d4">
        <CheckIcon />
      </Button>
      <p class="todo__text">
        {{task}}
      </p>
    </div>

    <Button @click="remove" accent="red">
      <Trash2Icon />
    </Button>
  </div>
</template>

<style lang="scss">
  .todo__task {
    position: relative;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr min-content;
    column-gap: 2rem;

    &--done {
      .todo__block {
        background-color: rgba(255, 255, 255, .1);
        box-shadow: 0 0 2rem 0 rgba(200, 200, 200, .1);
      }
      .todo__text {
        text-decoration: line-through;
        opacity: .5;
      }
    }
  }
  .todo__block {
    display: flex;
    align-items: center;
    padding: 1rem;
    box-shadow: 0 0 2rem 0 rgba(200, 200, 200, .5);
    border-radius: .6rem;
    border-width: .2rem;
    border-style: solid;
    border-color: transparent;
    background-color: white;
  }
  .todo__btn {
    flex-shrink: 0;
    margin-right: 2rem;
  }
  .todo__text {
    margin: 0;
    flex: 1 1 auto;
    font-size: 1.8rem;
    line-height: 1.6;
    font-family: inherit;
    color: black;
  }
</style>
