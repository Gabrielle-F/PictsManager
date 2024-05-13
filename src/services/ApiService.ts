import { ApiResponse } from "./ApiResponse";

class ApiService {
    private static readonly BASE_URL = "http://191.168.1.158:8080";
    private static instance: ApiService;

    private constructor() { }

    public static getInstance(): ApiService {
        if (!ApiService.instance) {
            ApiService.instance = new ApiService();
        }
        return ApiService.instance;
    }

    private constructEndpoint(...segments: string[]): string {
        return [ApiService.BASE_URL, ...segments].join('/');
    }

    private async request<T>(endpoint: string, method: 'GET' | 'POST' | 'PUT' | 'DELETE', data?: object): Promise<ApiResponse<T>> {
        const config: RequestInit = {
            method,
            headers: {
                Accept: "application/json",
                'Content-Type': 'application/json',
            },
        };

        if (data) {
            config.body = JSON.stringify(data);
        }

        const response = await fetch(endpoint, config);

        if (!response.ok) {
            const errorData = await response.json();
            return { data: null, error: errorData.message };
        }

        const responseData = await response.json();
        return { data: responseData };
    }

    async list<T>(...segments: string[]): Promise<ApiResponse<T[]>> {
        return await this.request<T[]>(this.constructEndpoint(...segments), 'GET');
    }

    async listWithId<T>(id: string, ...segments: string[]): Promise<ApiResponse<T[]>> {
        return await this.request<T[]>(this.constructEndpoint(...segments, id), 'GET');
    }

    async get<T>(id: string, ...segments: string[]): Promise<ApiResponse<T>> {
        return await this.request<T>(this.constructEndpoint(...segments, id), 'GET');
    }

    async create<T>(data: object, ...segments: string[]): Promise<ApiResponse<T>> {
        return await this.request(this.constructEndpoint(...segments), 'POST', data);
    }

    async update<T>(data: object, ...segments: string[]): Promise<ApiResponse<T>> {
        return await this.request(this.constructEndpoint(...segments), 'PUT', data);
    }

    async delete<T>(id: string, ...segments: string[]): Promise<ApiResponse<T>> {
        return await this.request(this.constructEndpoint(...segments, id), 'DELETE');
    }
}

export default ApiService;
