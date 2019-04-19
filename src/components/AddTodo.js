import React, { Component } from 'react';

class AddTodo extends Component {

    state = {
        title : ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title:''});
    }

    onChange = (e) => {
    this.setState({
        [e.target.name]:e.target.value
    })
    }


    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display:'flex', backgroundColor:'#A8A8A8' }} >
                <input onChange={this.onChange}
                       style={{flex:'10',padding:'5px'}}
                       type="text"
                       placeholder="Add Todo..."
                       value={this.state.title}
                       name="title"/>
                       <input
                           type="submit"
                           value="submit"
                           style={{flex:'1' , color:'white'}}
                       />
            </form>
        )
    }
}
export default AddTodo;
