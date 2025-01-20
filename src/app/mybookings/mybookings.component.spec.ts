import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MybookingsComponent } from './mybookings.component';

describe('MybookingsComponent', () => {
  let component: MybookingsComponent;
  let fixture: ComponentFixture<MybookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MybookingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MybookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
