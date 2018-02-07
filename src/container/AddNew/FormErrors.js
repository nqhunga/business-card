import React from 'react';
import {AlertEx} from './AddNew.style';


export const FormErrors = ({formErrors}) =>
  <div className='formErrors'>
    {Object.keys(formErrors).map((fieldName, i) => {
      if(formErrors[fieldName].length > 0){
        return (
          <AlertEx color="danger" key={i}>{fieldName} {formErrors[fieldName]}</AlertEx>
        )
      } else {
        return '';
      }
    })}
  </div>
