import { UseCase } from "../../../kernel/contracts"
import { Category } from "../entities/category"
import { CategoryRepository } from "./ports/category.repository"
import { ResponseApi } from "../../../kernel/types"

export class GetPeopleInteractor implements UseCase<null, ResponseApi<Category>>{
    constructor(private repository : CategoryRepository){}

    execute(): Promise<ResponseApi<Category>> {
        return this.repository.findAll()
    }
}