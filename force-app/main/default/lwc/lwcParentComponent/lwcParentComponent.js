import { LightningElement, wire } from 'lwc';
import { fireEvent } from 'c/pubsub';
import {CurrentPageReference} from 'lightning/navigation';


export default class LwcParentComponent extends LightningElement {
    childNote = "Hello Wasif ";
    students ='';

    @wire(CurrentPageReference)
    pagereference;


    handleStudentNames(event)  
    {
        let studentNames = event.target.value;
        fireEvent(this.pagereference,'pubsubhit',studentNames); 
        const childComp = this.template.querySelector('c-lwc-child-component');
        childComp.updateValues(studentNames); 
          }

     constructor()    //Question: Why we use this constructor
     {
        super();
     }

     updateStudents(event) 
     {
        this.students = event.detail;
     }    
      
}