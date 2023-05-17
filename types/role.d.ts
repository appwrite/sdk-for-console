export declare class Role {
    static any(): string;
    static user(id: string, status?: string): string;
    static users(status?: string): string;
    static guests(): string;
    static team(id: string, role?: string): string;
    static member(id: string): string;
}
