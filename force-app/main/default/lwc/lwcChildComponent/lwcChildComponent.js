import { LightningElement,track,api} from 'lwc';

export default class LwcChildComponent extends LightningElement {
     //value = ['Sherin','Wasif'];
     @track value = [];
     @api welcomeNote;
     
    

    get options() {
        return [
            { label: 'Wasif', value: 'Wasif' },
            { label: 'Kalyani', value: 'Kalyani' },
            { label: 'Lucky', value: 'Lucky' },
            { label: 'Sherin', value: 'Sherin' },
            { label: 'Renu', value: 'Renu' },
            { label: 'Vijay', value: 'Vijay' },
        ];
        
    }
        
        @api updateValues(studentNames)      // Data come as string format like 
                                       // Wasif,kalyani,Lucky
        {                   
            this.value = studentNames.split(',');
        }
        handleChange(event)
       {
           this.value = event.detail.value;
           let studentNames = this.value.join(',');
           const parentInputBox = new CustomEvent('updatestudentname',{detail:studentNames});
           this.dispatchEvent(parentInputBox);
       }

    }

