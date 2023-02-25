import React ,{useState} from 'react'

const Textform = (props) => {
    const handleupclick=()=>{
        
        let newText=text.toUpperCase();
         setText(newText);
         props.showAlert("text has been changed to uppercase","success")
    }
    const handlelowclick=()=>{
      setText(text.toLocaleLowerCase());
      props.showAlert("text has been changed to lowecase","success")
    }
    const handleonchange=(event)=>{
        setText(event.target.value)
        props.showAlert("text has been written","success")

    }
    const handleclearclick=()=>{
      setText(" ")
      props.showAlert("cleared","success")

    }
    const[text,setText]=useState("enter the text");
  return (
    <div>
        <h1 style={{color:props.mode=="light"?"dark":"white"}}>{props.heading}</h1>
<div className="mb-3" style={{color:props.mode=="dark"?"white":"black"}}>
  <label  className="form-label">{props.title}</label>
  <textarea className="form-control" value={text} id="exampleFormControlTextarea1" rows="3" onChange={handleonchange} style={{backgroundColor:props.mode=='light'?"white":"grey",color:props.mode=='light'?"black":"white"}}></textarea>
</div>

<button className='btn btn-primary mx-1' onClick={handleupclick}>Uppercase</button>
<button className='btn btn-primary mx-1' onClick={handlelowclick}>Lowercase</button>
<button className='btn btn-primary mx-1' onClick={handleclearclick}>Clear Chat</button>


 <div className="container"  style={{color:props.mode=="dark"?"white":"black"}}>
  <h2>Your Text Summary</h2>
  <p>{text.split(" ").length} words and {text.length}letters</p>
  <p>{0.008*text.split(" ").length}times to read</p>
  <h2>Preview</h2>
  <p>{text.length>0?text:"Enter the text here"}</p>
 </div>

    </div>
  );
}

export default Textform
