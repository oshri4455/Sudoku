import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'

export default function Menu(props) {
  return (
    <div id='divson'>
    <h1 id="level">Level difficulty</h1>    
<h3 id="user">{`welcome:${props.firstName}`}</h3>

<Link to={'/easy'}><button className='button'>Easy</button></Link> 
 <Link to={'/medium'}><button className='button'>Medium</button></Link> 
  <Link to={'/hard'}><button className='button'>Hard</button></Link>


    </div>
  )
}
