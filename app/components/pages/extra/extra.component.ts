import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extra',
  templateUrl: './extra.component.html',
  styleUrls: ['./extra.component.scss']
})
export class ExtraComponent implements OnInit {

  Fotos: any[]=[
    {Nombre:'BoJack Horseman',Image:'assets/imagen1.jpg'},
    {Nombre:'Desencanto',Image:'assets/imagen3.jpg'},
    {Nombre:'Paradise PD',Image:'assets/imagen2.jpg'},
    {Nombre:'Trailer Park Boys: The Animated Series',Image:'assets/imagen4.jpg'},
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
