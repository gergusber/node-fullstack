import action from "./Action"


export interface ExportRequest extends action {
  type: ExportTypes;
  createdAt: Date;
  updatedAt: Date | null;
}


export enum ExportTypes {
  pdf= "pdf",
  epub= "epub",
}

