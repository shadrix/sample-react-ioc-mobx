import { injectable } from "inversify";
import { makeObservable, observable } from "mobx";

@injectable()
export class GlobalUserStore {

    @observable public clickCount = 0;
    @observable public totalApiCall = 0;

    constructor(   
    ) {
        makeObservable(this);
    }
}
