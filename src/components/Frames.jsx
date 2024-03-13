import React from 'react'
import { useContext, useRef, useState } from 'react'
import { ImageState } from '../App';
export default function Frames() {
const [fullViewImage, setFullViewImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const galleryRef = useRef(null);

  const openModal = (imageUrl) => {
    setFullViewImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const {frames} = useContext(ImageState);
  console.log(frames.length)


    return (
        <div>
            <div class="grid lg:grid-cols-2 gap-3 m-8">
                {/* <div class="grid grid-cols-2 lg:grid-cols-1 gap-3">
                    <figure class="relative w-full h-60">
                        <img class="w-full h-full absolute top-0 start-0 object-cover rounded-xl" src="https://images.unsplash.com/photo-1670272505340-d906d8d77d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Image Description" />
                    </figure>
                    <figure class="relative w-full h-60">
                        <img class="w-full h-full absolute top-0 start-0 object-cover rounded-xl" src="https://images.unsplash.com/photo-1671726203638-83742a2721a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Image Description"/>
                    </figure>
                </div> */}
                {frames && frames.map((fm,i)=>{
                    
                    return <figure class="relative w-auto h-72 sm:h-96 lg:h-full" key={i} >
                        {console.log(fm)}
                        {/* <img src={fm} alt='No Img'/> */}
                    <img src={fm} alt="Image Description" class="w-full h-full top-0 start-0 object-cover rounded-xl" onClick={()=>{openModal(fm)}}/>
                </figure>
                })}
            </div>
            {isModalOpen && (
        <div className="fixed inset-0 w-full z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={closeModal}>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute top-0 right-0 m-4 text-white cursor-pointer" onClick={closeModal}>
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16z" clipRule="evenodd" />
                <path fillRule="evenodd" d="M5.293 5.293a1 1 0 011.414 0L10 8.586l3.293-3.293a1 1 0 111.414 1.414L11.414 10l3.293 3.293a1 1 0 01-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 10 5.293 6.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <img src={fullViewImage} className=" w-full h-full" alt="Full view" />
          </div>
        </div>
      )}
        </div>
    )
}
