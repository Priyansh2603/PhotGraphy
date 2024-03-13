import React, { useContext, useRef, useState } from 'react'
import { ImageState } from '../App';

export default function Pre() {
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
  const {preWed} = useContext(ImageState);
  console.log(preWed)
  return (
    <div>
    <section className="flex items-center py-16 bg-gray-100 dark:bg-gray-800 font-poppins">
      <div className="p-4 mx-auto max-w-7xl">
        <h2 className="pb-4 text-4xl font-bold text-center text-gray-800 md:text-6xl dark:text-gray-400">
          Our Gallery
        </h2>
        <div className="mx-auto mb-16 border-b border-red-700 w-44 dark:border-gray-400"></div>
        <div className="flex flex-wrap -m-1 md:-m-2">
          {preWed && preWed.map((img, index) => (
            <div key={index} className="w-full px-4 sm:w-1/3">
              <div className="mb-8" onClick={()=>{openModal(img)}}>
                <a href="#">
                  <div className="relative mb-5 overflow-hidden">
                    <img
                      className="object-cover w-full h-[250px] lg:h-[450px] transition duration-500 group-hover:origin-center hover:scale-105"
                      src={img}
                      alt={`Image ${index}`}
                    />
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
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
  )
}
