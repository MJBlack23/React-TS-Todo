import * as React from 'react'
import Todo from '../types/Todo'

interface Props {
  todo: Todo
}

export default (props: Props) => (
  <a
    className="panel-block"
    onClick={() => {
      console.log("Toggle item completed")
    }}
  >
    <div className="container-fluid">
      <nav className="level">
        {/* Left Side */}
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

        {/* Right Side */}
        <div className="level-right">
          <div className="level-item has-text-right">
            <div>
              <button
                className="button is-danger is-inverted"
                onClick={() => {
                  console.log('Delete pressed')
                }}
              >
                <i className="fas fa-trash is-size-5" />
              </button>
              <p className="is-italic has-text-weight-light is-size-7">
                Created a few minutes ago
              </p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </a>
)