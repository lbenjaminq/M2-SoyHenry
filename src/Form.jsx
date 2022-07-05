import React,{ useState } from 'react';
import Onclick from './onCLick';

export function validate(input){
  let errors = {}

  if(!input.username){
    errors.username = 'Username is required';
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    errors.username = 'Username is invalid';
  }

  if(!input.password){
    errors.password= 'Password is required'
  }else if(!/(?=.*[0-9])/.test(input.password)){
    errors.password= 'Password is invalid'
  }
  return errors;
} 



export default function  Form() {
  const [errors, setErrors] =useState({});
  const [input,setInput] = useState({
    username:'',
    password:''
  })

  const handleInputChange = function(e) {
  
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value
    }));

    //setInput(prev=>({...prev,[e.target.name]:e.target.value})) agrega al estado lo que ya tengo en el estado mas la nueva propiedad
  }

  function mostrar(){
    <Onclick usuario={input.username} password={input.password}/>
}
  return (
    <form>
    <div>
      <label>Username:</label>
      <input className={errors.username && 'danger'} type="text" name="username"  onChange={handleInputChange} value={input.username}/>
      {errors.username && (
      <p className="danger">{errors.username}</p>
    )}
    </div>
    <div>
      <label>Password:</label> 
      <input className={errors.password && 'danger'} type="password" name="password"  onChange={handleInputChange}
       value={input.password} />
      {errors.password && (
      <p className="danger">{errors.password}</p>
    )}
    </div>
    <button >enviar</button>
  </form>
  )
}

// errors.username && 'danger'    ====>>>> si se cumple lo primero se ejecuta los 2do asi funciona el AND