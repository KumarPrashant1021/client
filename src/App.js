import React,{useState,useEffect,useCallback} from "react"
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import ImageDetails from './Components/ImageDetails';
import imagesInfo from "./JsonData/DummyImages.json"
import "./App.css"
import {BrowserRouter,Routes,Route} from "react-router-dom"



export default function App(){
  const imageDataPresent = localStorage.getItem('images') ?  JSON.parse(localStorage.getItem('images')) : imagesInfo
  const [imageData, setImageData] = useState(()=>{
    return imageDataPresent
  });
  const saveImageData = useCallback((imageItem)=>{
    setImageData((prevImageData)=>{
      return [
        ...prevImageData,
        imageItem
      ]
    })
  });

  useEffect(()=>{
    localStorage.setItem("images",JSON.stringify(imageDataPresent))
  },[])

    useEffect(()=>{
        localStorage.setItem("images",JSON.stringify(imageData))
       
    },[imageData])

  return(
    <>
      
      <BrowserRouter>
      <NavBar saveImageData={saveImageData}/>
        <Routes>
            <Route path="/" element={
               <Home imageData={imageData}/>
            }>
            
          </Route>
          <Route path="/details" element={<ImageDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}