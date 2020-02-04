import * as React from 'react'
import moment from 'moment'

import Todos from './Todos'
import Todo from '../types/Todo'

export enum DisplayType {
  Todo = 'todo',
  Completed = 'completed'
}

interface Props {}

interface State {
  todos: Todo[]
  newTodo: string
  searchText: string
  view: DisplayType
}

export type AnchorClick = React.MouseEvent<HTMLAnchorElement>

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
      ],
      newTodo: '',
      searchText: '',
      view: DisplayType.Todo
    }
  }
  
  updateTodoText = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.persist()

    this.setState(() => ({
      newTodo: event.target.value
    }))
  }

  appendTodo = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.persist()

    this.setState(state => ({
      todos: [ ...state.todos, App.createNewTodo(state.newTodo, state.todos)],
      newTodo: '',
    }))
  }

  completeTodo = (id: number, newValue: boolean): (e: AnchorClick) => void => {
    return (event: AnchorClick): void => {
      event.persist()

      this.setState(state => ({
        todos: state.todos.map(todo => ({
          ...todo,
          completed: todo.id === id ? newValue : todo.completed
        }))
      }))
    }
  }

  deleteTodo = (id: number): (e: React.MouseEvent<HTMLButtonElement>) => void => {
    return (event: React.MouseEvent<HTMLButtonElement>): void => {
      event.persist()

      this.setState(state => ({
        todos: state.todos.filter(todo => todo.id !== id)
      }))
    }
  }

  updateSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.persist()

    this.setState(() => ({
      searchText: event.target.value
    }))
  }

  toggleView = (view: DisplayType): (e: AnchorClick) => void => {
    return (event: AnchorClick): void => {
      event.persist()

      this.setState(() => ({
        view
      }))
    }
  }

  applySearch = (): Todo[] => {
    const { todos, searchText, view } = this.state

    return todos.filter(todo =>
      todo.description.toLowerCase()
      .includes(searchText.toLowerCase()))
      .filter(todo => {
        switch (view) {
          case DisplayType.Todo:
            return !todo.completed
          case DisplayType.Completed:
            return todo.completed
        }
      })
  }

  private static createNewTodo = (newTodo: string, todos: Todo[]): Todo => ({
    id: App.nextId(todos),
    description: newTodo,
    createdAt: moment(),
    completed: false
  })

  private static nextId = (todos: Todo[]): number =>
    todos.reduce((acc: number, todo: Todo) => acc > todo.id ? acc : todo.id, 0) + 1

  render(): JSX.Element  {
    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <Todos 
              view={this.state.view}
              todoText={this.state.newTodo}
              todos={this.applySearch()}
              searchText={this.state.searchText}

              updateSearchText={this.updateSearch}
              updateTodoText={this.updateTodoText}
              appendTodo={this.appendTodo}
              completeTodo={this.completeTodo}
              deleteTodo={this.deleteTodo}
              updateView={this.toggleView}
            />
          </div>
        </div>
      </section>
    )
  }
}