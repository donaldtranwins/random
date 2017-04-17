import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { addTodo } from '../actions/index';

class AddForm extends Component {

    static contextTypes = {
        router: PropTypes.object
    };

    addTodoItem(values){
        console.log("form submitted", values);
        this.props.addTodo(values).then( () => {
            this.context.router.push('/');
        });
    }

    render(){
        const { handleSubmit } = this.props;

        return (
            <div>
                <hr/><h2>Add a to do item</h2>
                <form onSubmit={handleSubmit( (formValues) => { this.addTodoItem(formValues) } )}>
                    <div className="form-group">
                        <label>Title</label>
                        <Field name="title" component="input" type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Details</label>
                        <Field name="details" component="input" type="text" className="form-control"/>
                    </div>
                    <button className="btn btn-outline-success">Add Item</button>
                </form>
            </div>
        )
    }
}
AddForm = reduxForm({
    form: 'addForm'
})(AddForm);

export default connect (null, { addTodo : addTodo })(AddForm);