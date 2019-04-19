import React, { Component } from 'react';
import PropTypes from "prop-types";
import Todos from "./Todos";

class TodoItem extends Component {
    getStyle() {
        return {
            background:'#D8D8D8',
            borderBottom:'1px #ccc dotted',
            color:'white',
            fontWeight:'bold',
            padding:'1px',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
            textDecorationColor: this.props.todo.completed ? '#A8A8A8' : 'none'
        }
    }

    render() {
        const { id, title } = this.props.todo;
     return (
         <div style={this.getStyle()}>
             <p> <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/> {' '}
                 {title}  <button onClick={this.props.DelTodo.bind(this,id)} style={BtnStyle}>x</button></p>
         </div>
     )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
};

const BtnStyle = {
    background: '#A8A8A8',
    color:'white',
    border:'none',
    padding: '6px 9px',
    borderRadius: '50%',
    cursor:'pointer',
    float:'right'
};
export default TodoItem;