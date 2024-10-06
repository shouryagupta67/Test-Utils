import React, { useState } from 'react'

export default function About(props) {
      let myStyle={
        color:props.mode==='dark'?'white':'black',
        backgroundColor: props.mode==='dark'?'grey':'white',
        border:'2px solid',
        borderColor: props.mode==='dark'?'rgb(36 74 104)':'black',
      };
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

    </div>
  )
}
