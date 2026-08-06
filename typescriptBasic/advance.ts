// type FileData = {
//   path: string;
//   content: string;
// };

// type DatabaseData = {
//   connectionUrl: string;
//   crendentials: string;
// };

// type Status = {
//   isOpen: boolean;
//   errorMessage?: string;
// };

// type AccessFileData = FileData & Status;
// type AccessDatabaseData = DatabaseData & Status;

// interface FileData  {
//   path: string;
//   content: string;
// };

// interface DatabaseData  {
//   connectionUrl: string;
//   crendentials: string;
// };

// type Status = {
//   isOpen: boolean;
//   errorMessage?: string;
// };

// type AccessFileData = FileData & Status;
// interface AccessDatabaseData extends DatabaseData , Status {}

interface FileData {
  path: string;
  content: string;
}

interface DatabaseData {
  connectionUrl: string;
  crendentials: string;
}

interface Status {
  isOpen: boolean;
  errorMessage?: string;
}

interface AccessFileData extends FileData, Status {}
interface AccessDatabaseData extends DatabaseData, Status {}
