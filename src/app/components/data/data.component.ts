import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators} from '@angular/forms'

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html'
})
export class DataComponent {

  forma:FormGroup;

  usuario:Object={
    nombreCompleto:{
      nombre: "Pedro",
      apellido: "Ortiz"
    },
    correo: "pedrortizm@hotmail.com"
  }

  constructor() {
    this.forma = new FormGroup({

     'nombreCompleto':    new FormGroup({

              'nombre':   new FormControl('',[ Validators.required,
                                               Validators.minLength(3)]),

              'apellido': new FormControl('',[ Validators.required,
                                               Validators.minLength(3)])
       }),
      'correo': new FormControl('',
                                    [Validators.required,
                                     Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")])

              })

  }

  guardar(){

    console.log(this.forma);

  }



}
