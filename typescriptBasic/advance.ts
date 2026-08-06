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

type FileSource = { type: "file"; path: string };
const fileSource: FileSource = { type: "file", path: "/some/path/to/file.csv" };

type DBSource = { type: "db"; connectionUrl: string };
const dbSource: DBSource = { type: "db", connectionUrl: "connection-url" };

type Source = FileSource | DBSource;
function loadData(source: Source) {
  //   if ("path" in source) {
  if (source.type === "file") {
    // source.path
    // source.path;
    return;
  }
  //   source.connectionUrl
  //   source.connectionUrl;
}
