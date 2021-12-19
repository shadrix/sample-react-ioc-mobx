import { inject, injectable } from "inversify";
import { makeAutoObservable } from "mobx";
import { GlobalUserStore } from "./GlobalUserStore";

@injectable()
export class MainUserStore {

    userCount = 0;

    constructor(   
        @inject('globalUserStore') private readonly globalUserStore: GlobalUserStore
   ) {
       makeAutoObservable(this);
   }

    
    public update = () : void => {
        this.userCount++;

        this.globalUserStore.clickCount++;
    }
}
