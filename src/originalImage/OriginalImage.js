import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ImageIcon from "@mui/icons-material/Image";

const OriginalImage = () => {
  const initialFileData = {
    url: "https://images.unsplash.com/photo-1521747116042-5a810fda9664?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    originalWidth: 0,
    originalHeight: 0,
  };

  const [imageFile, setImageFile] = useState({ ...initialFileData });

  useEffect(() => {
    if (imageFile.url) {
      console.log(imageFile);
    }
  }, [imageFile]);

  //   On file change handler
  const changeHandler = ({ target }) => {
    if (!imageFile.URL) {
      setImageFile({ ...initialFileData, url: "" });
    }
    setImageFile({ ...initialFileData, [target.name]: target.value });
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
            <div>Info</div>
            <Grid item md={12}>
              Dimensions:
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
