import React, {useState} from 'react'



export default function TextForm(props) {
    const [text, setText] = useState('gsdfgsdgf');

    let NwordLenth = text.split(' ').filter(function(n) { return n !== '' }).length;
    
    let Nchars = text.length;
    let Ttr = 0.008 * NwordLenth;
    console.log(text);
    const UpvertClick = () => {
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const LowvertClick = () => {
        // console.log("Uppercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }
    
    const ClearClick = () => {
        setText("");
    }

    function toTitleCase(str) {
        return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
    
    }
    const CapvertClick = () => {
        setText(toTitleCase(text));
    }

    const CopyClick = () => {
    var copyText = document.getElementById("myBox");

    copyText.select();

    navigator.clipboard.writeText(copyText.value);
    }

    const RemooveSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    
  return (
    <>  
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="12"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={UpvertClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={LowvertClick}>Convert to LowerCase</button>
            <button className="btn btn-success mx-2" onClick={ClearClick}>Clear Text</button>
            <button className="btn btn-success mx-2" onClick={CapvertClick}>Capatelize Text</button>
            <button className="btn btn-success mx-2" onClick={CopyClick}>Copy Text</button>
            <button className="btn btn-success mx-2" onClick={RemooveSpaces}>Remove Extra Spaces</button>

        </div>
        <div className="container my-4">
            <h2>Your Text Summary</h2>
            <p>{NwordLenth} words and {Nchars} Characters</p>
            <p>{Ttr} Minutes Read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
    </>
  )
}
