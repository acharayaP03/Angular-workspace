import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentdesignsystemComponent } from './componentdesignsystem.component';

describe('ComponentdesignsystemComponent', () => {
  let component: ComponentdesignsystemComponent;
  let fixture: ComponentFixture<ComponentdesignsystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentdesignsystemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentdesignsystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
