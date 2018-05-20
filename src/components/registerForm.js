import React, {Component} from 'react';
import {Field, FieldArray, reduxForm} from 'redux-form';
import {CustomInput, CustomSelect, discounts} from './fields';
import {required, maxLength, minLength, matchPassword, asyncValidate} from '../validation';
import capitalize from 'capitalize';
class RegisterForm extends Component {
    render(){

        let {handleSubmit} = this.props;

        return (
            <form onSubmit={handleSubmit}>
                <div>
                    
                    <Field name="fname" component={CustomInput} type="text" label="First Name" validate={[required]} normalize={capitalize}/>
                </div>
                <div>
                    
                    <Field name="lname" component={CustomInput} type="text" label="Last Name" validate={[required]} normalize={capitalize}/>
                </div>
                <div>
                    
                    <Field name="password" component={CustomInput} type="password" label="Password" validate={[required]}/>
                </div>
                <div>
                    
                    <Field name="confirmpassword" component={CustomInput} type="password" label="Confirm Password" validate={[required, matchPassword]}/>
                </div>
                
                <div>
                    
                    <Field name="username" component={CustomInput} type="text" label="User Name" validate={[required, minLength, maxLength]}/>
                </div>
                <div>
                    
                    <Field name="preference" component={CustomSelect} label="Prefered Formating">
                        
                    </Field>
                </div>
                <div>
                    
                    <Field name="newslatter" component={CustomInput} type="checkbox" label="Sign up to Newslatter"/>
                </div>
                <div>
                    
                    <FieldArray name="discountCodes" component={discounts} type="checkbox" label="Sign up to Newslatter"/>
                </div>
                <button>Submit</button>
            </form>
        );
    }
}

RegisterForm = reduxForm({
    form: 'register',
    //validate
    asyncValidate,
    asyncBlurFields:['fname']
})(RegisterForm)

export default RegisterForm;