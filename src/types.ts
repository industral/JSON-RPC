export interface IRequestParameter {
    id?: number | string;
    jsonrpc?: string;
    method: string;
    params: object | [any]
}

export interface IJSONRCPResponse {
    id: number;
    jsonrpc: string;
    result: string;
    error?: object
}

export interface IReturn {
    get(id?: number): IJSONRCPResponse;
    getById(id: number): IJSONRCPResponse;
}
