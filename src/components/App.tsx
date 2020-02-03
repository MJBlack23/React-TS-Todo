import * as React from 'react'

import Todos from './Todos'

export default class App extends React.Component{
  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <Todos />
          </div>
        </div>
      </section>
    )
  }
}