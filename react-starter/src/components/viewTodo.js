import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getOneTodo } from '../actions/index';

class ViewTodo extends Component {

    componentWillMount(){
        this.props.getOneTodo(this.props.params.id);
    }

    render(){
        console.log("View Todo: ", this.props.todo);
        const { todo } = this.props;
        if (!todo){
            return <h3>Loading...</h3>
        }
        return (
            <div>
                <h4>{todo.title}</h4>
                <p>Details: {todo.details}</p>
                <p>Completed: {todo.complete}</p>
                <p>Created: {todo.created}</p>
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        todo: state.todos.single
    }
}

export default connect(mapStateToProps, { getOneTodo: getOneTodo })(ViewTodo);