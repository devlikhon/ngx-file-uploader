import {Component, Input} from '@angular/core';
import {FileUploaderFile} from "../../models/FileUploaderFile";

@Component({
  selector: 'app-files-previewer',
  templateUrl: './files-previewer.component.html',
  styleUrls: ['./files-previewer.component.scss']
})
export class FilesPreviewerComponent {
  @Input() files: FileUploaderFile[] = [];
}
