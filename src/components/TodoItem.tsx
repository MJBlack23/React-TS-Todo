import * as React from 'react'
import Todo from '../types/Todo'

import { AnchorClick } from './App'

type Changeable = AnchorClick | React.ChangeEvent<HTMLInputElement>

interface Props {
  todo: Todo
  completeTodo: (id: number, newValue: boolean) => (e: Changeable) => void
  deleteTodo: (id: number) => (e: React.MouseEvent<HTMLButtonElement>) => void
}

export default (props: Props) => (
  <a
    className="panel-block"
    onClick={props.completeTodo(props.todo.id, !props.todo.completed)}
  >
    <div className="container">
      <nav className="level">
        {/* Left Side */}
        <div className="level-left">
          <div className="level-item">
            <label className="checkbox">
              <input
                type="checkbox"
                checked={props.todo.completed}
                onChange={props.completeTodo(props.todo.id, !props.todo.completed)}
              />
            </label>
          </div>

          <div className="level-item">
            <span className="is-size-4">
              {props.todo.description}
            </span>
          </div>
        </div>

        {/* Right Side */}
        <div className="level-right">
          <div className="level-item has-text-right">
            <div>
              <button
                className="button is-danger is-inverted"
                onClick={props.deleteTodo(props.todo.id)}
              >
                <i className="fas fa-trash is-size-5" />
              </button>
              <p className="is-italic has-text-weight-light is-size-7">
                Created {props.todo.createdAt.fromNow()}
              </p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </a>
)