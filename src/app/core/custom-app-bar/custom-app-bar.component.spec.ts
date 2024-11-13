import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomAppBarComponent } from './custom-app-bar.component';

describe('CustomAppBarComponent', () => {
  let component: CustomAppBarComponent;
  let fixture: ComponentFixture<CustomAppBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomAppBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomAppBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
