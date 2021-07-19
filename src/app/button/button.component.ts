import { Component, OnInit} from '@angular/core';

import { ApiService } from '../api.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  isOn = false;
  timeVal;
  WeatherData:any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    setInterval(this.getWeatherData, 60000)
  }

  getWeatherData(){
    // var today = new Date();
    // var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    // var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    // var dateTime = time+' '+date;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=can+tho&appid=35ef234ddb5c4561bbc2559ae6bd54d2&units=metric`)
      .then(response=>response.json())
      .then(data=>{
        this.WeatherData = {
          color: '15sd61c5sd64c6s5dv4fe',
          make: data.main.temp.toFixed(0),
          model: data.main.humidity.toString(),
          owner: 'dateTime'
        };
      })
  }

  printTime() {
    var today = new Date();
    var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = time+' '+date;

    this.WeatherData = {
      ...this.WeatherData,
      owner: dateTime
    };

    this.apiService.createCar2(this.WeatherData.color, this.WeatherData.make, this.WeatherData.model, this.WeatherData.owner).subscribe();
    // this.onSubmit(this.WeatherData);
    console.log(this.WeatherData);
  }

  onSubmit(data) {
    return this.apiService.createCar2(data.color, data.make, data.model, data.owner);
  }

  onClick() {
    if (this.isOn) {
      this.isOn = !this.isOn;
      clearInterval(this.timeVal);
    } else {
      this.isOn = !this.isOn;
      this.timeVal = setInterval(this.printTime, 2000);
    }
    console.log('clicked')
  }

}
