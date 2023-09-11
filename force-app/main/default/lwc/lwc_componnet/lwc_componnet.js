import { LightningElement,track,wire } from 'lwc';
import { registerListener } from 'c/pubsub';
import {CurrentPageReference} from 'lightning/navigation';

export default class Lwc_componnet extends LightningElement {
    @track cardTitle = 'My First Component';
    @track textvalue;
    //showRed = true;

    
    @wire(CurrentPageReference)
    pageRef;

    connectedCallback()
    {
        registerListener('pubsubhit',this.updateValue,this); 
    }

    updateValue(names )
    {
        this.textvalue = names;
    }

    students = ['Sherin','Wasif', 'Kalyani', 'Lucky', 'Vinay','Abhishek','Renu'];

    updateTitle(event)
    {
        console.log("Reached   "+event.target.label);
        this.cardTitle = event.target.value;
        // if(this.cardTitle=='' || this.cardTitle==undefined || this.cardTitle=='null')
        // {this.showRed=true;}
        // else
        // {this.showRed=false;}
    }
    get showRed()
    { return this.cardTitle=='' || this.cardTitle==undefined || this.cardTitle=='null'; }

    get cp1()
    { 
        return 'Get Function';
    }
}