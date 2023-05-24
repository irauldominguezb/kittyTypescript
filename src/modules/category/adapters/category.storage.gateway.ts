import { CategoryRepository } from "../use-cases/ports/category.repository";

import { Category } from "../entities/category"
import { SaveCategoryDto } from "./dtos/save-category.dto"

import { ResponseApi } from "../../../kernel/types"

import client from "../../../utils/db.config";

export class CategoryGateway implements CategoryRepository {

    getError() : ResponseApi<Category>{
        return {
            status: 500,
            error: true,
            message: "Error en el servidor",
        } as ResponseApi<Category>
    }

    async saveCategory(payload: SaveCategoryDto): Promise<ResponseApi<Category>> {
        return await client.query('INSERT INTO categories(title) VALUES($1)', [payload.title])
        .then(({rows}) =>{
            return{
                status: 200,
                error: false,
                message: "Category inserted correctly",
                data: rows[0]
            } as ResponseApi<Category>
        }).catch((error)=>{
            console.log(error)
            return this.getError()
        })
    }

    async findAll(): Promise<ResponseApi<Category>> {
        return await client.query('SELECT * FROM categories')
        .then(({rows}) =>{
            return {
                status: 200,
                error: false,
                message: rows.length > 0 ? "OK" : "Sin registros",
                data: rows
            } as ResponseApi<Category>
        }).catch((error) =>{
            console.log(error)
            return this.getError();
        })
    }
}