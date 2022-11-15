
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signin from './components/Signin';
import SignUp from './components/SignUp';
import {useState} from 'react'
import Menu from './components/Menu';
import EasyPage from './components/EasyPage';
import MediumPage from './components/MediumPage'
import HardPage from './components/HardPage'



function App() {
  const [userName,setuserName] = useState ([])

  const addUser = (firstName,lastName,email,password,confirmPassword)=>{
  setuserName([...userName,{firstName:firstName,lastNme:lastName,email:email,password:password,confirmPassword:confirmPassword}])
  }


  return (
    <div className="App">
    <BrowserRouter>

    <Routes>
<Route path='/' element = {<Signin  userName = {userName}   />}  />
<Route path='/signup' element = {<SignUp addUser = {addUser} userName = {userName} />}  />
{userName.map((val,index)=>{
  return <Route path='/menu' element = {<Menu email = {val.emaiil} index = {index} password = {val.password} firstName = {val.firstName} lastName = {val.lastName}  />}  />
})}
<Route path='/easy' element = {<EasyPage   />} />
<Route path='/medium'  element = {<MediumPage   />}   />
<Route path='/hard' element = {<HardPage   />}   />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
