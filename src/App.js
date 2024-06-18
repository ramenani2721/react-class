import React from 'react'
import {BrowserRouter,Routes,Route}from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Navigation from './Navigation'
export default function App() {
  return (
     <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
    
  )
}





// import {useState} from 'react'
// import Props from './Props'
// import List from './List'
// import Vehicals from './Vehicals'
// import Fruits from './Fruits'
// import UserData from './UserData'
// function App(){
//   const [name,setname]=useState('nana')
//   const [color,setcolor]=useState('red')
//   const [age,setage]=useState('21')
//   const [loves,setloves]=useState('lavanya')
//   return(
//     <div>
//       <UserData/>
//       {/* <Fruits/>
//        <Vehicals/>
//       <List/> */}
//       {/* <p>good afternoon</p>
//       <h1>this is lavys</h1>
//       <p>{name} favourit {color} age is {age} he loves {loves}</p>
//       <Props studentName="lavys" studentRollNo="1"/>
//       <Props studentName="jashu" studentRollNo="2"/>
//       <Props studentName="nana" studentRollNo="3"/> */}

//     </div>
//   )
// }


// export default App