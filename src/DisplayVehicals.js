import React from 'react'
import './Vehicals.css'
export default function DisplayVehicals(props) {
  return (
    <div className='vehicle-parent'>
         {
        props.myvehicals.map((vehicle)=>(
            <div className='vechical'>
                <p><b>name:</b>{vehicle.name}</p>
                <p><b>description:</b>{vehicle.description}</p>
                <img src={vehicle.pic} alt={vehicle.name} width="25%"/>


            </div>
          ))
      }
        
    </div>
  )
}
