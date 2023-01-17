import { Component, OnInit } from '@angular/core';
import {AutentificarService} from './../../auth/services/autentificar.service';
import {AlmacenamientoService}from './../../auth/services/almacenamiento.service';
import {AuthResponse} from './../../models/auth';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage{

  public username : string = '';
  public lastName : string = '';

  constructor(
    public service : AutentificarService

  ) { }


}
