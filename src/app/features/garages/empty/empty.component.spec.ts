import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyScreenComponent } from './empty.component';

describe('EmptyScreenComponent', () => {
  let component: EmptyScreenComponent;
  let fixture: ComponentFixture<EmptyScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmptyScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmptyScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
