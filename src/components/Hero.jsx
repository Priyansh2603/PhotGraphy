import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <div className="bg-white">
            

            <section className="bg-[#FCF8F1] bg-opacity-30  sm:py-10 lg:pt-10">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                        <div className='pt-20'>
                            <p className="text-base font-semibold tracking-wider text-blue-600 uppercase">A new age of Photography</p>
                            <h1 className="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-8xl">Connect & Capture your special moments</h1>
                            {/* <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl">Your special occasions are kept forever beautifully.</p> */}

                            <Link to="https://api.whatsapp.com/send?phone=919027877857" target='_blank' title="" className="mt-6 items-center justify-center hidden px-6 py-3 text-base font-semibold text-black transition-all duration-200 bg-yellow-400 border border-transparent rounded-full lg:inline-flex hover:bg-yellow-500 focus:bg-yellow-500" role="button">
                                Book Now
                                <svg className="w-6 h-6 ml-8 -mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </Link>

                            {/* <p className="mt-5 text-gray-600">Already joined us? <a href="#" title="" className="text-black transition-all duration-200 hover:underline">Log in</a></p> */}
                        </div>

                        <div>
                            <img className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/1/hero-img.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HeroSection;
