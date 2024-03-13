import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Albums from './Albums';
import logo from '../img/logo3.png'
// const ParentComponent = () => {
 
const HeaderComponent = () => {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      };
    const [togDisplay, setTogDisplay] = useState(false);
    return (
        <>
        <header className="relative">
            {/* Large screens and above */}
            <div className="bg-black sticky top-0 z-10">
                <div className="absolute inset-0">
                    <img className="object-cover w-full h-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/headers/3/coworking-space.jpg" alt="" />
                </div>

                <div className="absolute inset-0 bg-black/30"></div>

                <div className="relative px-4 mx-auto sm:px-6 lg:px-8">
                    <nav className="flex items-center justify-between h-16 lg:h-20">
                        <div className="flex-shrink-0">
                            <Link to="/" title="" className="flex">
                                <img className="w-50 h-12 lg:h-14" src={logo} alt="" />
                            </Link>
                        </div>

                        <button type="button" className="inline-flex p-2 text-white transition-all duration-200 rounded-md lg:hidden focus:bg-gray-800 hover:bg-gray-800" onClick={()=>{setTogDisplay(!togDisplay)}}>
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>

                        <div className="hidden lg:flex lg:items-center lg:space-x-10">
                            <Link to={''} className="text-base font-medium text-white" > Home </Link>
                            <Link to={'#about'} className="text-base font-medium text-white" onClick={() => scrollToSection('about')}> About </Link>
                            <Link to={'#album'} className="text-base font-medium text-white" onClick={() => scrollToSection('album')}> Albums </Link>
                            <Link to={'#service'} className="text-base font-medium text-white" onClick={() => scrollToSection('services')}> Services </Link>
                            <Link to={'#contact'} className="text-base font-medium text-white" onClick={() => scrollToSection('footer')}> Contact </Link>
                        </div>
                        
                        <Link to="https://api.whatsapp.com/send?phone=919027877857" target='_blank' title="" className="items-center justify-center hidden px-6 py-3 text-base font-semibold text-black transition-all duration-200 bg-yellow-400 border border-transparent rounded-full lg:inline-flex hover:bg-yellow-500 focus:bg-yellow-500" role="button"> Contact Us </Link>
                    </nav>
                </div>
            </div>

            {/* Extra small to large screens */}
            <nav style={{display:togDisplay?'block':'none',position:'fixed',zIndex:'99995554646'}} className="flex flex-col justify-between w-full max-w-xs min-h-screen px-4 py-10 bg-black sm:px-6 lg:hidden">
                <button type="button" className="inline-flex p-2 text-white transition-all duration-200 rounded-md focus:bg-gray-800 hover:bg-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={()=>{setTogDisplay(!togDisplay)}}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="flex flex-col flex-grow h-full">
                    <nav className="flex flex-col flex-1 mt-10 space-y-2">
                        <Link to={''} className="flex w-full py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70" > Home </Link>
                            <Link to={'#about'} className="flex w-full py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70" onClick={() => scrollToSection('about')}> About </Link>
                            <Link to={'#album'} className="flex w-full py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70" onClick={() => scrollToSection('album')}> Albums </Link>
                            <Link to={'#service'} className="flex w-full py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70" onClick={() => scrollToSection('services')}> Services </Link>
                            <Link to={'#contact'} style={{marginBottom:'12px'}} className="flex w-full py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70 mb-8" onClick={() => scrollToSection('footer')}> Contact </Link>
                    </nav>

                    <div className="flex flex-col items-start">
                    <Link to="https://api.whatsapp.com/send?phone=+918791152142" title="" className="inline-flex items-center justify-center w-auto px-6 py-3 mt-auto text-base font-semibold text-black transition-all duration-200 bg-yellow-400 border border-transparent rounded-full hover:bg-yellow-500 focus:bg-yellow-500" role="button"> Contact Us </Link>
                    </div>
                </div>
            </nav>
        </header>
        {/* <Albums ref={albumRef} /> */}
        </>
    );
}

export default HeaderComponent;
