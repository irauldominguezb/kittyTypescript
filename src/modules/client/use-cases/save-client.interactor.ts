import { UseCase } from "../../../kernel/contracts";
import { Client } from "../entities/client";

import { SaveCategoryDto } from "../../category/adapters/dtos/save-category.dto";
import { ClientRepository } from "./ports/client.repository";

import { ResponseApi } from "../../../kernel/types";
import { SaveClientDto } from "../adapters/dtos/save-client.dto";

export class SaveClientInteractor implements UseCase<SaveClientDto, ResponseApi<Client>>{
    constructor(private repository : ClientRepository){}

    execute(payload: SaveClientDto): Promise<ResponseApi<Client>> {
        return this.repository.saveClient(payload)
    }
}