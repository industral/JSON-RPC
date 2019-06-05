export interface IRequestParameter {
    id?: number | string;
    jsonrpc?: string;
    method: string;
    params: object | [any]
}
