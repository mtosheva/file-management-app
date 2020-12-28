export class FileModel {
    id:number;
    fileName: string;
    date: Date;
    constructor(fileObject: any) {
        this.id = fileObject.id;
        this.fileName = fileObject.fileName;
        this.date = fileObject.date;
    }
}

export enum Colors {
    Red = "red",
    Green="green",
    Blue= "blue",
    White="white",
    Black="black",
    Purple="purple",
    Yellow="yello",
    Brown="brown",
    Grey="grey"
  }

  export class ChartCityModel {
       name:string;
       series: Array<ChartColorModel>
  }

  export class ChartColorModel {
      name: string;
      value: number;
  }