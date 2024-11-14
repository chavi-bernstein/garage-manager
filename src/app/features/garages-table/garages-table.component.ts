import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import {Garage} from '../../models/garage';

@Component({
  selector: 'app-garages-table',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './garages-table.component.html',
  styleUrl: './garages-table.component.css'
})
export class GaragesTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['garageNumber', 'garageName', 'address', 'phone', 'profession'];
  garages: Garage[] = [
    new Garage(1, 101, 'מוסך א', 4, '1', 'מכונאות', 'תל אביב', '0501234567'),
    new Garage(2, 102, 'מוסך ב', 8, '2', 'פחחות', 'חיפה', '0509876543'),
    new Garage(3, 103, 'מוסך ג', 9, '3', 'חשמלאות', 'ירושלים', '0521234567'),
  ];

  dataSource = new MatTableDataSource<Garage>(this.garages);
  itemsPerPage: number = 7;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  columnHeaders = {
    number: 'מספר מוסך',
    name: 'שם מוסך',
    address: 'כתובת',
    phone: 'טלפון',
    profession: 'מקצוע',
  };



  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}



