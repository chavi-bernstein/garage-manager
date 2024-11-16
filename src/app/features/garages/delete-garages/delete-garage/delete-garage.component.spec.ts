import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteGarageComponent } from './delete-garage.component';

describe('DeleteItemComponent', () => {
  let component: DeleteGarageComponent;
  let fixture: ComponentFixture<DeleteGarageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteGarageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteGarageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
