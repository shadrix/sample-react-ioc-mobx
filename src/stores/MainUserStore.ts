import { inject, injectable } from "inversify";
import { action, makeObservable, observable } from "mobx";
import { GlobalUserStore } from "./GlobalUserStore";

@injectable()
export class MainUserStore {

    @observable userCount = 0;

    constructor(   
        @inject('globalUserStore') private readonly globalUserStore: GlobalUserStore
   ) {
       makeObservable(this);
   }

    @action
    public update = () : void => {
        this.userCount++;

        this.globalUserStore.clickCount++;
    }
}
