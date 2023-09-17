import { LightningElement,wire,api} from 'lwc';
import { createRecord, getRecord  } from 'lightning/uiRecordApi';   

const fieldArray = ['Account.Name','Account.Phone'];
export default class LwcLDSComponent extends LightningElement {
    accountName;
    accountPhone;
    
    @api
    recordId;

    @wire(getRecord,{recordId:'$recordId',fields:fieldArray})
     accountRecord;

     get isAccountLoaded() 
     {
        if(this.accountRecord.data)
            return true;
        return false;
     }    
     
     get accName()
     {
        if(this.accountRecord.data)
        {
            return this.accountRecord.data.fields.Name.value; 
        }}
     get accPhone()
      {
        if(this.accountRecord.data)
        {
            return this.accountRecord.data.fields.Phone.value; 
        }}   

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
        console.log("this.accountRecord ------>"+this.accountRecord);

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
            console.log("VAlue is "+x);
            this.recordId = x.id;
        }).catch(err=>{console.log(err);})
    }
}