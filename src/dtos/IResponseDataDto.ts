import { IResponseDataRootDto } from "./IResponseDataRootDto";

export interface IResponseData<T> extends IResponseDataRootDto {
    content: T
}