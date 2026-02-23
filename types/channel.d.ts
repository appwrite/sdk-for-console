interface Database {
    _db: any;
}
interface Collection {
    _coll: any;
}
interface Document {
    _doc: any;
}
interface TablesDB {
    _tdb: any;
}
interface Table {
    _tbl: any;
}
interface Row {
    _row: any;
}
interface Bucket {
    _bkt: any;
}
interface File {
    _file: any;
}
interface Func {
    _fn: any;
}
interface Execution {
    _exec: any;
}
interface Team {
    _team: any;
}
interface Membership {
    _mem: any;
}
interface Resolved {
    _res: any;
}
declare type Actionable = Document | Row | File | Team | Membership;
export declare class Channel<T> {
    private readonly segments;
    _type: T;
    private constructor();
    private next;
    private resolve;
    toString(): string;
    collection(this: Channel<Database>, id?: string): Channel<Collection>;
    document(this: Channel<Collection>, id?: string): Channel<Document>;
    table(this: Channel<TablesDB>, id?: string): Channel<Table>;
    row(this: Channel<Table>, id?: string): Channel<Row>;
    file(this: Channel<Bucket>, id?: string): Channel<File>;
    create(this: Channel<Actionable>): Channel<Resolved>;
    upsert(this: Channel<Document | Row>): Channel<Resolved>;
    update(this: Channel<Actionable>): Channel<Resolved>;
    delete(this: Channel<Actionable>): Channel<Resolved>;
    static database(id?: string): Channel<Database>;
    static execution(id?: string): Channel<Execution>;
    static tablesdb(id?: string): Channel<TablesDB>;
    static bucket(id?: string): Channel<Bucket>;
    static function(id?: string): Channel<Func>;
    static team(id?: string): Channel<Team>;
    static membership(id?: string): Channel<Membership>;
    static account(): string;
    static documents(): string;
    static rows(): string;
    static files(): string;
    static executions(): string;
    static teams(): string;
    static memberships(): string;
}
export declare type ActionableChannel = Channel<Document> | Channel<Row> | Channel<File> | Channel<Execution> | Channel<Team> | Channel<Membership>;
export declare type ResolvedChannel = Channel<Resolved>;
export {};
