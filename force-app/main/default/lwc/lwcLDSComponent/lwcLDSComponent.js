import { LightningElement } from 'lwc';
//import { wire,api} from 'lwc';
import { createRecord, getRecord } from 'lightning/uiRecordApi';   
//import { getRecord } from 'lightning/uiRecordApi'; 

export default class LwcLDSComponent extends LightningElement {
    accountName;
    accountPhone;
    
    // @api
    // recordID;

    // @wire(getRecord,{recordID:'$recordID,fields:fieldArray})
    // accountRecord;
    // get accName(){if(this.accountRecord.data){return this.accountRecord.data.fields.Name.value; }}
    // get accPhone(){if(this.accountRecord.data){return this.accountRecord.data.fields.Name.value; }}   

    handleAccountDetails(event)
    {   // this[event.target.name] =  event.target.value;
        
        if(event.target.name === 'accountName')
        {this.accountName = event.target.value;}

        else if(event.target.name === 'accountPhone')
        {this.accountPhone = event.target.value;}
        
    }

    handleAccountClick(event)
    {
        console.log("this.accountName ------>"+this.accountName);
        console.log("this.accountPhone ------>"+this.accountPhone);
        let  fields = 
        {
            'Name': this.accountName,
            'Phone': this.accountPhone
        }

        let record ={
            "apiName": "Account",
            'fields' : fields 
        }

        createRecord(record).then(x=>{
            console.log("VAlue ISiSkajkjsa"+x);
        }).catch(err=>{console.log(err);})
    }
}