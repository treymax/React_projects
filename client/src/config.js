import axios from "axios"
export const axiosInstance = axios.create({
    baseURL :"https://treymaxblog.herokuapp.com/api"
})