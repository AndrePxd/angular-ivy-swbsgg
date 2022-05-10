import { Component, VERSION, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  listas: string[];
  trabajos: string[];
  constructor() {
    this.listas = [
      'Carrera acreditada',
      'Mercado laboral creciente',
      'Demanda de TICs creciente en un mercado globalizado.',
      'Laboratorios especializados en la aplicación práctica del conocimiento.',
      '200 horas de prácticas guiadas.',
      'Una práctica profesional garantizada.',
    ];
    this.trabajos = [
      'En empresas públicas y privadas, en las que funcionen sistemas de información computacional.',
      'En empresas de producción de software.',
      'En emprendimientos propios, en el desarrollo de software, mantenimiento de tecnología computacional.',
      'En consultorías como programador, analista de sistemas, entre otros.',
    ];
  }
  ngOnInit() {}
}
