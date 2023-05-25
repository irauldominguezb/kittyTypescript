import { UseCase } from "../../../kernel/contracts";

import { Client } from "../entities/client";

import { ClientRepository } from "./ports/client.repository";
import { ResponseApi } from "../../../kernel/types";

export class GetClientInteractor implements UseCase<null, ResponseApi<Client>>{
    constructor(private repository: ClientRepository){}

    execute(): Promise<ResponseApi<Client>>{
        return this.repository.findAll()
    }
}