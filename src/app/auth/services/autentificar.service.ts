import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Auth} from './../../models/auth';
import {Products} from './../../models/products';
import { AuthResponse } from '../../models/auth';
import { catchError } from 'rxjs';
import {AlmacenamientoService} from '../services/almacenamiento.service';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AutentificarService {

  public URL_AUTH = 'https://dummyjson.com/auth/login';

  public datosUsuario : AuthResponse | null = null;

  constructor(
    private cliente : HttpClient,
    private almacen : AlmacenamientoService,
    private alert : AlertController
  ) { }

  public autenticar({username, password}: Auth, activo : boolean){
    this.cliente.post<AuthResponse | null>(this.URL_AUTH,{
      username,
      password
    },{
      headers :{
        'Content-Type' : 'application/json',
      }
    }).pipe(
      catchError(async(error : HttpErrorResponse)=>{
        if(error.status ===400){
          const alerta = await this.alert.create({
            header : 'Usuario o contraseña incorrectos',
            buttons : [
              {
                text : 'ok',
                role : 'confirm'
              }
            ]
          })
          await alerta.present();
        }
      })
    ).subscribe((datosDeInternet)=>{
      if(datosDeInternet){
        this.datosUsuario = datosDeInternet;
        if(activo){
          console.log(datosDeInternet)
          this.almacen.guardarToken(datosDeInternet.token)
        }
      }
    })
  }
}
