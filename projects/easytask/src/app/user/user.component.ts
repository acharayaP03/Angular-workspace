import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardComponent } from '../sharedUi/card/card.component';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Output() select = new EventEmitter<string>();
  @Input({required: true}) selectedUser = false

  get imagePath() {
    return '/assets/users/' + this.user.avatar;
  }

  onSelectedUser() {
    this.select.emit(this.user.id);
  }
}
