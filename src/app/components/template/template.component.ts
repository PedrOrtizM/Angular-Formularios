import { Component } from '@angular/core';
import { NgForm} from'@angular/forms'
@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form){
      border: 1px solid red;
    }
    `]
})
export class TemplateComponent  {


  usuario:Object = {

    nombre: "",
    apellido: "",
    email: ""

  }
  constructor() { }


  guardar(forma:NgForm){
    console.log(forma);


  }


}
