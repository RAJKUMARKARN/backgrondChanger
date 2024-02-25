import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setcolor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200 p-0em"
    style={{backgroundColor:color}}
    >
      <div className=" fixed flex flex-wrap jsutify-center bottom-10 insit-x-0 ml-52 px-3">
        <div className="flex flex-wrap  justify-center gap-3 shadow-lg bg-white px-9 py-2  ml-9 rounded-3xl">
        <button onClick={()=>{setcolor("red")}}
         className=" ml-5 outline-none px-4 py-4 rounded-full  text-white shadow-lg"
        style={{
          backgroundColor:"red"}
        }> red</button>
         <button  onClick={()=>{setcolor("orange")}} 
         className="outline-none px-4 py-4 rounded-full text-white shadow-lg"
        style={{
          backgroundColor:"orange"}
        }> orange</button>
         <button  onClick={()=>{setcolor("green")}} 
         className="outline-none px-4 py-4 rounded-full text-white shadow-lg"
        style={{
          backgroundColor:"green"}
        }> green</button>
         <button onClick={()=>{setcolor("pink")}} 
         className="outline-none px-4 py-4 rounded-full text-white shadow-lg"
        style={{
          backgroundColor:"pink"}
        }> pink</button>
          <button  onClick={()=>{setcolor("black")}}
          className="outline-none px-4 py-4 rounded-full text-white shadow-lg"
        style={{
          backgroundColor:"black"}
        }> black</button></div>
        </div>
        </div>
        )
        }
        

export default App
