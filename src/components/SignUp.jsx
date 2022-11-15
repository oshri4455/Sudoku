import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './SignUp.css'



export default function SignUp(props) {
const [firstName,setFirstName] = useState('')
const [lastName,setLastName] = useState('')
const [email,setEmail]= useState('')
const [password,setPassword] = useState('')
const [confirmPaswword,setConfirmPassword] = useState('')

const nav=useNavigate()

const SignUp = ()=>{
  if(firstName < 2 ||firstName > 20 ){
    return 
}
if(lastName.length < 2 || lastName.length > 20){
    return 
}
if(email.indexOf('@') == -1){
    document.getElementById('messege').innerHTML = 'The values ​​must be entered correctly';
    return ;
}
if(email.indexOf('gmail') == -1 ){
    document.getElementById('messege').innerHTML = 'The values ​​must be entered correctly';
    return ;
}

if(password.length < 2 || password.length > 10){
 document.getElementById('messege').innerHTML = 'The values ​​must be entered correctly'
    return ;
}

    if(password != confirmPaswword){
        document.getElementById('messege').innerHTML = 'The values ​​must be entered correctly';
       return 
    }
    else{
nav('/')
    }



}


  return (
    <div id='divs'>
<form action="/signup" method="post" name="signup_form" onsubmit="return signUp()">

<label class="signup" for="">Enter your First Name : </label>
<input onChange={(e)=>{setFirstName(e.target.value)}} type="text" id="firstName"  class="signup" name="name" />
<br />
<br />
<label class="signup" for="">Enter your Last Name :</label>
<input onChange={(e)=>{setLastName(e.target.value)}} class="signup" name="lastName" type="text"></input>
<br />
<br />
<label className="signup" for="">Enter your Email :</label>
<input onChange={(e)=>{setEmail(e.target.value)}} type="text" className='signup' name='email'  />
<br />
<br />
<label class="signup" for="">Enter your Password :</label>
<input onChange={(e)=>{setPassword(e.target.value)}} class="signup" name="password" type="password"></input>
<br />
<br />
<label class="signup" for="">confirm Password :</label>
<input onChange={(e)=>{setConfirmPassword(e.target.value)}} class="signup" name="password" type="password"></input>
<br />
<br />
<input onClick={()=>{props.addUser(firstName,lastName,email,password,confirmPaswword);SignUp()}}  id='button' type="button"  value="Sign Up" />
<h1 id="messege"></h1>



</form>


      
    </div>
  )
}
