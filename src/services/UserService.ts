import "reflect-metadata";
import { IUserDto } from "../dtos/IUserDto";
import { IUserData } from "../dtos/IUserDataDto";
import type { IHttp } from "../utils/Http";
import { inject, injectable } from "inversify";

export interface IUserService {
    singleUser(id: number): Promise<IUserDto | null>;
}

@injectable()
export class UserService implements IUserService {
    public constructor(
        @inject('http') private readonly http: IHttp
    ) {
    }

    public async singleUser(id: number): Promise<IUserDto | null> {
        const result = await this.http.get(`https://reqres.in/api/users/${id}`);
        if (!result.isSuccess) {
            return null;
        }
       
        const userData = result.content as IUserData;
        console.log(userData);
        return userData.data;
    }
}

