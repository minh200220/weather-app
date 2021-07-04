import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  isOn = false;
  timeVal;
  WeatherData:any;
  // @Output() btnClick = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  getWeatherData(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=can+tho&appid=35ef234ddb5c4561bbc2559ae6bd54d2&units=metric`)
    .then(response=>response.json())
    .then(data=>{this.WeatherData = data; console.log(this.WeatherData)})
  }

  printTime() {
    var today = new Date();
    var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = time+' '+date;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=can+tho&appid=35ef234ddb5c4561bbc2559ae6bd54d2&units=metric`)
    .then(response=>response.json())
    .then(data=>{
      this.WeatherData = data;
      console.log({
        temp: this.WeatherData.main.temp.toFixed(0) ,
        humidity: this.WeatherData.main.humidity,
        time: dateTime
      })})
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
