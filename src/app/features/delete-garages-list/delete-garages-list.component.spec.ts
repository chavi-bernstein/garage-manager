import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteGaragesListComponent } from './delete-garages-list.component';

describe('AddGaragesComponent', () => {
  let component: DeleteGaragesListComponent;
  let fixture: ComponentFixture<DeleteGaragesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteGaragesListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteGaragesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
