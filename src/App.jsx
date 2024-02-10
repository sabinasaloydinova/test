
import { useState } from 'react';
import './App.css';
import sss from './img/ssss.jpg'

function App() {
  const[mode, setMode] = useState(true)
  
  function fnModal(){
    setMode(!mode)
    console.log(mode);
  }
  return (
    <div className="App">
      <div className="wrapperr" onClick={fnModal}>
        <div className={mode ? 'modal' : 'modall'}>
          <div className="modal__top">
           <img src={sss} className='img' alt=""/>
            
          </div>
          <div className="modal__body">
            <h4> Barbie (talaffuzi: Barbi) bolalar uchun moʻljallangan moda qoʻgʻirchoqdir.</h4>
          </div>
          
          <div className="box">
          <button onClick={fnModal} className='btn'>Close</button>
          <button className='btn'>Save</button>
          </div>
          
        </div>
       
       </div>
       <button onClick={fnModal} className={mode ? 'btn' : 'none'}>Open modal</button>

    </div>
  );
}

export default App;
