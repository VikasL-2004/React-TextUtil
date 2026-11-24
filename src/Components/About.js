import React from 'react'
import { useState } from 'react'

export default function About() {
  const[mode,setMode]=useState({
    backgroundColor: 'Black',
    color: 'White'
  })
  
    const[btnText,setBtnText]=useState("Enable Light Mode");

 const Enter =()=>{
  if(mode.color ==="White"){
    setMode({
  backgroundColor: "White",
  color: "Black",
    });
    setBtnText('Enable Dark Mode');
  }
  else if(mode.color ==="Black"){
    setMode({
  backgroundColor: "Black",
  color: "White",
});
    setBtnText('Enable Light Mode');
  }

 }
  return (
    <>
    <button type="button" class="btn btn-light" onClick={Enter} style={mode}>{btnText}</button>

        <div className='accordion my-3' style={mode}>
  <details className="accordion-item" name="accordionExample" open>
    <summary className="accordion-header" style={mode}>
      Accordion Item #1
      <svg className="accordion-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m2 5 6 6 6-6"/></svg>
    </summary>
    <div className="accordion-body"style={mode}>
      <strong>This is the first item’s accordion body.</strong> It is shown by default because the <code>open</code> attribute is present. The native element handles all the show/hide logic without any JavaScript. You can put any HTML content within the <code>.accordion-body</code>.
    </div>
  </details>
  <details className="accordion-item" name="accordionExample">
    <summary className="accordion-header" style={mode}>
      Accordion Item #2
      <svg className="accordion-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m2 5 6 6 6-6"/></svg>
    </summary>
    <div className="accordion-body" style={mode}>
      <strong>This is the second item’s accordion body.</strong> The <code>name</code> attribute groups this with other accordion items. When you open this item, any other open item in the same group will close automatically.
    </div>
  </details>
  <details className="accordion-item" name="accordionExample">
    <summary className="accordion-header" style={mode}>
      Accordion Item #3
      <svg className="accordion-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m2 5 6 6 6-6"/></svg>
    </summary>
    <div className="accordion-body" style={mode}>
      <strong>This is the third item’s accordion body.</strong> This exclusive accordion behavior is built into the browser—no Bootstrap JavaScript required. Just use matching <code>name</code> attributes on your  elements.
    </div>
  </details>
</div>
      
    </>
  )
}

