import * as React from 'react'

export default props => (
  <div className="panel-tabs">
    <a
      className="is-active"
      onClick={() => {
        console.log("Active selected")
      }}
    >Todo</a>
    <a
      className=""
      onClick={() => {
        console.log("Completed selected")
      }}
    >Completed</a>
  </div>
)