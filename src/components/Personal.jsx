// import React from 'react';
import React, { useContext, useRef, useState } from 'react'
import { ImageState } from '../App';


export default function Personal({  }) {
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
  const {personal} = useContext(ImageState);
//   console.log(preWed)
  return (
    <div>
      <section className="flex items-center bg-gray-100 font-poppins dark:bg-gray-900 ">
        <div className="container justify-center flex-1 px-4 py-4 mx-auto text-left lg:py-10 ">
          <div className="mx-auto max-w-7xl py-11">
            <h2 className="pb-4 text-4xl font-bold text-center text-gray-800 dark:text-gray-400">
              Our Gallery
            </h2>
            <div className="mx-auto mb-16 border-b border-red-700 w-44 dark:border-gray-400"></div>
            <div className="flex flex-wrap self-start gap-5">
              {personal.map((image, index) => (
                <div className="w-full lg:w-1/5 md:w-full lg:mb-0" key={index}>
                  <div className="relative mb-6 overflow-hidden rounded-md shadow-md group">
                    <img
                      src={image.url}
                      className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 h-[300px] w-full transition duration-500"
                      alt=""
                    />
                    <div className="absolute inset-0 h-[300px] group-hover:bg-black opacity-50 transition duration-500 z-0"></div>
                    <div className="absolute z-10 hidden group-hover:block top-4 right-4">
                      <a
                        href="#"
                        className="text-white bg-orange-600 border-orange-600 rounded-full btn hover:bg-orange-700 hover:border-orange-700 btn-icon lightbox"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-camera"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"
                          ></path>
                          <path
                            d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"
                          ></path>
                        </svg>
                      </a>
                    </div>
                    <div className="absolute z-10 hidden group-hover:block bottom-4 left-4">
                      <a
                        href=""
                        className="text-lg font-medium text-white transition duration-500 hover:text-blue-300"
                      >
                        {image.title}
                      </a>
                      <p className="mb-0 text-xs text-gray-300">{image.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
  );
}
