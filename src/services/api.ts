import axios from 'axios';

const API_BASE_URL = '/api/proxy';

class ApiService {
    private getHeaders() {
        const token = localStorage.getItem('auth_token');
        const headers: Record<string, string> = {
            'Content-Type': 'application/json',
        };
        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }
        return headers;
    }

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

    async getUsers() {
        try {
            const response = await axios.get(`${API_BASE_URL}/users/`, {
                headers: this.getHeaders(),
            });
            return response.data;
        } catch (error) {
            this.handleResponse(error);
        }
    }

    async getApps() {
        try {
            const response = await axios.get(`${API_BASE_URL}/apps/`, {
                headers: this.getHeaders(),
            });
            return response.data;
        } catch (error) {
            this.handleResponse(error);
        }
    }

    async createApp(name: string, description: string) {
        try {
            const response = await axios.post(`${API_BASE_URL}/apps/`, {
                name,
                description,
            }, {
                headers: this.getHeaders(),
            });
            return response.data;
        } catch (error) {
            this.handleResponse(error);
        }
    }

    async getAppKeys(appId: string | number) {
        try {
            const response = await axios.get(`${API_BASE_URL}/apps/${appId}/keys`, {
                headers: this.getHeaders(),
            });
            return response.data;
        } catch (error) {
            this.handleResponse(error);
        }
    }

    async createApiKey(appId: string | number, name: string) {
        try {
            const response = await axios.post(`${API_BASE_URL}/apps/${appId}/keys`, {
                name,
            }, {
                headers: this.getHeaders(),
            });
            return response.data;
        } catch (error) {
            this.handleResponse(error);
        }
    }
}

export const api = new ApiService();
