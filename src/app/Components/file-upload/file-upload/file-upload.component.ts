import { Component, EventEmitter, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FileModel, Colors } from 'src/app/Models/file-model';
import { FileMagagementService } from 'src/app/Services/file-magagement/file-magagement.service';
@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  shortLink: string = "";
  loading: boolean = false; 
  file: File = null; 
  txtType: string = "text/plain";
  showError: boolean = false;
  @Output() getAllFiles: EventEmitter<any> = new EventEmitter();

  constructor(private _fileManagemntService: FileMagagementService, private _router: Router) {

  }

  ngOnInit(): void {
  }

  onFileSelect(event) {
    this.showError = false;
    if (event.target.files[0].type === this.txtType) {
      this.file = event.target.files[0];
    } else {
      this.file = null;
      this.showError = true;
    }
  }

  onUpload() {
    this.loading = !this.loading;
    console.log(this.file);
    this._fileManagemntService.upload(this.file).subscribe(
      x => {
          this.loading = false; 
          this.getAllFiles.emit();      
      }
    );
  }


}
