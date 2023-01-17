import { Component, OnInit } from '@angular/core';
import {ApiProductosService} from './../../services/api-productos.service'

@Component({
  selector: 'app-detalle-prod',
  templateUrl: './detalle-prod.page.html',
  styleUrls: ['./detalle-prod.page.scss'],
})
export class DetalleProdPage implements OnInit {

  constructor(
    private productos : ApiProductosService
  ) { }

  ngOnInit() {
  }


}
