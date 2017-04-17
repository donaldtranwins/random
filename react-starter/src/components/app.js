import React, { Component } from 'react';
import AddItem from './add_item';
import DisplayList from './display_list';
import axios from 'axios';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            todos: []
        };
    }

    componentWillMount(){
        console.log('here comes the component');

        this.getTodos();
    }

    getTodos(){
        axios.post(`http://scottbowlerdev.com/api/getTodos?key=\\i;love?%you'"\`sc♥tt /`).then(
            response => {
                console.log('response is: ', response);
                console.log('something' + ' ' + 3*3 + ' ' + 'something');
                console.log(`something ${3*3} something`);
                const {todos} = response.data;
                this.setState({
                    todos: [...todos]
                })
            }).catch(err =>{
            console.log('There was an error! ', err);
        });
    }

    addTodoItem(item){
        const todoItem = {
            title: item,
            details: 'I love you Sc♥tt'
        };
        axios.post(`http://scottbowlerdev.com/api/addTodo?key=\\i;love?%you'"\`sc♥tt /`, todoItem).then(
            response => {
                console.log(`add item response`,response);
                this.getTodos();
            }).catch(err => {
                console.log(`ERROR!`,err);
            }
        );
    };

    deleteItem(index){
        const { todos } = this.state;
        todos.splice(index,1);
        this.setState({todos});
    }

    render() {
        return(
            <div className="container">
                <h1>Todo List</h1>
                <AddItem handleItemAdd={ (item) => {this.addTodoItem(item)}} />
                <DisplayList todoList={this.state.todos} handleDeleteItem={ (index) => this.deleteItem(index) }/>
            </div>
        )
    }
}
export default App;
