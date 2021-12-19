import { injectable } from "inversify";
import { makeAutoObservable } from "mobx";

@injectable()
export class GlobalUserStore {

    public clickCount = 0;
    public totalApiCall = 0;

    constructor(   
    ) {
        makeAutoObservable(this);
    }
}
