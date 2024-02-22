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

const SignUp = () => {
    // ביטוי רגולרי לאימות כתובת דוא"ל
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // בדיקת תקינות האימייל
    if (!re.test(String(email).toLowerCase())) {
        document.getElementById('messege').innerHTML = 'Please enter a valid email address';
        return;
    }

    // בדיקת תקינות השם הפרטי
    if (firstName.length < 2 || firstName.length > 20) {
        document.getElementById('messege').innerHTML = 'First name must be between 2 and 20 characters';
        return;
    }

    // בדיקת תקינות השם המשפחה
    if (lastName.length < 2 || lastName.length > 20) {
        document.getElementById('messege').innerHTML = 'Last name must be between 2 and 20 characters';
        return;
    }

    // בדיקת תקינות הסיסמה
    if (password.length < 2 || password.length > 10) {
        document.getElementById('messege').innerHTML = 'Password must be between 2 and 10 characters';
        return;
    }

    // בדיקה שהסיסמה ואימות הסיסמה תואמים
    if (password !== confirmPaswword) {
        document.getElementById('messege').innerHTML = 'Passwords do not match';
        return;
    }

    // אם התנאים עברו בהצלחה, מעבר לדף הבית
    nav('/');
}


  return (
    <div id='divs'>

<h2 style={{textAlign:'center',fontSize:'30px'}}>Sign Up</h2>
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
<button onClick={()=>{props.addUser(firstName,lastName,email,password,confirmPaswword);SignUp()}}  id='button' >Sign Up</button>







      
    </div>
  )
}
