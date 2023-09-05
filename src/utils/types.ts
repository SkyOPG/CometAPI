export type fileSchema = {
    Filename: string,
    Owner: string,
    Views: number,
    Forks: number,
    FileData: {
        isPrivate: boolean,
        Code: string
    }
}