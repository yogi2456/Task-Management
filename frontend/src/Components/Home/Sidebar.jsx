import React from 'react'
import { TfiAlignJustify } from "react-icons/tfi";
import { GoBookmarkFill } from "react-icons/go";
import { HiCheckCircle } from "react-icons/hi";
import { HiEyeOff } from "react-icons/hi";
import { Link } from 'react-router-dom';

const Sidebar = () => {

  const data = [
    {
      title: "All Tasks",
      icons: <TfiAlignJustify />,
      link: "/"
    },
    {
      title: "Important Tasks",
      icons: <GoBookmarkFill />,
      link: "/important-task"
    },
    {
      title: "Completed Tasks",
      icons: <HiCheckCircle />,
      link: "/completed-task"
    },
    {
      title: "InCompleted Tasks",
      icons: <HiEyeOff />,
      link: "/incompleted-task"
    }
  ]
  return (
    <>
      <div className="">
        <h2 className="text-md font-semibold">The code Master</h2>
        <h4 className="mb-1 text-xs text-gray-400">yogesh@gmail.com</h4>
        <hr/>
      </div>
      <div>
        {data.map((items, i) => (
          <Link to={items.link} key={i} className="my-1 text-xs flex items-center hover:bg-gray-400 p-2 rounded transition-all duration-300">
            {items.icons}&nbsp;&nbsp;{items.title}
            </Link>
          ))}
      </div>
      <div>
        <button className="bg-gray-600 p-1 rounded w-full">Log Out</button>
      </div>
    </>
  )
}

export default Sidebar
