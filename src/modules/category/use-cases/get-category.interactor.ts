import { SaveCategoryDto } from './../adapters/dtos/save-category.dto';
import { UseCase } from "../../../kernel/contracts"
import { Category } from "../entities/category"
import { CategoryRepository} from "./ports/category.repository"

import { ResponseApi } from "../../../kernel/types"


export class SaveCategoryInteractor implements UseCase<SaveCategoryDto, ResponseApi<Category>>{
    constructor(private repository : CategoryRepository){}

    execute(payload: SaveCategoryDto): Promise<ResponseApi<Category>>{
        return this.repository.saveCategory(payload)
    }
}