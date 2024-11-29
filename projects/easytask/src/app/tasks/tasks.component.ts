import { tasks } from './../../data/appdata';
import { Component } from '@angular/core';
import { Task } from './tasks.model';
import { tasks as userTasksData } from '../../data/appdata';
@Component({
  selector: 'app-tasks',
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  tasks = userTasksData;
}
