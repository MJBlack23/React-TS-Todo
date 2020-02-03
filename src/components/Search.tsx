import * as React from 'react'

export default props => (
  <div className="panel-block">
    <p className="control has-icons-left">
      <input
        className="input is-info"
        type="text"
        placeholder="Search"
        onChange={() => {
          console.log("new search triggered")
        }}
      />
      <span className="icon is-left">
        <i className="fas fa-search" aria-hidden="true" />
      </span>
    </p>
  </div>
)