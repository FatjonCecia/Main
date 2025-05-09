  //Imports

import { useState, useEffect } from "react";
import Photos from "./components/Photos.jsx";
import Buttons from "./components/Buttons.jsx";
import Header from "./components/Header.jsx";

export default function App() {

  //Menaging state

  const [grayscale, setGrayscale] = useState(false);
  const [images, setImages] = useState([]);
  const [clicked, setClicked] = useState(false);

  // Fetch images when clicked is true
  useEffect(() => {
    if (clicked) {
      const fetchImages = async () => {
        try {
          const res = await fetch("https://picsum.photos/v2/list?page=" + Math.floor(Math.random() * 100) + "&limit=4");
          const data = await res.json();
  
          const fetchedImages = data.map((img) => ({
            src: `https://picsum.photos/id/${img.id}/200/300?random=${Math.random()}`, 
            link: img.url,
            author: img.author,
          }));
  
          setImages(fetchedImages);
        } catch (err) {
          console.error("Failed to fetch images with author:", err);
          setImages([]);
        }
  
        setClicked(false);
      };
  
      fetchImages();
    }
  }, [clicked]);
  
  

  return (
    <>
      <Header />
      <div className="photo-section">
        <div className="buttons-floating">
          <Buttons grayscale={grayscale} setGrayscale={setGrayscale} setClicked={setClicked} />
        </div>
        <Photos images={images} grayscale={grayscale} />
      </div>
    </>
  );
}
