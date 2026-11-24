import React, { useState } from 'react'

export default function TextFrom(props) {
const handelUpClick = () => {
  let newText = text.toUpperCase();
  console.log("UpperCase");
  setText(newText);
}
const handelLowClick =() =>{
  let newText =text.toLowerCase();
    console.log("LowerCase");
  setText(newText);
}
const handelOrg =() =>{
    console.log("Original");
  setText(originalText);
}
const handelClear =() =>{
  let newText = '';
    console.log("Clear ");
  setText(newText);
}

const Enter = (e) => {
    setText(e.target.value);
      console.log("User Entering Text");
    setOriginalText(e.target.value);
}

// const Privew = () => {
//   console.log("Preview");
//   let newtext = text.toHandelGrammar();
// setPreviewText(newtext);
// }
const Privew = () => {
    setPreviewText(text);
}

const pRemove = () => {
    setPreviewText('');
}

    const[text, setText] = useState('');
    const [originalText, setOriginalText] = useState('Enter Your text Here ');
    const[ previewText, setPreviewText] = useState('');
  return (  <>
    <h3 style={{textAlign: 'center' ,color: props.mode ==='dark'?'rgb(161 166 166)':'white' }}>{props.heading}</h3>
<div className="form-field" style={{ marginTop: '20px', alignItems: 'center', }} >
  <textarea className="form-control" id="exampleFormControlTextarea2" value={text} rows="8" placeholder="Enter your text here..." style={{width: '100%', backgroundColor: props.mode ==='dark'?'rgb(161 166 166)':'white',color: props.mode ==='dark'?'white':'rgb(161 166 166)' }}  onChange={Enter}></textarea>
</div>


<div className="btn my-2" style={{width: '100%', display: 'flex',height: '100px',alignItems: 'center', backgroundColor:'darkgray', borderRadius:'30px'}}>
      

    <div className="btn-group" style={{width: '100%', display: 'flex', justifyContent: 'space-around'}}>
        <button type="button" className= "btn-solid theme-primary mx-2" style={{borderRadius: '20px', backgroundColor: '#65705a9f', color: 'white',height: '50px'}} onClick={handelUpClick}>Upper Case</button>
        <button type="button" className="btn-solid theme-secondary mx-2" style={{borderRadius: '20px', backgroundColor: '#65705a9f', color: 'white',height: '50px'}} onClick={handelLowClick} >Lower Case</button>
        <button type="button" className="btn-outline theme-primary mx-2" style={{borderRadius: '20px', backgroundColor: '#65705a9f', color: 'white',height: '50px'}} onClick={handelOrg}>Original</button>
        <button type="button" className="btn-outline theme-secondary mx-2" style={{borderRadius: '20px', backgroundColor: '#65705a9f', color: 'white',height: '50px'}} onClick={handelClear}>clear</button>
        <button type="button" className="btn-outline theme-secondary mx-2" style={{borderRadius: '20px', backgroundColor: '#65705a9f', color: 'white',height: '50px'}} onClick={Privew}>Preview</button>

    </div>
  </div>

  <div className="info my-2">
    <h4>YOur Text Summary IS here</h4>
    <p>{text.length} Characters, {text.split(" ").length-1} Words </p>
    <p>Time You Like get to read The Text : {(text.split(" ").length*0.08)-0.08} Seconds</p>
    <span>
  <h2>Preview Of Your Text</h2>
  <div className="privew my-2">
    {previewText}
    <button className="privewRemove" style={{borderRadius: '20px', backgroundColor: '#65705a9f', color: 'white',height: '50px', width: '100px'}} onClick={pRemove} >Remove Preview</button>

  </div>
</span>
  </div>
</> )
}


