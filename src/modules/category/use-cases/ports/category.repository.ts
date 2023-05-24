import { Category } from "../../entities/category"
import { SaveCategoryDto } from "../../adapters/dtos/save-category.dto"

import { ResponseApi } from "../../../../kernel/types"

export interface CategoryRepository {
    saveCategory(payload: SaveCategoryDto) : Promise<ResponseApi<Category>>
    findAll() : Promise<ResponseApi<Category>>
}