import { Client } from "../../entities/client";
import { SaveClientDto } from "../../adapters/dtos/save-client.dto";
import { ResponseApi } from "../../../../kernel/types";

export interface ClientRepository {
    saveClient(payload: SaveClientDto): Promise<ResponseApi<Client>>
    findAll(): Promise<ResponseApi<Client>>
}