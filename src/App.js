import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Candid from './components/Candid';
import Shadi from './components/Shadi';
import About from './components/About';
import Function from './components/Function';
import Frames from './components/Frames';
import Main from './components/Main';
import AddPhotos from './components/AddPhotos';
import { createContext, useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { app } from './firebase';
import Pre from './components/Pre';
import Personal from './components/Personal';
const ImageState = createContext();
function App() {
  const db = getFirestore(app);
  const [wedding, setWedding] = useState([]);
  const [personal, setPersonal] = useState([]);
  const [preWed, setPreWed] = useState([]);
  const [functional, setFunctional] = useState([]);
  const [candid, setCandid] = useState([]);
  const [frames, setFrames] = useState([]);
  const [nature, setNature] = useState([]);
  
  const getImages = async () => {
    try {
      const weddingAlbum = await getDoc(doc(db, 'albums', 'Wedding'));
      console.log(weddingAlbum)
      setWedding(weddingAlbum.data().images);

      const personalAlbum = await getDoc(doc(db, 'albums', 'Personal'));
      console.log(personalAlbum.data().images);
      setPersonal(personalAlbum.data().images);

      const preWedAlbum = await getDoc(doc(db, 'albums', 'Pre-Wedding'));
      setPreWed(preWedAlbum.data().images);

      const functionalAlbum = await getDoc(doc(db, 'albums', 'Functional'));
      setFunctional(functionalAlbum.data().images);

      const candidAlbum = await getDoc(doc(db, 'albums', 'Candid'));
      setCandid(candidAlbum.data().images);

      const framesAlbum = await getDoc(doc(db, 'albums', 'Frames'));
      setFrames(framesAlbum.data().images);

      const natureAlbum = await getDoc(doc(db, 'albums', 'Nature'));
      setNature(natureAlbum.data().images);
      console.log(frames,nature,candid,personal,preWed,wedding,functional);
    } catch (error) {
      console.error('Error getting images: ', error);
    }
  };
  useEffect(()=>{
    getImages();
  },[])
  return (
    <>
    <ImageState.Provider value={{wedding,personal,preWed,frames,candid,nature,functional}}>
    <Toaster/>
    <BrowserRouter>
      <HeaderComponent/>
      
  <Routes>
  <Route path='/' element={<Main/>}/>
  <Route path='/candid' element={<Candid/>}/>
  <Route path='/add' element={<AddPhotos getImages={getImages}/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/shadi' element={<Shadi/>}/>
  <Route path='/function' element={<Function/>}/>
  <Route path='/personal' element={<Personal/>}/>
  <Route path='/prewed' element={<Pre/>}/>
  <Route path='/frame' element={<Frames/>}/>
  </Routes>
  </BrowserRouter>
    </ImageState.Provider>
</>
  );
}
export {ImageState}
export default App;
