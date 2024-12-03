import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css',
})
export class DashboardItemComponent {
  /**
   * @Input in old way
   */
  // @Input({ required: true }) image! : { src: string, alt: string};
  // @Input({ required: true }) title!: string;
  image = input.required<{ src: string; alt: string }>(); // requires angular version 17+
  title = input.required<string>();
}
