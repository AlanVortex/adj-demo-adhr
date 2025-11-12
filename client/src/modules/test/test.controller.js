const TestController = {};
const ENV = import.meta.env;

// Valores por defecto para desarrollo local
const API_HOST = ENV.VITE_API_HOST || 'localhost';
const API_PORT = ENV.VITE_API_PORT || '8081';
const API_BASE = ENV.VITE_API_BASE || '/adj/api';

// const API_URL = `${ENV.VITE_API_PROTOCOL}://${API_HOST}:${API_PORT}${API_BASE}`;
const API_URL = `${ENV.VITE_APP_API_PROTOCOL}://${ENV.VITE_API_HOST}:${ENV.VITE_API_PORT}/${ENV.VITE_API_BASE}`;

console.log('Environment variables:', {
    VITE_API_HOST: ENV.VITE_API_HOST,
    VITE_API_PORT: ENV.VITE_API_PORT,
    VITE_API_BASE: ENV.VITE_API_BASE,
    VITE_API_PROTOCOL: ENV.VITE_API_PROTOCOL,
    API_URL: API_URL
});

TestController.callToApi = async () => {
    try {
        console.log('API URL:', API_URL);
        const response = await fetch(`${API_URL}/test`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('API Response:', data);
        return data;
    } catch (error) {
        console.error('Error calling API:', error);
        throw error;
    }
};

export default TestController;