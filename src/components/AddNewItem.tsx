import * as React from 'react'

export default props => (
    <div className="section">
      <div className="columns">
        <div className="column is-10">
          <input
            type="text"
            className="input"
            placeholder="Next on your list..."
            onChange={() => {
              console.log("received a new input...")
            }}
          />
        </div>

        <div className="column is-2">
          <button
            className="button is-success is-inverted"
            onClick={() => {
              console.log("add a new todo")
            }}
          >
            <i className="fas fa-check is-size-5" />
          </button>
        </div>
      </div>
    </div>
)