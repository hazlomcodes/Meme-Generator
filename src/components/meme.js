import React from "react";
import "../styles/header.css"
import memesData from "../memesData.js"

export default function Meme() { 
    const [memeImage , setMemeImage] = React.useState("")

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
    }
    return (
        <main>
            <div className="form">
                <input 
                     type ="text" 
                     placeholder="Top text"
                     className="from--input"
                     />
                <input 
                     type ="text" 
                     placeholder="Bottom text"
                     className="form--input"
                     />
                <button
                className="form--button"
                onClick={getMemeImage}
                > 
                Get a new meme image
                </button>
            </div>
            <img className= "meme--image" src={memeImage} alt="meme_image"  />
        </main>
    )
}