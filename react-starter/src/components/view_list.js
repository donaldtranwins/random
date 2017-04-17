import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchTodos } from '../actions/index';

class ViewList extends Component {

    componentWillMount(){
        this.props.fetchTodos();
    }

    render(){
        console.log("ViewList Todos: ", this.props.todos);

        const list = this.props.todos.map((item, index) => {
            return (
                <li key={index} className={item.complete? 'text-success' : 'text-danger' }><Link to={`/todo/${item._id}`}>{item.title}</Link>{item.complete ? ' (Completed)' : ''}</li>
            )
        });

        return (
            <div>
                <hr/><h1>List of To Dos</h1>
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