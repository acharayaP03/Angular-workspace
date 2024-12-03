import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ServerStatusComponent } from './dashboard/server-status/server-status.component';
import { SupportTicketComponent } from './dashboard/support-ticket/support-ticket.component';
import { TrafficComponent } from './dashboard/traffic/traffic.component';
import { DashboardItemComponent } from './dashboard/dashboard-item/dashboard-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    ServerStatusComponent,
    SupportTicketComponent,
    TrafficComponent,
    DashboardItemComponent,
  ],
})
export class AppComponent {}
