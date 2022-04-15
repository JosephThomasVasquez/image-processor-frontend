import React, { useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import ImageIcon from "@mui/icons-material/Image";

const ImageProcessor = () => {
  const initialSettings = {
    name: "default",
    url: "",
    format: "",
    Width: 256,
    Height: 256,
    aspectWidth: false,
    aspectHeight: true,
    blur: 0,
    rotation: 0,
    brightness: 0,
    contrast: 0,
    compression: 0,
  };
  const [imageSettings, setImageSettings] = useState({ ...initialSettings });

  const handleBrightness = ({ target }) => {
    console.log(target);
    setImageSettings({ ...imageSettings, [target.name]: target.value });
  };

  const handleChange = ({ target }) => {
    console.log(target.name);
    setImageSettings({ ...imageSettings, [target.name]: target.value });
  };

  const handleSwitch = ({ target }) => {
    console.log(target.name);
    setImageSettings({ ...imageSettings, [target.name]: target.checked });
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
                  label="Aspect | Width"
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
                  label="Aspect | Height"
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
                onChange={handleBrightness}
                valueLabelDisplay="auto"
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ImageProcessor;
