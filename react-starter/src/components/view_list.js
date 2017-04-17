import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTodos } from '../actions/index';

class ViewList extends Component {

    getTodos(){
        this.props.fetchTodos();
    }

    render(){
        console.log("ViewList Todos: ", this.props.todos);

        const list = this.props.todos.map((item, index) => {
            return (
                <li key={index}>{item.title}</li>
            )
        });

        return (
            <div>
                <h1>List of To Dos</h1>
                <button onClick={ () => this.getTodos() }>GET THE LIST</button>
                <ul>
                    {list}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        todos: state.todos.all
    }
}

export default connect(mapStateToProps, {fetchTodos: fetchTodos})(ViewList);