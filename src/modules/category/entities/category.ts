import { Entity } from "../../../kernel/types"

export type Category = Entity<number> & {
    title: string;
}