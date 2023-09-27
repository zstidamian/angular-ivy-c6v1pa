import { Component, Input } from '@angular/core';
import { Nowedane } from '../models/nowedane';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css'],
})
export class Component2Component {
  @Input()
  title: string;
  @Input()
  dane: Nowedane[];
}
