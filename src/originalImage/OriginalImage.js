import React, { useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ImageIcon from "@mui/icons-material/Image";

const OriginalImage = () => {
  const [imageFile, setImageFile] = useState(
    "https://images.unsplash.com/photo-1521747116042-5a810fda9664?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
  );

  //   On file change handler
  const changeHandler = ({ target }) => {
    setImageFile(target.value);
  };

  //   On image load get original dimensions
  const imageLoader = ({ target: img }) => {
    console.log("this", img);
    const { naturalWidth, naturalHeight } = img;

    console.log(naturalWidth, naturalHeight);
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
                label="Image URL"
                variant="outlined"
                value={imageFile}
                onChange={changeHandler}
                fullWidth
              />
            </div>
            <Grid item md={12}>
              <Button variant="contained" startIcon={<ImageIcon />}>
                Load Photo
              </Button>
            </Grid>
            <Grid item md={12}>
              <div></div>
              <img
                onLoad={imageLoader}
                className="original-image-file"
                src={imageFile}
                alt=""
              />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default OriginalImage;
