import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendGaragesComponent } from './send-garages.component';

describe('SendGaragesComponent', () => {
  let component: SendGaragesComponent;
  let fixture: ComponentFixture<SendGaragesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SendGaragesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendGaragesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
