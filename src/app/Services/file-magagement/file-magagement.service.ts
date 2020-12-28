import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FileModel } from 'src/app/Models/file-model';
import { catchError, map, tap } from 'rxjs/operators';


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

  upload(file):Observable<any> { 
  
      const formData = new FormData();  
        
      formData.append("file", file, file.name); 
        

      return this.http.post("https://localhost:44396/api/v1/File/Create", formData)
      .pipe(
        catchError(x=>{
          console.log(x)
          return of();
        })
      ); 
  } 

  getFiles(): Observable<any> {   
    return this.http.get('https://localhost:44396/api/v1/File/GetFiles')
    .pipe(
      catchError(x=>{
        console.log(x)
        return of();
      })
    );  
  } 

  getFileData(id: number): Observable<any> {
    return this.http.get(`https://localhost:44396/api/v1/File/GetFileData/?id=${id}`)
    .pipe(
      catchError(x=>{
        console.log(x)
        return of();
      })
    ); 
  }
}
