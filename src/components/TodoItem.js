import React, { Component } from 'react'

export default class TodoItem extends Component {
  render() {
    return (
      <div> <li>{this.props.todo.title}</li></div>
    )
  }
}
