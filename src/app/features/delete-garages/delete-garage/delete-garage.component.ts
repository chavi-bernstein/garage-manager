import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Store } from '@ngrx/store';
import { deleteGarage } from '../../../store/actions';
import { Garage } from '../../../models/garage';

@Component({
  selector: 'app-delete-garage',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './delete-garage.component.html',
  styleUrl: './delete-garage.component.css'
})

export class DeleteGarageComponent {
  @Input() garage!: Garage;

  constructor(private _store: Store) { }

  onDelete(): void {
    this._store.dispatch(deleteGarage({ id: this.garage.id }));
  }
}
