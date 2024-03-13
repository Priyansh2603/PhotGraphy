import React from 'react'
import Candid from './Candid';
import Shadi from './Shadi';
import About from './About';
import Function from './Function';
import Frames from './Frames';
import HeroSection from './Hero';
import Albums from './Albums';
import Footer from './Footer';
import Services from './Services';
export default function Main() {
  return (
    <div>
    {/* gradient-to-b from-green-200 to-blue-200 */}
       
    <div className="h-auto my-10  flex flex-col items-center justify-center bg-white">
    <HeroSection/>
    </div>
    <hr style={{height:'4px',backgroundColor:'black'}}/>
    <div id='album' className="  py-8 flex flex-col items-center justify-center  text-white">
    <Albums/>
    </div>
    
    <div className=" w-full h-auto flex flex-col items-center justify-center bg-gradient-to-b from-yellow-100 to-pink-800 text-white">
    <About/>
    </div>
    <div className=" h-auto flex flex-col items-center justify-center bg-gradient-to-b from-black to-indigo-700 text-white">
    <Services/>
    </div>




<Footer/>
    </div>
  )
}
