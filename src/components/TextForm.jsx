import React,{useState} from 'react'


export default function TextForm(props) {
  
  
  const[text,setText]=useState('');
  const handerClick=()=>{
    let newText=text.toUpperCase();
    setText(newText);
    props.ShowAlert(" Converted to Uppercase",'success')
  }
  const handleonChange=(event)=>{
  
    setText(event.target.value);
   
  }
  const handerlowClick=()=>{
    let newText=text.toLowerCase();
    setText(newText)
   
  }
  const handerClear=()=>{
    let newText="";
    setText(newText)
  }
  const handleCopy=()=>{
    var text= document.getElementById("exampleFormControlTextarea1");
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
  }
  return (
    <>
     
  <div className="container"  style={{color: props.mode===`dark`?`white`:`black`}}>
    <h1 className='mb-2'>{props.title}</h1>
   
    <textarea class="form-control texta" id="exampleFormControlTextarea1" style={{backgroundColor: props.mode===`dark`?`#13466e`:`white`,color: props.mode===`dark`?`white`:`#042743`}} value={text} onChange={handleonChange} rows="8"></textarea>
    <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={handerClick}>Convert To Uppercase</button>

    <button disabled={text.length===0}  className="btn btn-primary my-2 mx-3" onClick={handerlowClick}>Convert To Lowercase</button>
    <button disabled={text.length===0}  className="btn btn-primary my-2 mx-3" onClick={handerClear}>Clear</button>
    <button disabled={text.length===0}  className="btn btn-primary my-2 mx-3" onClick={handleCopy}>Copy</button>
  </div>
  <div className="container my-5" style={{color: props.mode===`dark`?`white`:`black`}}>
    <h1>Your Text Summary</h1>
    <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} Characters</p>
    <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length } Mintes To read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Nothing To Preview"}</p>
  </div>
  </>
  )
}
