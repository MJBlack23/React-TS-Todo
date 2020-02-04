import * as React from 'react'

interface Props {
  searchText: string
  updateSearchText: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default (props: Props) => (
  <div className="panel-block">
    <p className="control has-icons-left">
      <input
        className="input is-info"
        type="text"
        placeholder="Search"
        value={props.searchText}
        onChange={props.updateSearchText}
      />
      <span className="icon is-left">
        <i className="fas fa-search" aria-hidden="true" />
      </span>
    </p>
  </div>
)