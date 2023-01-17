import { Component } from '@angular/core';
import {AutentificarService} from './../auth/services/autentificar.service';
import{FormControl, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public formulario : FormGroup

  constructor(
    public auth : AutentificarService,
    public builder : FormBuilder
  ) {
    this.formulario = builder.group({
      username : [''],
      password : [''],
      activo : [false]
    })
  }


  public autenticar(){
    this.auth.autenticar({
      ...this.formulario.value
    }, this.formulario.get('activo')?.value);

  }

  public mostrarDatos(){
    return this.formulario
  }

}
