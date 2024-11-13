import { Component } from '@angular/core';
import { Garage } from '../../models/garage';
import { CustomMultiSelectComponent } from '../../component/core/custom-multi-select/custom-multi-select.component';
import { GarageService } from '../../services/garage-service.service';
import { CustomButtonComponent } from '../../core/custom-button/custom-button.component';

@Component({
  selector: 'app-add-garages',
  standalone: true,
  imports: [CustomMultiSelectComponent, CustomButtonComponent],
  templateUrl: './add-garages.component.html',
  styleUrl: './add-garages.component.css'
})
export class AddGaragesComponent {
  add: string = "Add";
  garages: Garage[] = [];
  garageNames: string[] = [];

  constructor(private _garageService: GarageService) { }

  ngOnInit() {
    this._garageService.getGarages().subscribe((garages) => {
      this.garages = garages;
      this.garageNames = garages.map(garage => garage.garageName); 
    });
  }

  toggleCheckboxFn(item: string, checked: boolean) {
    console.log(item, checked);
  }

  onButtonTap() {
    console.log("jhujj");
  }

}
