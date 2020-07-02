<script>
  import Todo from './components/Todo/Todo.vue';

  export default {
    components: { Todo }
  }
</script>

<template>
  <div id="app" class="app">
    <div class="app__main">
      <Todo />
    </div>
    <aside class="app__aside">
      <template v-if="this.$store.getters.countTodos">
        Count: {{ this.$store.getters.countTodos }}
        Done: {{ this.$store.getters.doneTodos }}
      </template>
    </aside>
  </div>
</template>

<style lang="scss">
  @import './assets/scss/global';

  .app {
    height: 100%;
    display: grid;
    grid-template-columns: 60% 40%;
    grid-template-areas: "main aside";

    &__main {
      grid-area: main;
      overflow-y: auto;
    }

    &__aside {
      grid-area: aside;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      font-size: 2vw;
    }
  }
</style>
