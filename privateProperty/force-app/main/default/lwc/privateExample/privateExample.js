import { LightningElement,track } from 'lwc';

export default class PrivateExample extends LightningElement {
    @track privateReactiveProperty;
    privateNonReactiveProperty;
    changeHandlerReactive(event)
    {
        this.privateReactiveProperty=event.target.value;
    }
    changeHandlerNonReactive(event)
    {
        this.privateNonReactiveProperty=event.target.value;
    }
}