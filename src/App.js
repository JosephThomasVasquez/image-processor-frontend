import { createTheme, ThemeProvider } from "@mui/material/styles";
import theme from "./utils/themeConfig";
import ImageProcessor from "./imageProcessor/ImageProcessor";
import OriginalImage from "./originalImage/OriginalImage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">Image Processor</header>
        <div>
          <OriginalImage />
        </div>
        <ImageProcessor />
      </div>
    </ThemeProvider>
  );
}

export default App;
