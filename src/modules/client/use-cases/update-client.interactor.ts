import { UseCase } from "../../../kernel/contracts";

import { Client } from "../entities/client";

import { UpdateClientDto } from "../adapters/dtos/update-client.dto";

import { ClientRepository } from "./ports/client.repository";

import { ResponseApi } from "../../../kernel/types";

export class UpdateClientInteractor implements UseCase<UpdateClientDto, ResponseApi<Client>> {
    constructor(private repository : ClientRepository){}

    execute(payload: UpdateClientDto): Promise<ResponseApi<Client>> {
        return this.repository.updateClient(payload)
    }
}