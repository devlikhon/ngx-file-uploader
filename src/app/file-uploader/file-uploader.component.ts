import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {FileUploaderFile} from "./models/FileUploaderFile";

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss']
})
export class FileUploaderComponent {
  @Input() label: string = 'Upload files';
  files: FileUploaderFile[] = [];
}
