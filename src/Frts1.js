import React from 'react'

export default function Frts1(props) {
  return (
    <div>
       {
        props.myfruits.map((f)=>(
            <div>
                <p>name:{f.name}</p>
                <p>color:{f.color}</p>
                <img src= {f.pic} alt={f.name} width="25%"/>


            </div>
          ))
      }
    </div>
  )
}
