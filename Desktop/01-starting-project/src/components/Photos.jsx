import "../index.css";

export default function Photos({ images, grayscale }) {

  return (

    <div className="photo-grid">

      {images.map((image, index) => (
       
       <div className="photo-wrapper" key={index}>
          <a href={image.link} target="_blank" rel="noopener noreferrer"> 
            <img
              src={image.src}
              alt={`Random image ${index + 1}`}
              className={grayscale ? "grayscale" : ""}
            />
            
            <div className="photo-caption">
              {image.author && <div className="photo-author">{image.author}</div>}
              {image.src && (
                
                <div className="photo-url">
                  <a  href={image.link} target="_blank" rel="noopener noreferrer">
                    {image.link}
                  </a>
                </div>
              )}
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}
