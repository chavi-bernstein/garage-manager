import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaragesScreenComponent } from './garages-screen.component';

describe('GaragesScreenComponent', () => {
  let component: GaragesScreenComponent;
  let fixture: ComponentFixture<GaragesScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GaragesScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaragesScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
