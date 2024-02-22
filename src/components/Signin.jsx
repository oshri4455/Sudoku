import React ,{useState} from 'react'
import './Signin.css'

import { Link, useNavigate } from 'react-router-dom'


export default function Signin(props) {
const [userName,setUserName] = useState('')
const [password ,setPassword] = useState('')

const nav = useNavigate()

const signIn = ()=>{
  props.userName.map((val)=>{
    if(userName != val.email ){
      document.getElementById('messege1').innerHTML = 'user name or Password Eror';
      return
    
        }
        if(password != val.password){
          document.getElementById('messege1').innerHTML = 'user name or Password Eror';
          return
        }
        else{
         
          nav('/menu')
      
        }
      })
  if(userName === props.email ){
nav('/menu')
  }
  if(password === props.password){
    nav('/menu')
  }
  else{
    document.getElementById('messege1').innerHTML = 'user name or Password Eror';
    return

  }
}
  return (
    <div>
        <h1 id="title">Sudoku </h1>
  <div id='Enter'>


<h1 id='TitelSudouku' style={{textAlign:'center'}} >Login</h1>
<br />

<input onChange={(e)=>{setUserName(e.target.value)}} id="userName" class="login" name="email" type="text" placeholder="Enter your Email"></input>
<br />
<br />
<input onChange={(e)=>{setPassword(e.target.value)}} id="password" class="login" name="password" type="password" placeholder="Enter your Password" ></input>
<br />
<br />
<button id='click' onClick={()=>{signIn(userName,password)}}>Sign In</button>

<Link  to={'/signup'} ><a style={{position:'relative',top:'10px',textAlign:'center',fontSize:'30px',color:'blue',alignItems:'center'}} href="">sign Up?</a></Link>

<h1 id="messege1"></h1>  
</div>
    </div>
  )
}
