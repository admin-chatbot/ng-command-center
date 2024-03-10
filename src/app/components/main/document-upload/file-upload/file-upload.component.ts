import { Component } from '@angular/core';
import { NgxDropzoneChangeEvent } from 'ngx-dropzone';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})


export class FileUploadComponent {
  
  public files2: File[] = [];

  onSelect2(event: NgxDropzoneChangeEvent) {
    this.files2.push(...event.addedFiles);
  }

  onRemove2(event: File) {
    this.files2.splice(this.files2.indexOf(event), 1);
  }
}
