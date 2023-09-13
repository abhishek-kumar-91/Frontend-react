import { useCallback, useEffect, useRef, useState } from "react"


function App() {
  const [rangeValue, setRangeValue] = useState(8);
  const [isNumberAllowed, setNumberAllowed] = useState(false);
  const [isCharacterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(function(){
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(isNumberAllowed){
      str += "0123456789"
    }
    if(isCharacterAllowed){
      str += "!@#$%^&*"
    }
    for(let i = 0; i < rangeValue; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char);
    }
    setPassword(pass);
  },[rangeValue, isNumberAllowed, isCharacterAllowed, setPassword])

  const copyPasswordToClipboard = ()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }

  useEffect(()=>{
    passwordGenerator()

  },[rangeValue, isNumberAllowed, isCharacterAllowed,passwordGenerator])

  
  return (
    <>
      <div className="flex justify-center bg-slate-600 w-[450px]  m-auto mt-4 rounded-lg">
        <div className="p-5 flex justify-center flex-col gap-2">
          <div className="text-lg text-white font-bold">Password Generator</div>
          <div>
            <input type="text" className="w-80 h-10 rounded-l-lg outline-none text-lg font-bold"
            value={password} readOnly ref={passwordRef}/>
            <button className="bg-blue-600 h-[41px] w-20 text-lg font-bold text-white rounded-r-lg"
             onClick={copyPasswordToClipboard}>Copy</button>
            </div>
            <div>
          <input type="range" min={6} className="cursor-pointer"
        max={100} value={rangeValue} onChange={(e)=>{setRangeValue(e.target.value)}}
       />
          <label className="text-white text-md font-bold ml-2"><span className="text-orange-500 text-lg">{rangeValue}</span> Range</label>

          <input type="checkbox" className="ml-4" defaultChecked={isNumberAllowed} 
          onChange={()=>{
            setNumberAllowed((prev)=>!prev);
            }} />
          <label className="text-white text-md font-bold">Number</label>
          <input type="checkbox" className="ml-2" 
          onChange={()=>{
            setCharacterAllowed((prev)=>!prev);
            }}/>
          <label className="text-white text-md font-bold">Character</label>
        </div>
          </div>
        
      </div>
    </>
  )
}

export default App
