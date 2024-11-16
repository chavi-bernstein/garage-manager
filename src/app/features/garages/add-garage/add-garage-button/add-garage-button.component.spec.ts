import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGarageButtonComponent } from './add-garage-button.component';

describe('AddGarageComponent', () => {
  let component: AddGarageButtonComponent;
  let fixture: ComponentFixture<AddGarageButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddGarageButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddGarageButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
