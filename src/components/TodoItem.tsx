import * as React from 'react'
import Todo from '../types/Todo'

interface Props {
  todo: Todo
}

export default (props: Props) => (
  <a className="panel-block">
    <div className="container-fluid">
      <nav className="level">
        <div className="level-left">
          <div className="level-item">
            <label className="checkbox">
              <input type="checkbox" />
            </label>
          </div>

          <div className="level-item">
            <span className="is-size-4">
              {props.todo.description}
          </span>
          </div>
        </div>
      </nav>
    </div>
  </a>
)