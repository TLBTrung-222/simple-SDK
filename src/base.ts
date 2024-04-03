export interface Config {
    apiKey: string;
    baseUrl?: string;
}

export class Base {
    private apiKey: string;
    private baseUrl: string;
    constructor(config: Config) {
        this.apiKey = config.apiKey;
        this.baseUrl = config.baseUrl || "https://jsonplaceholder.typicode.com";
    }

    protected request<T>(endPoint: string, options?: RequestInit): Promise<T> {
        const url = `${this.baseUrl}${endPoint}`;
        const headers = {
            "Content-Type": "application/json",
            "api-key": this.apiKey,
        };
        // 'options' is a RequestInit can contain 'method' (Get, Post,...), 'keepalive', 'headers', ...
        // combine 'options' object with headers object
        const config = {
            ...options,
            headers,
        };
        return fetch(url, config).then((response: Response) => {
            if (response.ok) return response.json();
            else throw new Error(response.statusText);
        });
    }
}
