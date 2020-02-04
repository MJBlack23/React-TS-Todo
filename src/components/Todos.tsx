import * as React from 'react'

import TodoItem from './TodoItem'
import AddNewItem from './AddNewItem'
import Search from './Search'
import Tabs from './Tabs'
import Todo from '../types/Todo'

import { AnchorClick, DisplayType } from './App'

interface Props {
  todos: Todo[]
  todoText: string
  searchText: string
  appendTodo: (e: React.MouseEvent<HTMLButtonElement>) => void
  updateTodoText: (e: React.ChangeEvent<HTMLInputElement>) => void
  completeTodo: (id: number, newValue: boolean) => (e: AnchorClick) => void
  deleteTodo: (id: number) => (e: React.MouseEvent<HTMLButtonElement>) => void
  updateSearchText: (e: React.ChangeEvent<HTMLInputElement>) => void

  view: DisplayType
  updateView: (v: DisplayType) => (e: AnchorClick) => void
}

export default (props: Props) => (
  <article className="column is-half is-offset-one-quarter">
    <div className="panel is-info">
      <div className="panel-heading is-size-4">
        Todo's
      </div>

      <Tabs 
        view={props.view}
        updateView={props.updateView}
      />

      <Search
        searchText={props.searchText}
        updateSearchText={props.updateSearchText}
      />

      {props.todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          completeTodo={props.completeTodo}
          deleteTodo={props.deleteTodo}
        />
      ))}

      <AddNewItem
        todoText={props.todoText}
        updateTodoText={props.updateTodoText}
        appendTodo={props.appendTodo}
      />
      
    </div>
  </article>
)