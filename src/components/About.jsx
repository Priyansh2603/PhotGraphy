import React from 'react'; // Import your photographer image
import { FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa';
const About = () => {
  const photographerImage = "https://res.cloudinary.com/dazhcprb8/image/upload/v1707134284/hehl2giro8iepsnsenn5.jpg"
  return (
    <section id="about" class="flex items-center bg-gradient-to-b from-yellow-100 to-pink-800 text-white xl:h-screen font-poppins dark:bg-gradient-to-b from-yellow-100 to-pink-800  ">
    <div class="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
        <div class="flex flex-wrap ">
            <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                <div class="relative lg:max-w-md">
                    <img src={photographerImage} alt="aboutimage"
                        class="relative z-10 object-cover w-full rounded " style={{height:'50vh'}}/>
                    <div
                        class="absolute bottom-0 right-0 z-10 p-8 bg-white border-4 border-purple-500 rounded shadow dark:border-purple-400 lg:-mb-8 lg:-mr-11 sm:p-8 dark:text-black dark:bg-gray-800 ">
                        <p class="text-lg flex items-center justify-center font-semibold md:w-72">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                class="absolute top-0 left-0 w-16 h-16 text-purple-700 dark:text-gray-300 opacity-10"
                                viewBox="0 0 16 16">
                                <path
                                    d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z">
                                </path>
                            </svg> <p className='text-black'>Been capturing live moments from past 6 years with expertise</p>
                        </p>
                    </div>
                </div>
            </div>
            <div class="w-full px-6 mb-10 lg:w-1/2 lg:mb-0 ">
                <div class="pl-4 mb-6 border-l-4 border-purple-500 ">
                    <span class="text-sm text-gray-600 uppercase dark:text-gray-400">Who we are?</span>
                    <h1 class="mt-2 text-3xl font-black text-black md:text-5xl dark:text-white">
                        About Us
                    </h1>
                </div>
                <div class="mb-6 text-base leading-7 text-black dark:text-gray-400">
                <div>
                <b style={{display:'flex',justifyContent:'center', fontSize:'20px',marginTop:'10px',marginBottom:'10px'}}>Welcome to R-Creations Photography!</b>

                <div style={{textAlign:'justify',color:'black'}}>
                Led by Ritik, our team specializes in capturing timeless moments that tell unforgettable stories. With a passion for creativity and a commitment to excellence, we turn your visions into stunning visual realities.
                We're more than just photographers; we're storytellers. From weddings to product launches, we work closely with you to understand your vision and bring it to life with exceptional quality and personalized service.
                </div>
                </div>
                <div>
                <b style={{display:'flex',justifyContent:'center', fontSize:'20px',marginTop:'10px',marginBottom:'10px'}}>Meet Ritik: The Visionary Behind R-Creations</b>

                <div style={{textAlign:'justify',color:'black'}}>
                With six years of experience under his belt, Ritik stands as the visionary behind R-Creations. His photography journey began with an inherent love for visual storytelling, driving him to capture moments brimming with emotion. Ritik's adeptness at infusing each frame with depth and meaning has earned him widespread recognition, making him the heartbeat of R-Creations.
                </div>
                </div>

                
                </div>
                <div style={{display:'flex',alignItems:'center'}}>
                <a href="#"
                    class="px-4 py-2 text-gray-100 bg-purple-500 rounded dark:bg-purple-400 dark:hover:bg-purple-500 hover:bg-purple-600">
                    Learn more
                </a>
                
                <FaInstagram className="icon px-1 py-1  bg-purple-500 rounded dark:bg-purple-400 dark:hover:bg-purple-500 hover:bg-purple-600" style={{ color: '#C16584', fontSize: '38px',marginRight:'10px',marginLeft:'10px',cursor:'pointer' }} />
                <FaWhatsapp className="icon px-1 py-1  bg-purple-500 rounded dark:bg-purple-400 dark:hover:bg-purple-500 hover:bg-purple-600" style={{ color: '#25D366', fontSize: '38px',marginRight:'10px',cursor:'pointer' }} />
                <FaFacebook className="icon px-1 py-1  bg-purple-500 rounded dark:bg-purple-400 dark:hover:bg-purple-500 hover:bg-purple-600" style={{ color: '#3B5998', fontSize: '38px',marginRight:'8px',cursor:'pointer' }} />
                </div>
                </div>
        </div>
    </div>
</section>
  );
};

export default About;
