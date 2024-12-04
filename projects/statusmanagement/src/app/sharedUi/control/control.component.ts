import {
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class ControlComponent {
  // only use for backward compatibility
  @HostBinding('class') className = 'control';
  @HostListener('click') onClick() {
    console.log('host listener bindings...');
    console.log(this.el.nativeElement.input);
  }

  label = input.required<string>();

  // programatic access to element 
  private el = inject(ElementRef);
}
