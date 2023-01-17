import { Injectable } from '@angular/core';
import {AlmacenamientoService}from './../auth/services/almacenamiento.service';
import {Products} from './../models/products';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiProductosService {

  public productos : Products | null = null;

  public URL_PRODUCTS = 'https://dummyjson.com/auth/products';

  constructor(
    public almacen : AlmacenamientoService,
    private cliente : HttpClient,
  ) { }


}
