const validate = (inputs) => {

  const errors = {};
  if (!inputs.email) {
      errors.email = "Can't be empty";
  } else if (
   
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(inputs.email)
  ) {
      errors.email = "Please use a valid email address";
  }
  
  if(!inputs.name ){
      errors.name = "Can't be empty";
  }

    if(inputs.phone && !/^\d{10}$/i.test(inputs.phone) ){
      errors.phone = "Please use a valid phone number"
      
    }
  
   if(!inputs.message ){
      errors.message = "Can't be empty"
  }
  return errors;
}
export default validate;