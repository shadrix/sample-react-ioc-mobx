import { injectable } from 'inversify';
import { IResponseData } from "../dtos/IResponseDataDto";

export interface IHttp {
    get<T>(url: string): Promise<IResponseData<T>>;
}

@injectable()
export class Http implements IHttp {
    public async get<T>(url: string): Promise<IResponseData<T>> {
        const response = await fetch(url);
        if (!response.ok) {
            return { isSuccess: response.ok, errorMessage: 'went something wrong'} as IResponseData<T>;
        }
        const result = await response.json();
        return { isSuccess: response.ok, content: result} as IResponseData<T>
    }
}
