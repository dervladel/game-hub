import axios from "axios";

export default axios.create({
  baseURL:"https://api.rawg.io/api",
  params: {
    key:'220ed61821a445a98863e9a9448a9f9b'
  }
})