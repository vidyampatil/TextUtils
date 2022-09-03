import React,{useState} from "react";

export default function TextForm(props){
    const handleUpclick = ()=>{
       console.log("you have clicked on handleupclick"+ text);
       let newText = text.toUpperCase();
       setText(newText)
       props.showAlert("Text changes to uppercase..!", "Success")
       document.getElementById("btnClr").style.backgroundColor = '#0b2b5a';
    }

    const handleDownclick = ()=>{
        console.log("you have clicked on handleupclick"+ text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Text changes to lowercase..!", "Success")
     }

     const clearText = ()=>{
        console.log("you have clicked on handleupclick"+ text);
        let newText = '';
        setText(newText)
        props.showAlert("Text Cleared..!", "Success")
     }

     
    const handleCopy =()=>{
       var text = document.getElementById("myBox");
       text.select();
       navigator.clipboard.writeText(text.value);
       props.showAlert("Copied to Clipboard..!", "Success")
    }
    
    const handleExtraspaces =()=>{
        var newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Unwamted space removed..!", "Success")
     }

    const handleOnchange =(event)=>{
        console.log("on change");
        setText(event.target.value)
    }

    const [text,setText]= useState("");
    return(
        <>
        <div className="container" style={{color:props.mode === 'dark'?'white':'#0b2b5a'}}>
        <div className="mb-3 mt-3">
            <h4>{props.heading}</h4>
            <textarea className="form-control" value={text} onChange={handleOnchange} id="myBox" rows="8" style={{backgroundColor:props.mode === 'dark'?'gray':'light',color:props.mode === 'dark'?'white':'#0b2b5a'}} />
            </div>
            <button className='btn btn-primary'  style={{backgroundColor:props.mode === 'dark'?'gray':'light',color:props.mode === 'dark'?'white':'#0b2b5a'}} onClick={handleUpclick}>Convert To Uppercase</button>
            <button className='btn btn-primary mx-3' style={{backgroundColor:props.mode === 'dark'?'gray':'light',color:props.mode === 'dark'?'white':'#0b2b5a'}} onClick={handleDownclick}>Convert To Lowercase</button>
            <button className='btn btn-primary mx-2' style={{backgroundColor:props.mode === 'dark'?'gray':'light',color:props.mode === 'dark'?'white':'#0b2b5a'}} onClick={clearText}>Clear Text</button>
            <button className='btn btn-primary mx-2' style={{backgroundColor:props.mode === 'dark'?'gray':'light',color:props.mode === 'dark'?'white':'#0b2b5a'}} onClick={handleCopy}>Copy Text</button>
            <button className='btn btn-primary mx-2' style={{backgroundColor:props.mode === 'dark'?'gray':'light',color:props.mode === 'dark'?'white':'#0b2b5a'}}  onClick={handleExtraspaces}>Remove Extra Space</button>
        </div>
        <div className="container my-2" style={{color:props.mode === 'dark'?'white':'#0b2b5a'}}>
            <h3>Your Text Summary</h3>
            <p>{text.split(" ").length} words,{text.length} characters</p>
            <p>{0.008 * text.split(" ").length}Minutes to read</p>
            <h3>Preview</h3>
              {text.length>0?text:"Enter something in the textbox above to preview it"}
        </div>
        </>
    );
}