import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  searchText = '';
  private cars: Array<object>;
  response;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.cars$.subscribe((carsArray) => {
      this.cars = carsArray;
    });
    this.apiService.queryAllCars();
  }

}
