import axios from 'axios'

const BASE_URL = "https://ecommerce23656api.herokuapp.com/api"
const TOKEN = ""

export const publickRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers:{token:`Bearer ${TOKEN}`}
})