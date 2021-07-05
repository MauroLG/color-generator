import React, {useState} from 'react';
import SingleColor from './SingleColor'
import Values from 'values.js'




function App() {
  const [colorCode, setColorCode] = useState('#f15025')
  const [error, setError] = useState(false);
  const [colorValues, setColorValues] = useState(new Values('#F15025').all(10))
  //console.log(new Values('#F15025').all(10))

  const handleSubmit = (e) => {
    e.preventDefault();
    if(colorCode.charAt(0) !== "#"){
      setColorCode("#".concat(colorCode));
    }
    try {
      setColorValues(new Values(colorCode).all(10))
      setError(false);
    } catch (error){
      setError(true);
    }
  }

  return (
    <main className="container">
      <header className="header">
        <h3>Color Generator</h3>
        <form className="color-generator" onSubmit={handleSubmit}>
          <input type="text" id="color" name="color" value={colorCode} onChange={(e)=>{setColorCode(e.target.value)}} className={`${error ? 'error' : null}`}/>
          <button className="btn">submit</button>
        </form>
      </header>
      <div className="colors">
      {colorValues.map((color, index)=>{
        return <SingleColor key={index} {...color}/>
      })}
      </div>
    </main>
  );
}

export default App;
