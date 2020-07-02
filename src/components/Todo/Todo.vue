<script>
  import Input from '../Input/Input.vue';
  import TodoItem from './TodoItem.vue';
  import { nanoid } from 'nanoid';

  export default {
    name: "Todo",
    components: {
      Input,
      TodoItem
    },
    data() {
      return {
        value: null,
        taskList: [],
        dates: []
      }
    },
    methods: {
      addTask() {
        const d = new Date();
        const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

        if (!this.value) return;

        this.taskList.unshift({
          id: nanoid(),
          text: this.value,
          done: false,
          date: d.toLocaleDateString(undefined, dateOptions)
        });

        this.value = null;

        this.dates = [...new Set(this.taskList.map(e => e.date))];

        this.$store.state.listOfTask = this.taskList;
      },

      toggleDone(id) {
        this.taskList.map(el => {
          el.id === id ? el.done = !el.done : '';
        })

        this.$store.state.listOfTask = this.taskList;
      },

      remove(id) {
        this.taskList = this.taskList.filter(el => {
          return id !== el.id;
        });

        this.$store.state.listOfTask = this.taskList;
      }
    }
  }
</script>

<template>
  <div class="todo">
    <div class="todo__grid">
      <Input type="text" v-model="value" @onEnter="addTask" />
    </div>
    <div class="todo__list">
      <div v-for="date in dates" :key="date">
        <h5 v-if="taskList.length > 0" class="todo__date">{{date}}</h5>
        <template v-for="item in taskList">
          <TodoItem
            v-if="date === item.date"
            :key="item"
            :done="item.done"
            :task="item.text"
            :id="item.id"

            @check="toggleDone"
            @remove="remove"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .todo {
    padding: 2rem;

    &__grid {
      padding-top: 2rem;
      padding-bottom: 2rem;
    }

    &__date {
      font-size: 5rem;
      color: black;
      margin-top: 1rem;
      margin-bottom: 2rem;
    }

    &__list {
      & > div {
        display: grid;
        row-gap: 2rem;
      }
    }
  }
</style>
