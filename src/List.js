
import React, {useState} from 'react'

export default function List() {
    const [employees, setemployess] = useState([
        {
            name:"lavys",
            place:"chittoor",
            age:21
        },
        {
            name:"nana",
            place:"hyderbad",
            age:15
            
        },
        {
            name:"jashu",
            place:"tpt",
            age:21
        }
    ])
  return (
    <div>
        {
          employees.map((emp)=>(
            <div>
                <p>name:{emp.name}</p>
                <p>place:{emp.place}</p>
                <p>age:{emp.age}</p>
            </div>
          ))
        }
      
    </div>
  )
}
