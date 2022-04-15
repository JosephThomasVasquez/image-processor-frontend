import ImageProcessor from "./imageProcessor/ImageProcessor";
import OriginalImage from "./originalImage/OriginalImage";

function App() {
  return (
    <div className="App">
      <header className="App-header">Image Processor</header>
      <div>
        <OriginalImage />
      </div>
      <ImageProcessor />
    </div>
  );
}

export default App;
