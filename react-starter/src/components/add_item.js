import React, { Component } from 'react';


class AddItem extends Component {
    constructor(props){
        super(props);

        this.state = {
            todoItem: ''
        }
    }

    handleInputChange(event){
        const { value } = event.target;

        this.setState({
            todoItem: value
        });
    }


    handleFormSubmit(theheck){
        theheck.preventDefault();
        this.props.handleItemAdd(this.state.todoItem);
        this.setState({
            todoItem: ''
        });
    }

    render(){
        return (
            <div className="row justify-content-sm-center">
                <div className="col-sm-6">
                    <form onSubmit={ (what) => this.handleFormSubmit(what) }>
                    <div className="input-group">
                        <input className="form-control" type="text" onChange={ event => {this.handleInputChange(event)} } value={this.state.todoItem}/>
                        <span className="input-group-btn">
                            <button type="submit" className="btn btn-success">Add Item</button>
                        </span>
                    </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddItem;