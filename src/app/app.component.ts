import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nombre: string = '';
  telefono = '';
  dni = '';

  cambiaDni(valor) {
    // Podes consultar el valor por consola
    console.log(valor);
    this.dni = valor;
  }

  cambiaTelefono(valor) {
    // Podes consultar el valor por consola
    console.log(valor);
    this.telefono = valor;
  }

  onClick() {
    alert('Hiciste click!!');
  }
}
