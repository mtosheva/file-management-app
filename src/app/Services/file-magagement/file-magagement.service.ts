import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FileModel } from 'src/app/Models/file-model';

@Injectable({
  providedIn: 'root'
})
export class FileMagagementService {


  baseApiUrl = "https://localhost:44396/api/v1/File/Create"
    
  constructor(private http: HttpClient) { } 
  private headers = new HttpHeaders({
    'Content-Type': 'text/plain',
    'Accept': 'q=0.8;application/json;q=0.9'
  });
  // Returns an observable 
  upload(file):Observable<any> { 
  
      // Create form data 
      const formData = new FormData();  
        
      // Store form name as "file" with file data 
      formData.append("file", file, file.name); 
        
      // Make http post request over api 
      // with formData as req 
      return this.http.post(this.baseApiUrl, formData ); 
  } 

  getFiles(): Observable<any> {   
    return this.http.get('https://localhost:44396/api/v1/File/GetFiles'); 
  } 

  getFileData(id: number): Observable<any> {
    return this.http.get(`https://localhost:44396/api/v1/File/GetFileData/?id=${id}`,); 
  }
}
