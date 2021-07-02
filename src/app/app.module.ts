import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { QueryAllCarsComponent } from './query-all-cars/query-all-cars.component';
import { ApiService } from './api.service';
import { CreateCarFormComponent } from './create-car-form/create-car-form.component';
import { HistoryComponent } from './history/history.component';
import { WeatherWidgetComponent } from './weather-widget/weather-widget.component';
import { WeatherComponent } from './weather/weather.component';
import { ButtonComponent } from './button/button.component';

const appRoutes: Routes = [
  { path: '', component: WeatherComponent },
  { path: 'history', component: HistoryComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    QueryAllCarsComponent,
    CreateCarFormComponent,
    HistoryComponent,
    WeatherWidgetComponent,
    WeatherComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
