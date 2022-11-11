// import rootReducer from "./reducer"
// import { legacy_createStore as createStore } from "redux"
// import { composeWithDevTools } from "redux-devtools-extension"

// const composedEnhancers = composeWithDevTools()

// const store = createStore(rootReducer, composedEnhancers)

// export default store

//REDUX TOOLKIT
import { configureStore } from "@reduxjs/toolkit"

import todoListSlice from "../components/TodoList/todoListSlice"
import filterSlice from "../components/Filters/filterSlice"

console.log(todoListSlice)

const store = configureStore({
  reducer: {
    filters: filterSlice.reducer,
    todoList: todoListSlice.reducer,
  },
})

export default store
