import axios from "axios";

export default axios.create({
<<<<<<< HEAD
  baseURL: "http://localhost:3001",
=======
  baseURL: "http://rocky-meadow-16617.herokuapp.com",
>>>>>>> Develop
  headers: {
    "Content-type": "application/json"
  }
});

