import React from 'react'
import { CiHeart } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdAddCircle } from "react-icons/md";

const Cards = ({home, setInputDiv}) => {

    const data = [
        {
            title: "The Best Coding Channel",
            desc: "I have to create my channel the best ever coding channel in hindi for those who do not understand english",
            status: "In Completed"
        },
        {
            title: "CPP Concepts",
            desc: "I need to clear basics of cpp. Topics:Abstraction, Inheritance, Polymorphism, virtual functions etc..",
            status: "Completed"
        },
        {
            title: "Assignment",
            desc: "My assignment on 20 march. I have to complete it.",
            status: "In Completed"
        },
        {
            title: "Projects",
            desc: "For Project I need to see tutorials of the code master youtube channel.",
            status: "In Completed"
        },
    ]
  return (
    <div className='grid grid-cols-3 gap-4 p-4'>
      {data && data.map((items, i) => (
        <div className='flex flex-col justify-between bg-gray-800 rounded-xl p-4'>
        <div>
            <h3 className='text-xl font-semibold'>{items.title}</h3>
            <p className='text-xs text-gray-300'>{items.desc}</p>
        </div>
        <div className='mt-4 w-full flex items-center'>
                <button className={`${items.status === "In Completed" ? "bg-red-400" : "bg-green-700"} p-2 rounded text-xs w-3/6`}>{items.status}</button>
                <div className='text-white p-2 w-3/6 text-2xs flex justify-around'>
                    <button>
                    <CiHeart />
                    </button>
                    <button>
                    <FaEdit />
                    </button>
                    <button>
                    <MdDelete />
                    </button>
                </div>
            </div>
        </div>
        ))}
        {home === "true" && (
            <button onClick={() => setInputDiv("fixed")} className='flex flex-col justify-center items-center bg-gray-800 rounded-xl p-4 text-gray-300 hover:scale-105 hover:cursor-pointer transition-all duration-300'>
            <MdAddCircle className='text-5xl'/>
            <h2 className='text-2xl mt-4'>Add Task</h2>
            </button>
        ) }
     
    </div>
  )
}

export default Cards
