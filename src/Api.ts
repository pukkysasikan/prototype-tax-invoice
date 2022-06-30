import axios from "axios";

export const api = axios.create({
    baseURL: "https://aiz-app-demo-default-rtdb.asia-southeast1.firebasedatabase.app/",
})