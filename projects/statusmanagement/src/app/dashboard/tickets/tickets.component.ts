import { Component, ViewEncapsulation } from '@angular/core';
import { ControlComponent } from '../../sharedUi/control/control.component';
import { ButtonComponent } from '../../sharedUi/button/button.component';

@Component({
  selector: 'app-tickets',
  imports: [ControlComponent, ButtonComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class TicketsComponent {}
