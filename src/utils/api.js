const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
// const API_BASE_URL = "http://localhost:5000";

const headers = new Headers();

headers.append("Content-Type", "application/json");

export const processImage = async (settings, signal) => {
  const url = new URL(`${API_BASE_URL}`);

  const options = {
    method: "POST",
    headers,
    body: JSON.stringify({ data: settings }),
    signal,
  };
  return await fetch(url, options, {});
};
