let nextTodoId = 0

export const addTodo = (text) => {
  return {
    type : 'ADD_TODO',
    id   : nextTodoId++,
    text
  }
}

export const toggleDelete = (id) => {
  return {
    type : "DELETE_ITEM",
    id   : id
  }
}