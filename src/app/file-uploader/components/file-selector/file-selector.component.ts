import {Component, ElementRef, Input, Output, ViewChild, EventEmitter} from '@angular/core';
import {FileUploaderFile} from "../../models/FileUploaderFile";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-file-selector',
  templateUrl: './file-selector.component.html',
  styleUrls: ['./file-selector.component.scss']
})
export class FileSelectorComponent {
  @ViewChild('fileSelectorControl') fileSelectorControl!: ElementRef<HTMLInputElement>;

  @Input() fileSelectionButtonLabel: string = 'Choose File';
  @Input() multiple: boolean = true;
  @Output('files') selectedFiles: EventEmitter<FileUploaderFile[]> = new EventEmitter<FileUploaderFile[]>();

  private files: FileUploaderFile[] = [];

  constructor(
    private sanitizer: DomSanitizer
  ) {
  }

  openSystemFileSelector() {
    this.fileSelectorControl.nativeElement.click();
  }

  onFileSelection(event: Event) {
    const fileList = (event.target as HTMLInputElement).files;
    const files = Array.from(fileList || []);

    files.forEach(file => {
      // @ts-ignore
      file.src = this.updateFileUrl(file);
    });

    if (this.multiple) {
      this.files = [...this.files, ...files];
    } else {
      const file = files[0];
      this.files = [file];
    }

    this.selectedFiles.emit(this.files);
  }

  private updateFileUrl(file: File) {
    return this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(file));
  }
}
