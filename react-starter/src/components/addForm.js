import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class AddForm extends Component {

    addTodo(values){
        console.log("form submitted", values);
    }

    render(){
        const { handleSubmit } = this.props;

        return (
            <div>
                <h2>Add a to do item</h2>
                <form onSubmit={handleSubmit( (formValues) => { this.addTodo(formValues) } )}>
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
export default AddForm;