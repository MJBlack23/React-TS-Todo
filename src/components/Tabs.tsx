import * as React from 'react'

import { DisplayType, AnchorClick } from './App'

interface Props {
  view: DisplayType
  updateView: (v: DisplayType) => (e: AnchorClick) => void
}

export default (props: Props) => (
  <div className="panel-tabs">
    <a
      className={props.view === DisplayType.Todo ? "is-active" : ""}
      onClick={props.updateView(DisplayType.Todo)}
    >
      Todo
    </a>
    <a
      className={props.view === DisplayType.Completed ? "is-active" : ""}
      onClick={props.updateView(DisplayType.Completed)}
    >
      Completed
    </a>
  </div>
)