import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileUploadComponent } from './Components/file-upload/file-upload/file-upload.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ViewFileDataChartComponent } from './Components/view-file-data-chart/view-file-data-chart.component';
import { FilesSummaryComponent } from './Components/files-summary/files-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent,
    ViewFileDataChartComponent,
    FilesSummaryComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
