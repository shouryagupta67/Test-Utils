import React, { useState } from 'react'

export default function About() {

    const [myStyle,setmyStyle]= useState(
        {
            color: "white",
            backgroundColor:"black",
     
         }
    ) 
     const [btntext,setbtnText] =useState('enable dark mode')

   const   toggleStyle=()=>{
        if(myStyle.color=="white"){
            setmyStyle({
                color:"black",
                backgroundColor: 'white',
                border: '2px solid black',
             
            })
            setbtnText("enable Dark Mode")
        }
        else{
            setmyStyle({
                color:"white",
                backgroundColor: 'black',
                border: '2px solid white',
            })
            setbtnText("enable Light Mode");
        }
    }
   
  return (
    <div className="container" style={myStyle}>
        <h1>About us</h1>
   <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        What is Testutils?
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">TestUtils is a text-based App Use for manipulating the texts.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      What is the use of Testutils?
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">TestUtils is Used for Manipulate your Text According To user Choice like captilize The letters and many more.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        How We can use TestUtisl?
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">We can use Testutils first type your Text in the box and click on the buttons you want.</div>
    </div>
  </div>
</div>
<div className="container my-3">
<button onClick={toggleStyle} type="button" class="btn btn-primary">{btntext}</button></div>
    </div>
  )
}
