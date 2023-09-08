import { LightningElement } from 'lwc';

export default class LwcParentComponent extends LightningElement {
    childNote = "Hello Wasif ";

    
    handleStudentNames(event)  
    {
        let studentNames = event.target.value;
        const childComp = this.template.querySelector('c-lwc-child-component');
        childComp.updateValues(studentNames); 
          }

}