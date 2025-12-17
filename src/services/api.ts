import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api/v1';

class ApiService {
    private handleResponse(error: any) {
        if (error.response) {
            if (error.response.status === 401) {
                localStorage.removeItem('auth_token');
                localStorage.removeItem('user_id');
                window.location.href = '/login';
            }
            throw new Error(error.response.data?.detail || 'API Request Failed');
        }
        throw new Error(error.message || 'Network Error');
    }

    async login(username: string, password: string) {
        try {
            const formBody = new URLSearchParams();
            formBody.append('username', username);
            formBody.append('password', password);

            const response = await axios.post(`${API_BASE_URL}/auth/login`, formBody, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });
            return response.data;
        } catch (error) {
            this.handleResponse(error);
        }
    }

    async signup(email: string, password: string) {
        try {
            const response = await axios.post(`${API_BASE_URL}/auth/register`, {
                email,
                password,
            });
            return response.data;
        } catch (error) {
            this.handleResponse(error);
        }
    }
}

export const api = new ApiService();
