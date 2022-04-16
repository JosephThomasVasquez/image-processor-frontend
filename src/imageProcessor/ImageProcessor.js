import React, { useState, useEffect } from "react";
import { processImage } from "../utils/api";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Checkbox from "@mui/material/Checkbox";
import CheckIcon from "@mui/icons-material/Check";

import ImageIcon from "@mui/icons-material/Image";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

const ImageProcessor = ({ imageFile, setImageFile }) => {
  const initialSettings = {
    name: "default",
    url: imageFile.url,
    format: "",
    Width: 256,
    Height: 256,
    aspectWidth: false,
    aspectHeight: true,
    blur: 0,
    rotation: 0,
    brightness: 0,
    contrast: 0,
    grayscale: false,
    compression: 0,
  };
  const [imageSettings, setImageSettings] = useState({ ...initialSettings });
  const [processedImage, setProcessedImage] = useState(null);

  useEffect(() => {
    if (imageFile.url) {
      console.log(imageFile.url);
      setImageSettings({ ...imageSettings, url: imageFile.url });
    }
  }, [imageFile]);

  useEffect(() => {
    // console.log("processed", processedImage);
  }, [processedImage]);

  // handle value changes
  const handleChange = ({ target }) => {
    console.log(target.name);
    setImageSettings({ ...imageSettings, [target.name]: target.value });
  };

  // Handle switches
  const handleSwitch = ({ target }) => {
    console.log(target.checked);
    setImageSettings({ ...imageSettings, [target.name]: target.checked });
  };

  //   On image load get original dimensions
  const imageLoader = () => {
    setProcessedImage(processedImage);
  };

  const handleProcess = async () => {
    const abortController = new AbortController();
    try {
      const response = await processImage(
        imageSettings,
        abortController.abort()
      );

      await response.json().then((data) => setProcessedImage(data.data));
    } catch (error) {
      console.log(error);
    }

    // console.log(imageFile.url);
  };

  return (
    <div>
      <Container maxWidth="xl">
        <div className="sub-title">ImageProcessor</div>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <div className="text-field">
              <TextField
                id="outlined-basic"
                className="text-fields"
                name="Width"
                label="Width"
                variant="outlined"
                pattern="[0-9]{3}"
                value={imageSettings.Width}
                onChange={handleChange}
                disabled={imageSettings.aspectWidth}
                fullWidth
              />
            </div>
          </Grid>
          <Grid item md={6}>
            <div className="text-field">
              <TextField
                id="outlined-basic"
                className="text-fields"
                name="Height"
                label="Height"
                variant="outlined"
                value={imageSettings.Height}
                onChange={handleChange}
                disabled={imageSettings.aspectHeight}
                fullWidth
              />
            </div>
          </Grid>
          <Grid item md={6}>
            <div className="text-field">
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch
                      name="aspectWidth"
                      checked={imageSettings.aspectWidth}
                      onChange={handleSwitch}
                    />
                  }
                  label="Auto Width"
                />
              </FormGroup>
            </div>
          </Grid>
          <Grid item md={6}>
            <div className="text-field">
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch
                      name="aspectHeight"
                      checked={imageSettings.aspectHeight}
                      onChange={handleSwitch}
                    />
                  }
                  label="Auto Height"
                />
              </FormGroup>
            </div>
          </Grid>

          <Grid item md={12}>
            <div className="text-field">
              <div className="sub-title">Brightness</div>
              <Slider
                aria-label="Volume"
                name="brightness"
                value={imageSettings.brightness}
                min={0}
                max={100}
                onChange={handleChange}
                valueLabelDisplay="auto"
              />
            </div>
          </Grid>
          <Grid item md={6}>
            <Button
              variant="contained"
              onClick={handleProcess}
              startIcon={<ImageIcon />}
            >
              Process
            </Button>
          </Grid>
          <Grid item md={6}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    name="grayscale"
                    checked={imageSettings.grayscale}
                    onChange={handleSwitch}
                  />
                }
                label="Grayscale"
              />
            </FormGroup>
          </Grid>
          <Grid item md={6}>
            <Button
              variant="contained"
              color="success"
              startIcon={<FileDownloadIcon />}
            >
              Download
            </Button>
          </Grid>
          <Grid item md={12}>
            {processedImage ? (
              <img
                onLoad={imageLoader}
                className="original-image-file"
                src={processedImage}
                alt=""
              />
            ) : null}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ImageProcessor;
