import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            paddingLeft: '10px',
            borderBottom: '1px #ccc solid',
            borderRadius: '5px',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }
   
  render() {
      const {id, title} = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p style={{paddingTop: '15px'}}>
        <input type="checkbox" className="custom-checkbox" style={{marginRight: '10px'}} onChange={this.props.markComplete.bind(this, id)}/> 
        {title}
        <button type="button" className="btnDel" onClick={this.props.delete.bind(this, id)}>x</button></p>
      </div>
    )
  }
}

//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem;
