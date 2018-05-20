// export const validate = values => {
//     const errors = {
       
//     };

//     if(!values.fname) {
//         errors.fname = "first name is required";
//     }

//     if(!values.lname) {
//         errors.lname = "last name is required";
//     }

//     if(!values.username) {
//         errors.username = "user name is required";
//     }

//     return errors;
// };

export const required = value => value ? undefined : 'value is required';

export const minLength = value => value.length < 4 ? 'Value must be more then 4': undefined;
export const maxLength = value => value.length > 8 ? 'Value must be less then 8': undefined;

export const matchPassword = (value, allValue) => value === allValue.password ? undefined : "Password does not match";

export const asyncValidate = async values => {
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    await sleep(1000);
    if(['ashok','tina','harshita'].includes(values.fname)){
       return Promise.reject({fname:'User name already exist we check async'})

        }
}
