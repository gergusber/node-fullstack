import action from "./Action";

export interface ImportRequest extends action {
  type: ImportTypes;
  url: string;
  createdAt: Date;
  updatedAt: Date | null;
}

enum ImportTypes {
  word = "word",
  pdf = "pdf",
  wattpad = "wattpad",
  evernote = "evernote"
}

