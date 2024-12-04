import { Component } from '@angular/core';

enum Status {
  ONLINE = 'online',
  OFFLINE = 'offline',
  UNKNOWN = 'unknown',
}

type ServerStatus = Status.ONLINE | Status.OFFLINE | Status.UNKNOWN;

@Component({
  selector: 'app-server-status',
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent {
  currentStatus: ServerStatus = Status.ONLINE;
  constructor() {
    setInterval(() => {
      const randomeNumber = Math.random();

      if (randomeNumber < 0.5) {
        this.currentStatus = Status.ONLINE;
      } else if (randomeNumber < 0.9) {
        this.currentStatus = Status.OFFLINE;
      } else {
        this.currentStatus = Status.UNKNOWN;
      }
    }, 5000);
  }
}
