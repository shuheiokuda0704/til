const ListRendering = {
  data() {
    return {
      todos: [
        { text: 'Learn JavaScript'},
        { text: 'Learn Vue'},
        { text: 'Build something awesome'},
        { text: 'Build ToDo App'}
      ]
    }
  }
}

Vue.createApp(ListRendering).mount('#list-rendering')
