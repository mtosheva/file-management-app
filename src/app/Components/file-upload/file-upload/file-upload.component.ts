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
export class FileUploadComponent implements OnInit, OnDestroy {

  // Variable to store shortLink from api response 
  shortLink: string = "";
  loading: boolean = false; // Flag variable 
  file: File = null; // Variable to store file 
  txtType: string = "text/plain";
  showError: boolean = false;
  filesList: Array<FileModel> = new Array<FileModel>();
  subscription: Subscription;
  @Output() getAllFiles: EventEmitter<any> = new EventEmitter();

  // Inject service  
  constructor(private _fileManagemntService: FileMagagementService, private _router: Router) {

  }

  ngOnInit(): void {
  }


  // On file Select 
  onFileSelect(event) {
    this.showError = false;
    if (event.target.files[0].type === this.txtType) {
      this.file = event.target.files[0];
    } else {
      this.file = null;
      this.showError = true;
    }
  }

  // OnClick of button Upload 
  onUpload() {
    this.loading = !this.loading;
    console.log(this.file);
    this._fileManagemntService.upload(this.file).subscribe(
      (event: any) => {
        if (typeof (event) === 'object') {

          // Short link via api response 
          this.shortLink = event.link;

          this.loading = false; // Flag variable 
          this.getAllFiles.emit();
        }
      }
    );
  }

  ngOnDestroy(){
  }

}
