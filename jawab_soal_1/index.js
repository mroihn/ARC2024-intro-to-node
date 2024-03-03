const axios = require("axios");

axios.get("https://finalspaceapi.com/api/v0/character/?limit=2")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
