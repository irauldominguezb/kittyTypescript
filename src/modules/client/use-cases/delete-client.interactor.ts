import { UseCase } from "../../../kernel/contracts";
import client from "../../../utils/db.config";

import { ClientRepository } from "./ports/client.repository";
import { ResponseApi } from "../../../kernel/types";
import { Client } from "../entities/client";


export class DeleteClientInteractor implements UseCase<number, ResponseApi<Client>>{
    constructor(private repository : ClientRepository){}

    execute(payload: number): Promise<ResponseApi<Client>> {
        return this.repository.deleteClient(payload)
    }
}