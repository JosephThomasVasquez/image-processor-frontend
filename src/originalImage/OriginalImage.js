import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const OriginalImage = () => {
  return (
    <div>
      <Container maxWidth="sm">
        <div className="sub-title">Original Image</div>
        <Grid container spacing={2}>
          <Grid item md={12}>
            <TextField
              id="outlined-basic"
              className="text-fields"
              label="Outlined"
              variant="outlined"
              fullWidth
            />
            <Grid item md={12}>
              <Button variant="contained">Load Photo</Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default OriginalImage;
