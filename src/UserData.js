import React, {useState} from 'react'

export default function UserData() {
    const [name,setname]=useState('')
    function submit(){
        console.log(name)
    }
  return (
    <div>
      <p>
        <input
        value={name}
        onChange={(e)=>setname(e.target.value)}
        placeholder='Enter name'/>
      </p>
      <button onClick={submit}>submit</button>
    </div>
  )
}
