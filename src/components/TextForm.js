import React, {useState} from 'react';
import copy from "copy-to-clipboard";


export default function TextForm(props){
    const [text,setText] = useState(`Enter text here`);
    return(
        <>
        <div className="container">
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control" value={text} onChange={(event) => {
                    // console.log("On Change");
                    setText(event.target.value);
                }} id="myBox" rows="4"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={() => {
                // console.log("Upper case was clicked" + text);
                let newText = text.toUpperCase();
                setText(newText);
            }}>Convert Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={() => {
                let newText = text.toLowerCase();
                setText(newText);
            }}>Convert Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={() => {
                let newText = " ";
                setText(newText);
            }}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={() => {
                copy(text);
                alert(`you have copied "${text}"`)
            }}>Copy Text</button>
            <button className="btn btn-primary max-1" onClick={() =>{
                setText(text.replace(/\s+/g, ' ').trim());
            }}>Remove Space</button>

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
