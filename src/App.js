import React, { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import theme from "./utils/themeConfig";
import SideMenu from "./sideMenu/SideMenu";
import Grid from "@mui/material/Grid";
import ImageProcessor from "./imageProcessor/ImageProcessor";
import OriginalImage from "./originalImage/OriginalImage";

function App() {
  const initialFileData = {
    url: "",
    originalWidth: 0,
    originalHeight: 0,
  };

  const [imageFile, setImageFile] = useState({ ...initialFileData });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <SideMenu />
        <header className="title">
          <h1>Image Processor</h1>
        </header>
        <div>
          <Grid container spacing={2}>
            <Grid item lg={6} md={6} sm={12}>
              <OriginalImage
                imageFile={imageFile}
                setImageFile={setImageFile}
              />
            </Grid>
            <Grid item lg={6} md={6} sm={12}>
              <ImageProcessor
                imageFile={imageFile}
                setImageFile={setImageFile}
              />
            </Grid>
          </Grid>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
