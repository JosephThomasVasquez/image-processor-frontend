import React, { useState } from "react";

const ImageSettings = () => {
  const initialSettings = {
    name: "default",
    format: "",
    width: 256,
    height: 256,
    blur: 0,
    rotation: 0,
    brightness: 0,
    contrast: 0,
  };

  const [imageSettings, setImageSettings] = useState({});

  return <div>ImageSettings</div>;
};

export default ImageSettings;
