// Functions that handle state of buttons when clicked
export default function Buttons({ grayscale, setGrayscale, setClicked }) {

  function handleGrayscaleToggle() {
    setGrayscale(prev => !prev);
  }

  function handleClick() {
    setClicked(prev => !prev);
  }

  return (
    <div id="buttons-flex">
      <button 
        onClick={handleGrayscaleToggle} 
        className={`greyscale-button ${grayscale ? "on" : "off"}`}
        
      >
        <div class={`${grayscale ? "x-remove": "x"}`}>✕</div>
      </button>

    <p>Make photos greyscale</p>

      <button onClick={handleClick}>
        Fetch new photos
      </button>
    </div>
  );
}
