import React from 'react'
import { useContext, useRef, useState } from 'react'
import { ImageState } from '../App';


export default function Function() {
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
  const {functional} = useContext(ImageState);
  console.log(functional)
  return (
    <div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
 
      {
        functional&&functional.map((img,i)=>{
          return  <div class="group cursor-pointer relative">
          <img
            src={img}
            alt="Image 1"
            class="w-full h-auto object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
          />
          <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button class="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors" onClick={()=>{openModal(img)}}>
              View
            </button>
          </div>
        </div>
        })
      }

 {/* <div class="group cursor-pointer relative">
   <img
     src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw5fHxuYXR1cmV8ZW58MHwwfHx8MTY5NDA5OTcyOXww&ixlib=rb-4.0.3&q=80&w=1080"
     alt="Image 1"
     class="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
   />
   <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
     <button class="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
       View
     </button>
   </div>
 </div>

 <div class="group cursor-pointer relative">
   <img
     src="https://images.unsplash.com/photo-1501854140801-50d01698950b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMHx8bmF0dXJlfGVufDB8MHx8fDE2OTQwOTk3Mjl8MA&ixlib=rb-4.0.3&q=80&w=1080"
     alt="Image 1"
     class="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
   />
   <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
     <button class="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
       View
     </button>
   </div>
 </div>

 <div class="group cursor-pointer relative">
   <img
     src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxuYXR1cmV8ZW58MHwwfHx8MTY5NDA5OTcyOXww&ixlib=rb-4.0.3&q=80&w=1080"
     alt="Image 1"
     class="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
   />
   <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
     <button class="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
       View
     </button>
   </div>
 </div>

 <div class="group cursor-pointer relative">
   <img
     src="https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxNHx8bmF0dXJlfGVufDB8MHx8fDE2OTQwOTk3Mjl8MA&ixlib=rb-4.0.3&q=80&w=1080"
     alt="Image 1"
     class="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
   />
   <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
     <button class="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
       View
     </button>
   </div>
 </div>

 <div class="group cursor-pointer relative">
   <img
     src="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMXx8bmF0dXJlfGVufDB8MHx8fDE2OTQwOTk3Mjl8MA&ixlib=rb-4.0.3&q=80&w=1080"
     alt="Image 1"
     class="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
   />
   <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
     <button class="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
       View
     </button>
   </div>
 </div>

 <div class="group cursor-pointer relative">
   <img
     src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw0fHxuYXR1cmV8ZW58MHwwfHx8MTY5NDA5OTcyOXww&ixlib=rb-4.0.3&q=80&w=1080"
     alt="Image 1"
     class="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
   />
   <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
     <button class="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
       View
     </button>
   </div>
 </div>

 <div class="group cursor-pointer relative">
   <img
     src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxuYXR1cmV8ZW58MHwwfHx8MTY5NDA5OTcyOXww&ixlib=rb-4.0.3&q=80&w=1080"
     alt="Image 1"
     class="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
   />
   <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
     <button class="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
       View
     </button>
   </div>
 </div>

 <div class="group cursor-pointer relative">
   <img
     src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw3fHxuYXR1cmV8ZW58MHwwfHx8MTY5NDA5OTcyOXww&ixlib=rb-4.0.3&q=80&w=1080"
     alt="Image 1"
     class="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
   />
   <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
     <button class="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
       View
     </button>
   </div>
 </div>

 <div class="group cursor-pointer relative">
   <img
     src="https://images.unsplash.com/photo-1419133203517-f3b3ed0ba2bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxyaXZlcnxlbnwwfDB8fHwxNjk0MDk5ODgyfDA&ixlib=rb-4.0.3&q=80&w=1080"
     alt="Image 1"
     class="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
   />
   <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
     <button class="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
       View
     </button>
   </div>
 </div>

 <div class="group cursor-pointer relative">
   <img
     src="https://images.unsplash.com/photo-1498855926480-d98e83099315?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxyaXZlcnxlbnwwfDB8fHwxNjk0MDk5ODgyfDA&ixlib=rb-4.0.3&q=80&w=1080"
     alt="Image 1"
     class="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
   />
   <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
     <button class="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
       View
     </button>
   </div>
 </div>

 <div class="group cursor-pointer relative">
   <img
     src="https://images.unsplash.com/photo-1502754400466-c87ff3039da7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMXx8cml2ZXJ8ZW58MHwwfHx8MTY5NDA5OTg4Mnww&ixlib=rb-4.0.3&q=80&w=1080"
     alt="Image 1"
     class="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
   />
   <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
     <button class="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
       View
     </button>
   </div>
 </div> */}

</div>
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
