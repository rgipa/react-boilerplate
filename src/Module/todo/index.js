import { observable, flow } from 'mobx'
import axios from 'axios'

const state = observable({
  todos: [],
  selectedTodo: null,
})

const store = {
  state,

  fetchTodos: flow(function* () {
    const { data } = yield axios.get('/json/todos.json')

    return (state.todos = data)
  }),

  fetchTodo: flow(function* ({ id }) {
    const { data } = yield axios.get(`/json/todo-${id}.json`)

    return (state.selectedTodo = data)
  }),
}

export default store
