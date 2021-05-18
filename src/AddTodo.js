import React, { Component } from 'react'

export class AddTodo extends Component {

    //This is the value of the text input field and is updated as user types in a new value
    state = {
        title: ''
    }

    //Updates the 'title' state of the text input field
    onChange = (e) => this.setState({ title: e.target.value });

    //Submits the title value of input field to create new Todo
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
    };

  render() {
    return (
     <form style={{display: 'flex'}} onSubmit={this.onSubmit}>
         
         <input type="text" name="title" placeholder="Add Todo" className="input-group" style={{paddingLeft: '10px'}} value={this.state.title} onChange={this.onChange}/>
        
         <input type="submit" value="submit" className="btn 
         btn-outline-dark btn-lg" style={{flex: '1'}}/>

     </form>
    )
  }
}

export default AddTodo;
