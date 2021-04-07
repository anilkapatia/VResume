import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsserProfileComponent } from './usser-profile.component';

describe('UsserProfileComponent', () => {
  let component: UsserProfileComponent;
  let fixture: ComponentFixture<UsserProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsserProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
