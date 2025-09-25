import axios from 'axios'

const axiosInstance = axios.create({
	baseURL: 'http://192.168.196.242:8000/api/v1/',
})
export default axiosInstance
