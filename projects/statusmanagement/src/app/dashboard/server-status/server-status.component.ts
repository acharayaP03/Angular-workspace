import {
  Component,
  DestroyRef,
  inject,
  OnDestroy,
  OnInit,
} from '@angular/core';

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
export class ServerStatusComponent implements OnInit /*, OnDestroy*/ {
  currentStatus: ServerStatus = Status.ONLINE;

  private interval?: ReturnType<typeof setInterval>;
  private detroyRef = inject(DestroyRef);

  constructor() {}

  ngOnInit() {
    this.interval = setInterval(() => {
      const randomeNumber = Math.random();

      if (randomeNumber < 0.5) {
        this.currentStatus = Status.ONLINE;
      } else if (randomeNumber < 0.9) {
        this.currentStatus = Status.OFFLINE;
      } else {
        this.currentStatus = Status.UNKNOWN;
      }
    }, 5000);

    this.detroyRef.onDestroy(() => {
      clearInterval(this.interval);
    });
  }

  ngAfterViewInit() {
    console.log('View initialized');
  }

  // or alternative for this is to call @destroyRef like in ngOnInit
  // ngOnDestroy(): void {
  //   clearInterval(this.interval);
  // }
}
