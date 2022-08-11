import axios from 'axios'

const BASE_URL = "http://localhost:5500/api/"
const TOKEN = ""

export const publickRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers:{token:`Bearer ${TOKEN}`}
})