import React, { useState, useEffect } from "react";
import { processImage } from "../utils/api";
import Container from "@mui/material/Container";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";
import FormGroup from "@mui/material/FormGroup";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Checkbox from "@mui/material/Checkbox";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import CropRotateIcon from "@mui/icons-material/CropRotate";
import ImageIcon from "@mui/icons-material/Image";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import HeightIcon from "@mui/icons-material/Height";

const ImageProcessor = ({ imageFile, setImageFile }) => {
  const initialSettings = {
    name: "default",
    url: imageFile.url,
    format: "jpeg",
    Width: 256,
    Height: 256,
    aspectWidth: false,
    aspectHeight: true,
    blur: 0,
    rotation: 0,
    brightness: 0,
    contrast: 0,
    grayscale: false,
    inverted: false,
    quality: 85,
  };

  const [isLoading, setIsLoading] = useState(false);
  const [imageSettings, setImageSettings] = useState({ ...initialSettings });
  const [processedImage, setProcessedImage] = useState(null);

  useEffect(() => {
    if (imageFile.url) {
      // console.log(imageFile.url);
      setImageSettings({ ...imageSettings, url: imageFile.url });
    }
  }, [imageFile]);

  useEffect(() => {
    console.log("processed", processedImage);
  }, [processedImage]);

  // handle value changes
  const handleChange = ({ target }) => {
    // console.log(target.name);
    setImageSettings({ ...imageSettings, [target.name]: target.value });
  };

  // Handle switches
  const handleSwitch = ({ target }) => {
    // console.log(target.checked);
    setImageSettings({ ...imageSettings, [target.name]: target.checked });
  };

  //   On image load get original dimensions
  const imageLoader = () => {
    setProcessedImage(processedImage);
  };

  // Select format
  const handleSelectFormat = ({ target }) => {
    // console.log(target.name);
    setImageSettings({ ...imageSettings, format: target.value });
  };

  const handleProcess = async () => {
    const abortController = new AbortController();
    try {
      setIsLoading(true);
      const response = await processImage(
        imageSettings,
        abortController.abort()
      );

      await response.json().then((data) => setProcessedImage(data.data));
      setIsLoading(false);
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
          {/* WIDTH */}
          <Grid item xs={12} sm={12} md={6}>
            <div className="text-field">
              <TextField
                id="width-px"
                className="text-fields"
                name="Width"
                label="Width"
                variant="standard"
                value={imageSettings.Width}
                onChange={handleChange}
                disabled={imageSettings.aspectWidth}
                fullWidth
              />
            </div>
          </Grid>

          {/* HEIGHT */}
          <Grid item xs={12} sm={12} md={6}>
            <div className="text-field">
              <TextField
                id="height-px"
                className="text-fields"
                name="Height"
                label="Height"
                variant="standard"
                value={imageSettings.Height}
                onChange={handleChange}
                disabled={imageSettings.aspectHeight}
                fullWidth
              />
            </div>
          </Grid>

          {/* AUTH-WIDTH WITH HEIGHT FOCUS */}
          <Grid item xs={6} sm={6} md={6}>
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
                  label="↔ Auto Width"
                />
              </FormGroup>
            </div>
          </Grid>

          {/* AUTO-HEIGHT WITH WIDTH FOCUS */}
          <Grid item xs={6} sm={6} md={6}>
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
                  label={"↕ Auto Height"}
                />
              </FormGroup>
            </div>
          </Grid>

          {/* BRIGHTNESS */}
          <Grid item xs={12} sm={12} md={6}>
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

          {/* CONTRAST */}
          <Grid item xs={12} sm={12} md={6}>
            <div className="text-field">
              <div className="sub-title">Contrast</div>
              <Slider
                aria-label="Volume"
                name="contrast"
                value={imageSettings.contrast}
                min={0}
                max={100}
                onChange={handleChange}
                valueLabelDisplay="auto"
              />
            </div>
          </Grid>

          {/* GRAYSCALE */}
          <Grid item md={3}>
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

          {/* INVERTED */}
          <Grid item md={3}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    name="inverted"
                    checked={imageSettings.inverted}
                    onChange={handleSwitch}
                  />
                }
                label="Invert"
              />
            </FormGroup>
          </Grid>

          {/* FORMAT */}
          <Grid item xs={12} sm={12} md={6}>
            <div className="text-field">
              <div className="sub-title">Format</div>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Format</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={imageSettings.format}
                  label="Format"
                  onChange={handleSelectFormat}
                >
                  <MenuItem name="jpeg" value={"jpeg"}>
                    JPEG
                  </MenuItem>
                  <MenuItem name="png" value={"png"}>
                    PNG
                  </MenuItem>
                  <MenuItem name="gif" value={"gif"}>
                    GIF
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
          </Grid>

          {/* QUALITY */}
          <Grid item xs={12} sm={12} md={6}>
            <div className="text-field">
              <div className="sub-title">Quality</div>
              <Slider
                aria-label="Volume"
                name="quality"
                value={imageSettings.quality}
                step={5}
                marks
                min={0}
                max={100}
                onChange={handleChange}
                valueLabelDisplay="auto"
              />
            </div>
          </Grid>

          {/* PROCESS IMAGE */}
          <Grid item xs={4} sm={4} md={6}>
            <Button
              variant="contained"
              onClick={handleProcess}
              startIcon={<CropRotateIcon />}
            >
              Process
            </Button>
          </Grid>

          {/* DOWNLOAD */}
          <Grid item xs={4} sm={4} md={6}>
            <Button
              variant="contained"
              color="success"
              startIcon={<FileDownloadIcon />}
            >
              Download
            </Button>
          </Grid>

          {/* IMAGE PREVIEW */}
          <Grid item xs={12} sm={12} md={12}>
            {isLoading ? (
              <Box sx={{ width: "100%" }}>
                <LinearProgress />
              </Box>
            ) : null}
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
