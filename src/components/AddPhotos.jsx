import React, { useState } from 'react';
import { app } from '../firebase';
import { arrayUnion, doc, getFirestore, updateDoc, setDoc, getDoc } from 'firebase/firestore';
import toast, { Toaster } from 'react-hot-toast';

const db = getFirestore(app);

const AddPhotos = () => {
  const [image, setImage] = useState(null);
  const [password, setPassword] = useState('');
  const [albumName, setAlbumName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [uploading, setUploading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const albums = ["Wedding", "Candid", "Functional","Frames", "Nature", "Product", "Pre-Wedding", "Professional", "Personal", "Solo", "Travel", "Occasional"];

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleAlbumNameChange = (e) => {
    setAlbumName(e.target.value);
  };

  const handleUpload = async () => {
    if (image && albumName) {
      try {
        setUploading(true);

        // Upload image to Cloudinary
        const formData = new FormData();
        formData.append('file', image);
        formData.append('upload_preset', 'shoeping'); // Replace with your Cloudinary upload preset
        const cloudinaryResponse = await fetch('https://api.cloudinary.com/v1_1/dazhcprb8/image/upload', {
          method: 'POST',
          body: formData
        });
        const cloudinaryData = await cloudinaryResponse.json();
        const imageUrl = cloudinaryData.secure_url;
        console.log("Image Url ",imageUrl);
        // Check if the album document exists
        const albumDocRef = doc(db, 'albums', albumName);
        const albumDocSnapshot = await getDoc(albumDocRef);
        console.log(albumDocSnapshot)
        // If the document exists, update it
        if (albumDocSnapshot.exists()) {
          await updateDoc(albumDocRef, {
            images: arrayUnion(imageUrl)
          });
        } else { // If the document doesn't exist, create it
          await setDoc(albumDocRef, {
            images: [imageUrl]
          });
        }

        setImageUrl(imageUrl);
        toast.success("Image Added Successfully to ",albumName);
        alert("Image Added Successfully to ",albumName)
        setImageUrl("")
      } catch (error) {
        console.error('Error uploading image:', error);
        // Handle error (e.g., show error message to user)
      } finally {
        setUploading(false);
      }
    }
  };
  const handleLogin = () => {
    // Check if password is correct
    if (password === 'admin') {
      setLoggedIn(true);
    }
    else{
      alert("Sorry You can't add Picture!")
    }
  };
  return (
    <div className="flex items-center justify-center bg-gray-200" style={{height:'95vh'}}>
      <Toaster />
      {!loggedIn ? (
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Enter Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 py-2 px-4 w-full mb-4 rounded-lg"
          />
          <button onClick={handleLogin} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Login
          </button>
        </div>
      ) : (
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <label htmlFor="file-upload" className="block text-gray-700 font-bold mb-2">Choose Image:</label>
          <input
            id="file-upload"
            type="file"
            className="border border-gray-300 py-2 px-4 w-full mb-4 rounded-lg"
            onChange={handleImageChange}
          />

          <label htmlFor="album-select" className="block text-gray-700 font-bold mb-2">Select Album:</label>
          <select
            id="album-select"
            value={albumName}
            onChange={handleAlbumNameChange}
            className="border border-gray-300 py-2 px-4 w-full mb-4 rounded-lg"
          >
            <option value="">Select Album</option>
            {albums.map((album) => (
              <option key={album} value={album}>{album}</option>
            ))}
          </select>

          <button
            onClick={handleUpload}
            disabled={uploading}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {uploading ? 'Uploading...' : 'Upload'}
          </button>
        </div>
      )}
    </div>
  );
};

export default AddPhotos;
