const TodoItem = {
  props: ['todo'],
  template: `<li>{{ todo.text }}</li>`
}

const TodoList = {
  data() {
    return {
      groceryList: [
        { id: 0, text: 'Vegetables'},
        { id: 1, text: 'Cheese'},
        { id: 2, text: 'Whatever else humans are supposed to eat'},
        { id: 3, text: 'Something else'}
      ]
    }
  },
  components: {
    TodoItem
  }
}

Vue.createApp(TodoList).mount('#todo-list-app')
