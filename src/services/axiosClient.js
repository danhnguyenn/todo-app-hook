import axios from 'axios';

const axiosOptions = {
	baseURL: process.env.REACT_APP_BASE_URL,
	headers: {
		'Content-Type': 'application/json'
	}
};

const axiosClient = axios.create(axiosOptions);

axiosClient.interceptors.request.use(
	(req) => req,
	(err) => Promise.reject(err)
);

axiosClient.interceptors.response.use(
	(res) => res.data,
	(err) => Promise.reject(err.response.data)
);

export default axiosClient;
