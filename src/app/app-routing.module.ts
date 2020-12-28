import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileUploadComponent } from './Components/file-upload/file-upload/file-upload.component';
import { FilesSummaryComponent } from './Components/files-summary/files-summary.component';
import { ViewFileDataChartComponent } from './Components/view-file-data-chart/view-file-data-chart.component';


const routes: Routes = [
  { path: '', component: FilesSummaryComponent },
  { path: 'file/:id', component: ViewFileDataChartComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
