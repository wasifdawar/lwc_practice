import { LightningElement, api } from 'lwc';
import accountName from '@salesforce/schema/Account.Name';

export default class LightningRecordEditForm extends LightningElement {
     @api
     recordId;
     
     @api
     objectApiName;

     fields = [accountName];

     handleSubmit(event)
     {
        event.preventDefault();
        const fields = event.details.fields;
        fields.Name = fields.Name +'   '+ fields.Phone;
        this.template.querySelector('lightning-record-form').submit(fields);
     }

     handleSuccess(event)
     {}
}