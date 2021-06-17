import { Component, OnInit } from '@angular/core';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { FileUpload } from '../models/file-upload';

@Component({
  selector: 'app-upload-intern',
  templateUrl: './upload-intern.component.html',
  styleUrls: ['./upload-intern.component.css']
})
export class UploadInternComponent implements OnInit {

selectedFiles: any = {};
currentFileUpload: FileUpload = {};
percentage: number = 0;
successMsg: boolean = false;


constructor(private uploadService: FileUploadService) { }

  ngOnInit(): void {
  }
  
  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  upload(): void {
    const file = this.selectedFiles.item(0);
    this.selectedFiles = undefined;

    this.currentFileUpload = new FileUpload(file);
    this.uploadService.pushFileInternToStorage(this.currentFileUpload).subscribe(
      percentage => {
        this.percentage = Math.round(Number(percentage));
        if (Number(percentage) === 100) {
          this.successMsg = true;
        }
      },
      error => {
        console.log(error);
      }
    );
  }
}
