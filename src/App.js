import { createTheme, ThemeProvider } from "@mui/material/styles";
import theme from "./utils/themeConfig";
import SideMenu from "./sideMenu/SideMenu";
import Grid from "@mui/material/Grid";
import ImageProcessor from "./imageProcessor/ImageProcessor";
import OriginalImage from "./originalImage/OriginalImage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SideMenu />
      <div className="App">
        <header className="title">
          <h1>Image Processor</h1>
        </header>
        <div>
          <Grid container spacing={2}>
            <Grid item lg={6} md={6} sm={12}>
              <OriginalImage />
            </Grid>
            <Grid item lg={6} md={6} sm={12}>
              <ImageProcessor />
            </Grid>
          </Grid>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
