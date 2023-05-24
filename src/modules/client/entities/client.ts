import { Entity } from "../../../kernel/types";

export type Client = Entity<number> & {
    fullname: string,
    email: string,
    visits: number
}