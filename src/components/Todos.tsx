import * as React from 'react'

import TodoItem from './TodoItem'
import AddNewItem from './AddNewItem'
import Search from './Search'
import Tabs from './Tabs'
import Todo from '../types/Todo'

interface Props {
  todos: Todo[]
}

export default (props: Props) => (
  <article className="column is-half is-offset-one-quarter">
    <div className="panel is-info">
      <div className="panel-heading is-size-4">
        Todo's
      </div>

      <Tabs />

      <Search />

      {props.todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
        />
      ))}

      <AddNewItem />
      
    </div>
  </article>
)