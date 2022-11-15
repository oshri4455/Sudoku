import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'

export default function Menu(props) {
  return (
    <div id='divson'>
<h1 id="user">{`welcome:${props.firstName}`}</h1>
<h1 id="level">Level difficulty</h1>  
<Link to={'/easy'}><button id='Easy'>Easy</button></Link>  <Link to={'/medium'}><button id='Medium'>Medium</button></Link>  <Link to={'/hard'}><button id='Hard'>Hard</button></Link>


    </div>
  )
}
