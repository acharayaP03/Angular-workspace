import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { USERS as userData } from '../data/appdata';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'easytask';
  users = userData;
  selectedUserId?: string;

  selectUser(id: string) {
    this.selectedUserId = id;
  }
}
