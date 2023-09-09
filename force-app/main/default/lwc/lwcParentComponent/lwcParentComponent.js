import { LightningElement } from 'lwc';

export default class LwcParentComponent extends LightningElement {
    childNote = "Hello Wasif ";
    students ='';

    
    handleStudentNames(event)  
    {
        let studentNames = event.target.value;
        const childComp = this.template.querySelector('c-lwc-child-component');
        childComp.updateValues(studentNames); 
          }

     updateStudents(event) 
     {
        this.students = event.detail;
     }    

}