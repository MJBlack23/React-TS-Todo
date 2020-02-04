import * as React from 'react'

interface Props {
  todoText: string
  updateTodoText: (e: React.ChangeEvent<HTMLInputElement>) => void
  appendTodo: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export default (props: Props) => (
  <div className="section">
    <div className="columns">
      <div className="column is-10">
        <input
          type="text"
          className="input"
          placeholder="Next on your list..."
          value={props.todoText}
          onChange={props.updateTodoText}
        />
      </div>

      <div className="column is-2">
        <button
          className="button is-success is-inverted"
          onClick={props.appendTodo}
        >
          <i className="fas fa-check is-size-5" />
        </button>
      </div>
    </div>
  </div>
)