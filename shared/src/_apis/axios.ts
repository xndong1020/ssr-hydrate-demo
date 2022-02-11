import axios from 'axios'
import { setupInterceptors } from './setupInterceptors'

const instance = axios.create({
  baseURL: process.env.API_BASE_URL 
})

export default setupInterceptors(instance)