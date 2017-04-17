import React, { Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class ViewTodo extends Component {

    static contextTypes = {
        router: PropTypes.object
    };

    componentWillMount(){
        this.props.getOneTodo(this.props.params.id);
    }

    toDateString(timestamp){
        return new Date(parseInt(timestamp)).toLocaleDateString();
    }

    toTimeString(timestamp){
        return new Date(parseInt(timestamp)).toLocaleTimeString();
    }

    handleDelete(id){
        this.props.deleteTodo(id).then(() => {
            this.context.router.push('/');
        });
    }

    handleToggle(id){
        this.props.toggleComplete(id);
    }

    render(){
        const { todo } = this.props;
        if (!todo){
            return <h3>Loading...</h3>
        }
        return (
            <div>
                <hr/><h4>{todo.title}</h4>
                <p>{todo.details}</p>
                <p className={todo.complete ? 'text-success' : 'text-danger' }>{todo.complete ? 'To Do Item Complete' : 'To Do Item Open'}</p>
                <p>Created: {this.toDateString(todo.created) + " " + this.toTimeString(todo.created)}</p>
                <p className={todo.complete ? 'text-success' : 'text-danger' }>{todo.complete ? `Completed: ${this.toDateString(todo.completed)} ${this.toTimeString(todo.completed)}` : 'Incomplete'}</p>
                <hr/>
                <button onClick={() => this.handleDelete(todo._id)} className="btn btn-outline-danger">Delete</button>
                <button onClick={() => this.handleToggle(todo._id)} className={todo.complete ? 'btn btn-success' : 'btn btn-outline-success' }>{todo.complete ? 'Completed' : 'Complete' }</button>
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        todo: state.todos.single
    }
}

export default connect(mapStateToProps,actions)(ViewTodo);