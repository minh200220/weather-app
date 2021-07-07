import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { CreateCarFormComponent } from './create-car-form/create-car-form.component';
import { HistoryComponent } from './history/history.component';
import { WeatherWidgetComponent } from './weather-widget/weather-widget.component';
import { WeatherComponent } from './weather/weather.component';
import { ButtonComponent } from './button/button.component';
import { LineChartComponent } from './line-chart/line-chart.component';

const appRoutes: Routes = [
  { path: '', component: WeatherComponent },
  { path: 'history', component: HistoryComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    CreateCarFormComponent,
    HistoryComponent,
    WeatherWidgetComponent,
    WeatherComponent,
    ButtonComponent,
    LineChartComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
