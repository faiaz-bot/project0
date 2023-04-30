import React,{useState} from "react";

export default function TextForm(props){
    const handleUpClick = ()=>{
        // console.log("Upper case was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }

    const [text,setText] = useState(`Enter text here`);
    return(
        <>
        <div className="container">
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="4"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert Lowercase</button>

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
