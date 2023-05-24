export type Entity<Tidentifier extends number | string> = {
    id?: Tidentifier
}

export type ResponseApi<T> = {
    status: number,
    error: boolean,
    message: string,
    data: any
}