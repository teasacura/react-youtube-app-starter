import React, { Component } from 'react';
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class SearchBar extends Component {
  constructor(){
    super()

    this.state = {
      value: ""
    }

  }

  handleChange(e, val){
    // e.persist()
    this.setState({value: val.value}, ()=>this.props.handleSearch(this.state.value))
  }

  // handleSubmit () => {
  //
  // }

  render(){
    return (
      <div>
        <Search type="text" onSearchChange={_.debounce((e, val)=>this.handleChange(e, val), 500)}/>
      </div>
    )
  }
}

export default SearchBar;
