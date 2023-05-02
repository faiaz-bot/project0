import React,{useState} from 'react';
import copy from "copy-to-clipboard";


export default function TextForm(props){
    const [text,setText] = useState(`Enter text here`);
    const [ copyText, setCopyText] = useState('')
    const handleUpClick = ()=>{
        // console.log("Upper case was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClClick = () =>{
        let newText = " ";
        setText(newText);
    }
    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
        setCopyText(event.target.value);

    }
    const copyOnClick = () =>{
        copy(copyText);
        alert(`you have copied "${copyText}"`)
    }

    return(
        <>
        <div className="container">
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="4"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClClick}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={copyOnClick}>Copy Text</button>

        </div>
            <div className="container my-3">
                <h1>Your text summery</h1>
                <p>{text.split(" ").length} words and {text.length} character</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
)
}
