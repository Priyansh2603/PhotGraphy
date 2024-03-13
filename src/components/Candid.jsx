import React from 'react'
import { useContext, useRef, useState } from 'react'
import { ImageState } from '../App';
export default function Candid() {
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
  const {candid} = useContext(ImageState);
  console.log(candid.length)
  return (
    <div>
        <div class="p-5 sm:p-8">
    <div class="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
        {
          candid.map((img,i)=>{
            return  <img src={img}/>
          })
        }
    </div>
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
