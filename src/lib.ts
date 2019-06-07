import {IRequestParameter, IJSONRCPResponse, IReturn} from './types.js';

export default class JSON_RPC {
    private readonly url;
    private readonly jsonrpc;
    private readonly fetchObject;

    constructor({url, jsonrpc = '2.0', fetchObject}: { url: string, jsonrpc?: string, fetchObject? }) {
        this.url = url;
        this.jsonrpc = jsonrpc;
        if (fetchObject) {
            this.fetchObject = fetchObject;
        } else if (typeof fetch !== 'undefined') {
            this.fetchObject = fetch;

            if (typeof window !== 'undefined') {
                this.fetchObject = fetch.bind(window);
            }
        } else {
            throw Error('fetch object should be passed into constructor or be globally available');
        }
    }

    /**
     * Make a JSON-RCP call
     */
    public async calls(params: IRequestParameter | IRequestParameter[]): Promise<IReturn> {
        if (!(params instanceof Array)) params = [params];

        params.forEach((parameter, index) => {
            parameter.jsonrpc = parameter.jsonrpc || this.jsonrpc;
            parameter.id = parameter.id || new Date().valueOf() + index;
        });

        const request = await this.fetchObject(this.url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params)
        });

        const result = await request.json();

        return {
            /**
             * Get result by index.
             */
            get(id?: number): IJSONRCPResponse {
                if (!id) return result[0];
                return this.getById(params[id].id);
            },

            /**
             * Get result by id.
             */
            getById(id: number): IJSONRCPResponse {
                return result.find((p) => p.id === id);
            }
        };
    }
}
