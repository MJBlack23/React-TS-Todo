import * as React from 'react'
import moment from 'moment'

import Todos from './Todos'
import Todo from '../types/Todo'

interface Props {}

interface State {
  todos: Todo[]
}

export default class App extends React.Component<Props, State>{
  constructor(props) {
    super(props)
    
    this.state = {
      todos: [
        {
          id: 0,
          description: 'The first thing',
          completed: false,
          createdAt: moment().subtract(3, "hours")
        }
      ]
    }
  }

  render(): JSX.Element {
    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <Todos 
              todos={this.state.todos}
            />
          </div>
        </div>
      </section>
    )
  }
}