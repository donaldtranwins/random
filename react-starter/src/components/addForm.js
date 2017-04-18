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

    renderInput({input, label, type, meta: { touched, error }} ){
        return (
            <div className={`form-group ${touched && error && 'has-danger'}`}>
                <label className="form-control-label">{label}</label>
                <input {...input} type={type} className={`form-control ${ touched && error && 'form-control-danger'}`}/>
                { touched && error && <div className="form-control-feedback">{error}</div> }
            </div>
        )
    }

    render(){
        const { handleSubmit } = this.props;

        return (
            <div>
                <hr/><h2>Add a to do item</h2>
                <form onSubmit={handleSubmit( (formValues) => { this.addTodoItem(formValues) } )}>
                    <Field name="title" component={this.renderInput} type="text" label="Title"/>
                    <Field name="details" component={this.renderInput} type="text" label="Details"/>
                    <button className="btn btn-outline-success">Add Item</button>
                </form>
            </div>
        )
    }
}

function validate(values) {
    const errors = {};

    if (!values.title){
        errors.title = 'Please enter a title';
    }
    if (!values.details){
        errors.details = 'Please enter some details';
    }

    console.log('validate:', errors, values);
    return errors;
}


AddForm = reduxForm({
    form: 'addForm',
    validate
})(AddForm);

export default connect (null, { addTodo : addTodo })(AddForm);