import React, { useEffect } from 'react'
import './slider.css'
import { AiFillCaretLeft} from 'react-icons/ai'
import { AiFillCaretRight} from 'react-icons/ai'
import image1 from './image1.jpg'
import image2 from './image2.jpeg'
 import image3 from './image3.png'
import image4 from './image4.jpg'

const Slider = () => {
let[index,setIndex]=React.useState(0)

let arr=[image1,image2,image3,image4]

// useEffect(()=>{
//   let handleKeys=(event)=>{
//     switch(event.keyCode){
// case 37:
//   left()
//   break;
//   case 39:
//     right()
//     break;
//     }
//   }
//   window.addEventListener("keydown",handleKeys)

//   return()=>{
// window.removeEventListener("keydown",handleKeys)
//   }
// },[])


  function left(){
  setIndex(index-1)
  if(index===0){
    setIndex(3)
}
  }
  function right(){
    setIndex(index+1)
    if(index===arr.length-1){
      setIndex(0)
    }
  }

  let style={
    background:`url(${arr[index]}) center/cover`,
  }
  return (
    <div>
      <h1>Image Slider</h1>
    <div className='container' id="container" style={style} >
        <div className='wrapper'>
        <span onClick={left} ><AiFillCaretLeft/></span>
        <span onClick={right}><AiFillCaretRight/></span>
        </div>
        </div>
    </div>
  )
}

export default Slider