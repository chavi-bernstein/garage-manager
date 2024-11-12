import { Component, OnInit } from '@angular/core';
import { Garage } from '../../models/garage';
import { CustomMultiSelectComponent } from '../../component/core/custom-multi-select/custom-multi-select.component';
import { GarageService } from '../../services/garage-service.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-multi-select',
  standalone: true,
  imports: [CustomMultiSelectComponent],
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.css']
})
export class MultiSelectComponent implements OnInit {

  garageNames: string[] = []; 

  constructor(private _garageService :GarageService){}

  ngOnInit() {
    this._garageService.getGarages().subscribe((garages) => {
      this.garageNames = garages.map(garage => garage.garageName); 
    });
  }

  toggleCheckboxFn(item: string, checked: boolean) {
    console.log(item, checked);
  }
}
