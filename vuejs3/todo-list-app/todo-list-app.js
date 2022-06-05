const TodoItem = {
  props: ['todo'],
  template: `<li>{{ todo.text }}</li>`
}

//const DeleteTodoButtton
//const EditTodoButton
//const TodoListFooter
//const ClearTodosButton
//const TodoListStatistics

const AddTodoButton = {
  props: ['add-todo'],
  template: `<button>{{ title }}</button>`,
  data() {
    return {
      title: 'Add'
    }
  }
}

const TodoList = {
  data() {
    return {
      todoList: [
        { id: 0, text: 'Buy Vegetables'},
        { id: 1, text: 'Buy Cheese'},
        { id: 2, text: 'Buy whatever else humans are supposed to eat'},
        { id: 3, text: 'Buy something else'}
      ]
    }
  },
  components: {
    TodoItem,
    AddTodoButton
  }
}

Vue.createApp(TodoList).mount('#todo-list-app')
