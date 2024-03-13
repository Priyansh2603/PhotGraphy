import React,{useRef} from 'react'
import { Link } from 'react-router-dom'

export default function Albums() {
 

  return (
    <>
   <div id='album' className='flex items-center justify-center m-4 mb-8'> <h1
  class="font-extrabold text-transparent text-6xl block w-full bg-clip-text bg-gradient-to-r from-gray-500 to-black"
>
  Albums
</h1></div>
    <div class="flex flex-col md:grid md:grid-cols-3 gap-3">
  <div class="relative rounded overflow-hidden">
    <Link to={'function'}>
    <img src="https://source.unsplash.com/400x300/?hanging-planters" alt="Hanging Planters" class="w-full"/>
    <p
      class="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
      Functional Shoots
    </p>
    </Link>
  </div>
  <div class="relative rounded overflow-hidden">
    <Link to={'candid'}>
    <img src="https://source.unsplash.com/400x300/?planter-stand" alt="Planter Stand with Pots" class="w-full"/>
    <p
      class="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
      Candid Photography
    </p>
    </Link>
  </div>
  <div class="relative rounded overflow-hidden">
    <Link to={'shadi'}>
    <img src="https://source.unsplash.com/400x300/?watering-cans" alt="Watering Cans" class="w-full"/>
    <p
      class="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
      Wedding Shoots
    </p>
    </Link>
  </div>
  <div class="relative rounded overflow-hidden">
    <Link to={'frame'}>
    <img src="https://source.unsplash.com/400x300/?metal-planters" alt="Metal Planters" class="w-full"/>
    <p
      class="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
      Framings
    </p>
    </Link>
  </div>
  <div class="relative rounded overflow-hidden">
    <img src="https://source.unsplash.com/400x300/?table-top-planters" alt="Table Top Planters" class="w-full"/>
    <p
      class="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
      Photo Editing
    </p>
  </div>
  <div class="relative rounded overflow-hidden">
    <img src="https://source.unsplash.com/400x300/?wall-mounted-stands" alt="Wall Mounted Stands" class="w-full"/>
    <p
      class="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
      Video Editing
    </p>
  </div>
  <div class="relative rounded overflow-hidden">
    <Link to="/prewed">
    <img src="https://source.unsplash.com/400x300/?bird-feeders" alt="Bird Feeders" class="w-full"/>
    <p
      class="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
      Pre-Wedding Shoots
    </p>
    </Link>
  </div>
  <div class="relative rounded overflow-hidden">
    <img src="https://source.unsplash.com/400x300/?hanging-birds" alt="Hanging Birds" class="w-full"/>
    <p
      class="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover-bg-opacity-60 transition">
      Prdouct Shoots
    </p>
  </div>
  <div class="relative rounded overflow-hidden">
    <img src="https://source.unsplash.com/400x300/?garden-sticks" alt="Garden Sticks" class="w-full"/>
    <p
      class="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
      Travel Vlogs
    </p>
  </div>
  {/* <div class="relative rounded overflow-hidden">
    <img src="https://source.unsplash.com/400x300/?garden-tray-miniatures" alt="Garden Tray Miniatures" class="w-full"/>
    <p
      class="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover-bg-opacity-60 transition">
      Garden Tray Miniatures
    </p>
  </div> */}
  <div class="relative rounded overflow-hidden">
    <img src="https://source.unsplash.com/400x300/?garden-tool-set" alt="Garden Tool Set" class="w-full"/>
    <p
      class="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover-bg-opacity-60 transition">
      Professional Shoots
    </p>
  </div>
  <div class="relative rounded overflow-hidden">
    <Link to="/personal">
    <img src="https://source.unsplash.com/400x300/?candle-stand" alt="Candle Stand" class="w-full"/>
    <p
      class="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover-bg-opacity-60 transition">
      Personal Photos
    </p>
    </Link>
  </div>
  <div class="relative rounded overflow-hidden">
    <img src="https://source.unsplash.com/400x300/?lanterns" alt="Lanterns" class="w-full"/>
    <p
      class="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover-bg-opacity-60 transition">
      Occasinal Shoots
    </p>
  </div>
  {/* <div class="relative rounded overflow-hidden">
    <img src="https://source.unsplash.com/400x300/?chimes" alt="Chimes" class="w-full"/>
    <p
      class="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover-bg-opacity-60 transition">
      Chimes
    </p>
  </div>
  <div class="relative rounded overflow-hidden">
    <img src="https://source.unsplash.com/400x300/?cage" alt="Cage" class="w-full"/>
    <p
      class="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover-bg-opacity-60 transition">
      Cage
    </p>
  </div>
  <div class="relative rounded overflow-hidden">
    <img src="https://source.unsplash.com/400x300/?bird-house-hanging" alt="Bird House Hanging" class="w-full"/>
    <p
      class="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover-bg-opacity-60 transition">
      Bird House Hanging
    </p>
  </div> */}
</div>
    </>
  )
}
