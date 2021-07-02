import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  histories = [
    {
      device: 'sensor 1',
      hashCode: 'ncnancia2c3sa515as1c36',
      temp: 18,
      humid: 78,
      time: 'T3 22/06/2021'
    },
    {
      device: 'sensor 2',
      hashCode: 'ncnancia2c3sa515as1c36',
      temp: 20,
      humid: 50,
      time: 'T3 22/06/2021'
    },
    {
      device: 'sensor 3',
      hashCode: 'ncnancia2c3sa515as1c36',
      temp: 21,
      humid: 70,
      time: 'T3 22/06/2021'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
