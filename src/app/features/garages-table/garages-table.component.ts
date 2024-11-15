import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Garage } from '../../models/garage';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/store';
import { loadGarages } from '../../store/actions';
import { selectAllGarages } from '../../store/selectors';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-garages-table',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, CommonModule],
  templateUrl: './garages-table.component.html',
  styleUrl: './garages-table.component.css'
})

export class GaragesTableComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = []; 

  columnHeaders: Record<string, string> = { 
    id: 'מזהה',
    number: 'מספר מוסך',
    name: 'שם מוסך',
    typeCode: 'קוד סוג מוסך',
    type: 'סוג מוסך',
    address: 'כתובת',
    settlement: 'ישוב',
    phone: 'טלפון',
    postalCode: 'מיקוד',
    professionCode: 'קוד מקצוע',
    profession: 'מקצוע',
    professionManager: 'מנהל מקצוע',
    registrationNumber: 'מספר רישום',
    testTime: 'שעת בדיקה',
  };

  garages$: BehaviorSubject<Garage[]> = new BehaviorSubject<Garage[]>([]);
  dataSource = new MatTableDataSource<Garage>();
  itemsPerPage: number = 7;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private _store: Store<AppState>) {}

  ngOnInit() {
    this.displayedColumns = Object.keys(this.columnHeaders);
    this._store.select(selectAllGarages).subscribe((garages) => {
      this.garages$.next(garages);
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.garages$.subscribe(garages => {
      this.dataSource.data = garages;
    });
  }
}





