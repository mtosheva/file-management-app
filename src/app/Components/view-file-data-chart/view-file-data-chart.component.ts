import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChartCityModel, ChartColorModel, Colors } from 'src/app/Models/file-model';
import { FileMagagementService } from 'src/app/Services/file-magagement/file-magagement.service';

@Component({
  selector: 'app-view-file-data-chart',
  templateUrl: './view-file-data-chart.component.html',
  styleUrls: ['./view-file-data-chart.component.css']
})
export class ViewFileDataChartComponent implements OnInit {
  view: any[] = [700, 700];

  myColors: any = [
    { name: 'green', value: Colors.Green },
    { name: 'red', value: Colors.Red },
    { name: 'purple', value: Colors.Purple },
    { name: 'white', value: Colors.White },
    { name: 'black', value: Colors.Black },
    { name: 'yello', value: Colors.Yellow },
    { name: 'brown', value: Colors.Brown },
    { name: 'grey', value: Colors.Grey },
    { name: 'blue', value: Colors.Blue },
  ];

  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Cities';
  showYAxisLabel = true;
  yAxisLabel = 'Values';
  fileId: string = null;

  chartModel: Array<ChartCityModel> = [];
  hasData: boolean = false;

  constructor(private route: ActivatedRoute,private  _fileManagemntService: FileMagagementService) {
   }

  ngOnInit() {
    this.fileId = this.route.snapshot.paramMap.get('id');
     this.getFileData();
  }

  getFileData(){
    this._fileManagemntService.getFileData(Number(this.fileId)).subscribe(fileData => {
      if(fileData.length > 0) {
        this.hasData = true;
        this.mapFileDataToChartModel(fileData);
      }
     });
  }

  mapFileDataToChartModel(fileData){
    let chartModel = [];
    fileData.forEach(row => {

      let  chartCitymodel = new ChartCityModel();
      let chartColorModel = new ChartColorModel();

      chartCitymodel.name = row.label;
      chartCitymodel.series = [];
      chartColorModel.name = row.color;
      chartColorModel.value = row.number;
      chartCitymodel.series.push({...chartColorModel});
      chartModel.push({...chartCitymodel});
      this.chartModel = [...chartModel]; 
    });
  }
  // mapFileDataToChartModel(fileData){
  //   let chartModel = [];
  //   fileData.forEach(row => {
  //     let chartCitymodel =  {
  //       name: row.label,
  //       series: [],
  //     };
  //     // chartCitymodel.name = row.label;
  //     // chartCitymodel.series = [];
  //    // let chartColormodel =  new ChartColorModel();
  //    let chartColormodel = {
  //     name: row.color,
  //     value: row.number
  //    };

  //     // chartColormodel.name = row.color;
  //     // chartColormodel.value = row.number;
  //     chartCitymodel.series.push(chartColormodel);
  //     chartModel.push(chartCitymodel);
  //   });
  //   console.log(chartModel);
  //   this.chartModel = [...chartModel];
  // }

}
