import axios from 'axios'

const axiosInstance = axios.create({
	baseURL: 'http://10.144.97.136:8000/api/',
})
export default axiosInstance
