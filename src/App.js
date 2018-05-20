import React, { Component } from 'react';
import RegisterForm from './components/registerForm';
import {SubmissionError} from 'redux-form';



class App extends Component {
  handleSubmit = (values) => {
    // if(['ashok','tina','harshita'].includes(values.fname)){
    //   throw new SubmissionError({
    //     fname:'User Name Already Taken'
    //   })
    // } else {
    //   alert(JSON.stringify(values, null, 4));
    // }
    alert(JSON.stringify(values, null, 4));
  };

  getInitialValues = () => {
    return {
      name:'APatidar',
      preference:'space',
      newslatter:true
    }
  }
  render() {
    return (
      <RegisterForm onSubmit={this.handleSubmit} initialValues={this.getInitialValues()}/>
    );
  }
}

export default App;
