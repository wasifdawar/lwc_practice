import { LightningElement } from 'lwc';

export default class Lwc_componnet extends LightningElement {
    cardTitle = 'My First Component';
    //showRed = true;

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