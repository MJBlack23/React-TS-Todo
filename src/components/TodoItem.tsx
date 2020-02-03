import * as React from 'react'

export default props => (
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
              Make this thing dynamic
          </span>
          </div>
        </div>
      </nav>
    </div>
  </a>
)