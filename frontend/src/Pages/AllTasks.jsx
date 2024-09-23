import React, { useState } from 'react'
import Cards from '../Components/Home/Cards'
import { MdAddCircle } from "react-icons/md";
import InputData from '../Components/InputData';


const AllTasks = () => {
  const [inputDiv, setInputDiv] = useState("hidden")
  return (
    <>
    <div>
      <div className='w-full flex justify-end px-4 py-2'>
        <button onClick={() => setInputDiv("fixed")}><MdAddCircle className='text-4xl text-gray-400 hover:text-gray-100 transition-all duration-300'/></button>
      </div>
      <Cards home={"true"} setInputDiv={setInputDiv}/>
    </div>
    <InputData inputDiv={inputDiv} setInputDiv={setInputDiv}/>
    </>
  )
}

export default AllTasks
