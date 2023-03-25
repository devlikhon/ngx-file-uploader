import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';
import { FileSelectorComponent } from './file-uploader/components/file-selector/file-selector.component';
import { FilesPreviewerComponent } from './file-uploader/components/files-previewer/files-previewer.component';

@NgModule({
  declarations: [
    AppComponent,
    FileUploaderComponent,
    FileSelectorComponent,
    FilesPreviewerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
