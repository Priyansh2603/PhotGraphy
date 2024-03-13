import React from 'react'
import Albums from './Albums'

export default function AlbumBack() {
  return (
    <div>
        <div class="relative h-screen w-full">
    <img src="https://images.unsplash.com/photo-1494783367193-149034c05e8f" alt="Background Image" class="absolute inset-0 w-full h-full object-cover filter blur-sm"/>
    <div class="absolute inset-0 bg-black bg-opacity-50"></div>
    <div class="absolute inset-0 flex flex-col items-center justify-center">
        <Albums/>
    </div>
</div>
    </div>
  )
}
