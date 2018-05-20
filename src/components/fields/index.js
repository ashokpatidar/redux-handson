import React from 'react';
import cx from 'classname';
import '../RegisterForm.css';
import {Field} from 'redux-form';
//import ReactJson from 'react-json-view';

const getValidityClassName = (meta) => {
    if(meta.asyncValidating){
        return 'async-validating'
    }
    if(meta.active){
        return;
    }
    if(meta.touched && meta.invalid){
        return 'invalid';
    }
    if(meta.touched && meta.valid){
        return 'valid';
    }
}

export const CustomInput = props => {
    const {label, input, type, meta} = props;
    return(
        <div className={cx('custom-input-container',
        {'flex-row-reverse':type ==='check-box'},
        {dirty:meta.dirty},
        {'async-validating':meta.asyncValidating},
        getValidityClassName(meta)
        )}>
            <label>{label}</label>
            <input {...input} type={type} autoFocus={props.autoFocus}/>
            {meta.error && meta.touched && !meta.active && <div className='feedback-text error-text'>{meta.error}</div>}
            {/* <ReactJson src={props.meta} theme="monokai"/> */}
        </div>
    )
}

export const CustomSelect = props => {
    const {label, input, type, meta} = props;
    return (
        <div>
            <label>{label}</label>
            <select {...input} >

                <option value=""></option>
                <option value="tab">Tab</option>
                <option value="space">Space</option>
                </select>
                {meta.error && meta.touched && <div>{meta.error}</div>}
                {/* <ReactJson src={props.meta} /> */}
        </div>
    )
}

export const discounts = ({fields}) => (
   
        <div className='custom-field-array-container'>
            {fields.map((code, index)=> (
                <div key={index} className="field-array-item">
                    
                    <Field name={code} type="text" component={CustomInput} label={`Discount Code #${index + 1}`} autoFocus/>
                    <button type="button" onClick={()=>fields.remove(index)}>remove</button>

                    
                </div>
            ))}
            <button type="button" onClick={()=>fields.push()}>Add {!fields.length?'Discount code(s)': 'Another'}</button>
        </div>
    
)

// export const discounts = ({ fields }) => (
//     <div className="custom-field-array-container">
//       {fields.map((code, index) => (
//         <div key={index} className="field-array-item">
//           <Field
//             name={code}
//             type="text"
//             component={CustomInput}
//             label={`Discount Code #${index + 1}`}
//             autoFocus
//           />
//           <button type="button" onClick={() => fields.remove(index)}>
//             &times;
//           </button>
//         </div>
//       ))}
//       <button type="button" onClick={() => fields.push()}>
//         Add {!fields.length ? 'Discount Code(s)' : 'Another'}
//       </button>
//     </div>
//   );

