import React,{useContext, useEffect} from 'react'
import "./Controls.css";
import DataContext from '../../Context/DataContext';
import { useNavigate } from 'react-router-dom';
const Controls = () => {

  const {setDestination, setIsOpen, person, setPerson,  weigth, setWeight } = useContext(DataContext);
  const navigate = useNavigate();


  const handleClick=(f)=>{
    setIsOpen(false);
    setTimeout(() => {
      setDestination(f)
    }, 4500);
  }

  return (
    <div className='main-controller'>
      <div className='person-count'>
         <button className='person' onClick={()=>{
            if(person>0)
            {
              setPerson(person-1);
            }
          }}> - </button>
         <div className='count'>{person}</div>
         <button className='person' onClick={()=>{
            if(person<6)
            {
              setPerson(person+1);
            }
          }}> + </button>
      </div>
      { person>5?<></>:
        <div className='control-container' >
            <button onClick={() => handleClick(0)}>0</button>
            <button onClick={() => handleClick(1)}>1</button>
            <button onClick={() => handleClick(2)}>2</button>
            <button onClick={() => handleClick(3)}>3</button>
            <button onClick={() => handleClick(4)}>4</button>
        </div>
      }
    </div>
    
  )
}

export default Controls


// const FloorValue ={
//   20:0,
//   145:1,
//   270:2,
//   390:3,
//   518:4
// }