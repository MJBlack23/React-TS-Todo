import * as React from 'react'

import TodoItem from './TodoItem'
import AddNewItem from './AddNewItem'
import Search from './Search'
import Tabs from './Tabs'

export default props => (
  <article className="column is-half is-offset-one-quarter">
    <div className="panel is-info">
      <div className="panel-heading is-size-4">
        Todo's
      </div>

      <Tabs />

      <Search />

      <TodoItem />
      <TodoItem />

      <AddNewItem />
      
    </div>
  </article>
)