import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import ImageIcon from "@mui/icons-material/Image";

const OriginalImage = ({ imageFile, setImageFile }) => {
  useEffect(() => {
    if (imageFile.url) {
      // console.log(imageFile);
    }
  }, [imageFile]);

  //   On file change handler
  const changeHandler = ({ target }) => {
    if (!imageFile.URL) {
      setImageFile({ ...imageFile, url: "" });
    }
    setImageFile({ ...imageFile, [target.name]: target.value });
  };

  //   On image load get original dimensions
  const imageLoader = ({ target: img }) => {
    console.log("this", img);
    const { naturalWidth, naturalHeight } = img;
    setImageFile({
      ...imageFile,
      originalWidth: naturalWidth,
      originalHeight: naturalHeight,
    });
  };

  return (
    <div>
      <Container maxWidth="xl">
        <div className="sub-title">Original Image</div>
        <Grid container spacing={2}>
          <Grid item md={12}>
            <div className="text-field">
              <TextField
                id="outlined-basic"
                className="text-fields"
                name="url"
                label="Image URL"
                variant="outlined"
                value={imageFile?.url}
                onChange={changeHandler}
                fullWidth
              />
            </div>
            <Grid item md={12}>
              <Button variant="contained" startIcon={<ImageIcon />}>
                Load Photo
              </Button>
            </Grid>
            {/* <div>Info</div> */}
            <Grid item md={12}>
              Details:{" "}
              {imageFile.originalWidth > 0 || imageFile.originalHeight > 0 ? (
                <Chip
                  label={`W ${imageFile.originalWidth}px x H ${imageFile.originalHeight}px`}
                />
              ) : null}
            </Grid>
            <Grid item md={12}>
              {imageFile ? (
                <img
                  onLoad={imageLoader}
                  className="original-image-file"
                  src={imageFile?.url}
                  alt=""
                />
              ) : null}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default OriginalImage;
