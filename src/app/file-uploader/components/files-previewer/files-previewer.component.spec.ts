import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesPreviewerComponent } from './files-previewer.component';

describe('FilesPreviewerComponent', () => {
  let component: FilesPreviewerComponent;
  let fixture: ComponentFixture<FilesPreviewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilesPreviewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilesPreviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
