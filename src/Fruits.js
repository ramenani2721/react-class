import React, {useState} from 'react'
import Frts1 from './Frts1'

export default function Fruits() {
    const [Fruits, setfruits] = useState([
        {
            name:"apple",
            color:"red",
            pic:"https://media.istockphoto.com/id/185262648/photo/red-apple-with-leaf-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=gUTvQuVPUxUYX1CEj-N3lW5eRFLlkGrU_cwwwOWxOh8="
        },
        {
            name:"banana",
            color:"yellow",
            pic:"https://5.imimg.com/data5/SELLER/Default/2022/12/EK/NP/CN/49293026/fresh-banana-fruit.webp"
        },
        {
            name:"grapes",
            color:"green",
            pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqN2RNEH9Zrcl3ovJ_hxM7fwprwnCIaQJK2Q&s"
        }
    ])
  return (
    <div>
       <div>
      {
         <div>
                <Frts1 myfruits={Fruits}/>
         </div>
      }
    </div>
    </div>
  )
}
