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

type FileSource = { path: string };
const fileSource: FileSource = { path: "/some/path/to/file.csv" };

type DBSource = { connectionUrl: string };
const dbSource: DBSource = { connectionUrl: "connection-url" };

type Source = FileData | DBSource;
function loadData(source: Source) {
  if ("path" in source) {
    // source.path;
    return;
  }
  //   source.connectionUrl;
}
