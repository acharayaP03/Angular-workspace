import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { tasks as userTasksData } from '../../data/appdata';
import { User } from '../user/user.model';
@Component({
  selector: 'app-tasks',
  imports: [DatePipe],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  tasks = userTasksData;
  @Input({ required: true }) userId?: string;
  @Input({ required: true }) selectedUser?: User;

  get selectedUserTask() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }
}
