export interface FileUploaderFile {
  id?: string;
  name: string;
  size: number;
  type: string;
  progress?: number;
  status?: string;
  src?: string;
}
