import React from 'react';
import { useRef, useEffect, useCallback, useState } from 'react';
import '../components/Fouthproject.css'

const FouthProject = () => {
  const [length, Setlength] = useState();
  const [numberallowed, SetnumberAllow] = useState(false);
  const [charallow, setcharAllow] = useState(false);
  const [password, SetPassword] = useState("");

  const passwordRef = useRef(null);


  const copypassword = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
    alert("Copy ==>"+" "+password)
  }, [password]);

  const passwordgenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOQRSTUVWXYZabcdefghijklmnopqurstuvwxyz";
    if (numberallowed) {
      str += '1234567890';
    }
    if (charallow) {
      str += "!@#$%&*?|";
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    SetPassword(pass);
  }, [length, numberallowed, charallow, SetPassword]);

  useEffect(() => {
    passwordgenerator();
  }, [length, numberallowed, charallow, passwordgenerator]);

  return (
    <>
    <div className="box">

    <div className="card">
      <h1>Password generator</h1>
      <div className="card-content">
        <input className='input-box' type="text" value={password} ref={passwordRef} disabled/>
        <button onClick={copypassword}>Copy</button>
        <div className="container">
          <input className='mouse' type="range" value={length} min={6} max={100} onChange={(e) => { Setlength(e.target.value) }} />
          <div className='length'>

          <label htmlFor="">Length</label>
          <p>{length}</p>
          </div>
          <input className='mouse' type="checkbox" id='num' defaultChecked={numberallowed} onChange={() => { SetnumberAllow((prev) => !prev) }} />
          <label className='mouse' htmlFor="num"> Numbers</label>
          <input className='mouse' type="checkbox" id='char' defaultChecked={charallow} onChange={() => { setcharAllow((prev) => !prev) }} />
          <label className='mouse' htmlFor="char"> Characters</label>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}

export default FouthProject;
