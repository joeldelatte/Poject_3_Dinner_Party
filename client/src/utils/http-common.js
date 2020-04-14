import axios from "axios";

// export default axios.create({
//     baseURL: "http://localhost:3001",
//     headers: {
//       "Content-type": "application/json"
//     }
//   });

  export default axios.create({
    baseURL: "https://rocky-meadow-16617.herokuapp.com",
    headers: {
      "Content-type": "application/json"
    }
  });