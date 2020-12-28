import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FileModel } from 'src/app/Models/file-model';
import { FileMagagementService } from 'src/app/Services/file-magagement/file-magagement.service';

@Component({
  selector: 'app-files-summary',
  templateUrl: './files-summary.component.html',
  styleUrls: ['./files-summary.component.css']
})
export class FilesSummaryComponent implements OnInit {

  file: File = null; // Variable to store file 

  filesList: Array<FileModel> = new Array<FileModel>();
  subscription: Subscription;

  // Inject service  
  constructor(private _fileManagemntService: FileMagagementService, private _router: Router) {

  }

  ngOnInit(): void {
    this.getFiles();
  }

  getFiles() {
   this.subscription = this._fileManagemntService.getFiles().subscribe(files => {
      this.filesList = files.map(x => new FileModel(x));
    });
  }

  getFileData(selectedFile: FileModel) {
    this._router.navigate(['file', selectedFile.id]);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
