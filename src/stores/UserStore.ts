import { inject, injectable } from "inversify";
import {action, makeObservable, observable, runInAction} from "mobx";
import type { IListItem } from "../models/IListItem";
import type { IUserService } from "../services/UserService";
import { GlobalUserStore } from "./GlobalUserStore";

@injectable()
export class UserStore {

    @observable public item: IListItem | null = null;

    constructor(   
         @inject('userService') private readonly userService: IUserService,
         @inject('globalUserStore') private readonly globalUserStore: GlobalUserStore
    ) {
        makeObservable(this);
    }

    @action
    public init = async (id: number) : Promise<void> => {
        const result =  await this.userService.singleUser(id);
        
        if (result === null)
        {
            return;
        }

        runInAction(() => {  
            this.globalUserStore.totalApiCall++;
           
            this.item = {
                img: result.avatar,
                title: result.email,
                description: `${result.first_name} ${result.last_name}`
            };
        });
    }
}
