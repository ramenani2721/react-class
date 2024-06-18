import React, {useState} from 'react'
import DisplayVehicals from './DisplayVehicals'

export default function Vehicals() {
    const [vehicals, setvehacils] = useState([
        {
            name:"scooty",
            pic:"https://bd.gaadicdn.com/processedimages/honda/activa-6g/source/activa-6g65e80a97062a4.jpg",
            description: "honda active 6g",
            


        },
        {
           name:" Kwid car",
            description:"renault kwid", 
           pic:"https://imgd.aeplcdn.com/1200x900/n/cw/ec/141125/kwid-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80",
            
            
        },
        {
            name:"Royal Enfield",
            pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnRNTruREaP_cLhQNHlcPCUpLtJp_cHRmBQw&s",
            description:"it is a royal enfield bike 360",
           
        }
    ])
  return (
    <div>
      {
         <div>
                <DisplayVehicals myvehicals={vehicals}/>
         </div>
      }
    </div>
  )
}
