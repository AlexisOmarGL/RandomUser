import axios from 'axios';
import type { AxiosInstance } from 'axios';

// Configurar la instancia de Axios
const apiClient: AxiosInstance = axios.create({
  baseURL: 'https://randomuser.me/api/', // URL base de la API
  headers: {
    'Content-Type': 'application/json'
  }
});

export default apiClient;