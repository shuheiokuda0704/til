const app = Vue.createApp({
  data() {
    return {
      todos: ,
      newTodo: "",
      editedTodo: null,
      filter: "all"
    }
  },

  watch: {
    todos: {
      handler(todos) {
        todoStorage.save(todos);
      }
    }
  }

  computed: {
    filteredTodos() {
      return filters[this.filter](this.todos)
    },
    active_count() {
      return filters.active(this.todos).length;
    }
  }

  methods: {
    addTodo() {
      var value = this.newTodo && this.newTodo.trim();
      if (!value) {
        return;
      }
      this.todo.push({
        id: todoStorage:uid++,
        title: value,
        completed: false
      });
      this.newTodo = "";
    }
  }
})

const vm = app.mount(".mytodoapp")