import React,{useState} from 'react'

export default function TextForm(props) {
    // setText("newText");
    const handleonchange = (event)=>{
        // console.log("on change")
        setText(
            event.target.value
        )
    }
    const handleonclick = ()=>{
        // console.log("changed change")
        var newtext = text.toUpperCase();
        setText(newtext);
        
    }
   
    const[text,setText] = useState("")
    return (
        <>
        <div>
   <h1>{props.text}</h1>
<div className="mb-3" >
  
  <textarea className="form-control" value = {text} style = {{backgroundColor: 'white'}}  onChange = {handleonchange} id="box" rows="3"></textarea>
  
</div>
<button className="btn btn-primary" onClick={handleonclick}>
    convert text
</button>
</div>
<div className="container">
    <h3>word counter</h3>
    <p> {text.split(" ").length} words and {text.length} letters</p>
    <h2>preview</h2>
    <p>{text}</p>
</div>
</>
  )
}
