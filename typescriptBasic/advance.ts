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

function isFile(source: Source) {
  return source.type === "file";
}

function loadData(source: Source) {
  //   if ("path" in source) {
  //   if (source.type === "file") {
  if (isFile(source)) {
    // source.path
    // source.path;
    return;
  }
  //   source.connectionUrl
  //   source.connectionUrl;
}

class User {
  constructor(public name: string) {}
  join() {
    // ...
  }
}

class Admin {
  constructor(permissions: string[]) {}
  scan() {
    // ...
  }
}

const user = new User("max");
const admin = new Admin(["ban", "restore"]);

type Entity = User | Admin;

function init(entity: Entity) {
  if (entity instanceof User) {
    entity.join();
    return;
  }

  entity.scan();
  return;
}

function getLength(val: string | any) {
  if (typeof val === "string") {
    const numberOfWords = val.split(" ").length;
    return `${numberOfWords} words`;
  }

  return val.length;
}

const numOfWords = getLength("does this work?");
const numOfItems = getLength(["sport", "cookies"]);
