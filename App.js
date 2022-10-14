import React,{useState} from "react";
import "./style.css";

export default function App() {
const [value,setValue]=useState([])
const [result,setResult]=useState([])

 console.log(value.length)


 const handle=()=>{
   if(value.length==9)
   {

     if(value[0]+ value[1]+ value[2]!=666 &&
      value[0]+ value[1]+ value[2]!=0 

       && value[0]+value[1]+value[2]<=900  && value[4]+value[5]<=99 &&value[4]!=0 )
   {

    setResult(value[0]+""+value[1]+""+value[2]+"-"+value[3]+""+value[4]+"-"+value[5]+""+value[6]+""+value[7]+""+value[8])
   }
   else{
   alert("Condiotion not mach")
   }
      

   

   }
   else{
alert("lenght")
   }
 }

  return (
    <>
    <div>
      <>
      <h1>{result}</h1>
     <button onClick={handle}> Add</button>
    
     </>
    </div>
    

    
    
     <input  
     style={{ width: '120px',
      height: '56px',
      border: 'none',
  borderRadius: '4px',
marginTop:'50px',
padding:'10px'
    
    
    }}
     placeholder="First Number" type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
   

    
</>
  );
}
