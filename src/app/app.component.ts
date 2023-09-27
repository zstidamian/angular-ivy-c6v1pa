import { Component } from '@angular/core';
import { BAZA } from './models/baza';
import { Nowedane } from './models/nowedane';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  stringwrodzicu = 'Żaba';
  cytaty: Nowedane[] = BAZA;
}
