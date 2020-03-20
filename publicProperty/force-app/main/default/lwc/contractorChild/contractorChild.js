import { LightningElement,api } from 'lwc';

export default class ContractorChild extends LightningElement {
    @api contractorDetail = {
        cName: 'Musarat Syed',
        cAddress: 'CA'
    };
    
}