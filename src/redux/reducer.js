import { combineReducers } from "redux"

import todoListReducer from "../components/TodoList/todoListSlice"
import filterReducer from "../components/Filters/filterSlice"

// const rootReducer = (state = {}, action) => {
//   return {
//     filters: filterReducer(state.filters, action),
//     todoList: todoListReducer(state.todoList, action),
//   }
// }

const rootReducer = combineReducers({
  filters: filterReducer,
  todoList: todoListReducer,
})

export default rootReducer
