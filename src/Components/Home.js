import React from "react";
import ImageCard from "./ImageCard";

export default function Home({imageData}){
    return(
        <div className='main-container'>
            <div className='image-container'>
                {
                    imageData.map((data,index)=> <ImageCard imageInfo={data} key={index}/>)
                }
            </div>
        </div>
        
    )
}