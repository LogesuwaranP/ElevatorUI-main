import React from 'react'
import OuterCar from '../Components/Outer-Car/OuterCar';
import Shaft from '../Components/Shaft/Shaft';
import PopUp from '../Components/PopUp/PopUp';


const Home = () => {
  return (
    <div className='App-container'>
        <PopUp/>
        <OuterCar/>
        <Shaft/>
    </div>
  )
}

export default Home
