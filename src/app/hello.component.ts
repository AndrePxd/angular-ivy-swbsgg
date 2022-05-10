import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Ingenieria de sistemas</h1>`,
  styles: [
    `h1 { font-family: Lato; text-align: center;  background-color: navy; color: white`,
  ],
})
export class HelloComponent {
  @Input() name: string;
}
