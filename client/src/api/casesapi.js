import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:3000/api/ver1/cases"
})