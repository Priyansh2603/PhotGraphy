import React, { useState, useRef, useEffect, useContext } from 'react';
import { ImageState } from '../App';

function Shadi() {
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
  const {wedding} = useContext(ImageState);
  console.log(wedding)
  return (
    <div className="w-full h-full ">
      <section className="px-4 py-24 mx-auto max-w-6xl">
        <div className="w-3/4 mx-auto text-left md:w-11/12 xl:w-8/12 md:text-center">
          <h1 className="mb-6 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
            <span className="block w-full text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-500 lg:inline">Wedding Clicks</span>
          </h1>
        </div>
      </section>

      <section>
        <div className="w-15/16 h-3/4 m-8 ">
          <ul ref={galleryRef} id="gallery" className="grid grid-cols-2 gap-5 lg:grid-cols-7">
            {
              wedding && wedding.map((img,i)=>{
                return <li>
                        <img
                          onClick={() => openModal(img)}
                          src={img}
                          className="object-cover w-auto h-auto bg-gray-200 rounded cursor-pointer aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]"
                          alt="photo gallery image 01"
                        />
                      </li>
              })
            }
            
          </ul>
        </div>
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={closeModal}>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute top-0 right-0 m-4 text-white cursor-pointer" onClick={closeModal}>
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16z" clipRule="evenodd" />
                <path fillRule="evenodd" d="M5.293 5.293a1 1 0 011.414 0L10 8.586l3.293-3.293a1 1 0 111.414 1.414L11.414 10l3.293 3.293a1 1 0 01-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 10 5.293 6.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <img src={fullViewImage} className="mx-auto max-w-full max-h-full" alt="Full view" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Shadi;
