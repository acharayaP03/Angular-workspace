import { Component } from '@angular/core';
import { ButtonComponent } from '../sharedUi/button/button.component';

@Component({
  selector: 'app-header',
  imports: [ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  navigationLinks = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'management',
      href: '/',
    },
  ];
}
