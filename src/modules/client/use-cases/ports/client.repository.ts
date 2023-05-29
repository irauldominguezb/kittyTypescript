import { Client } from "../../entities/client";
import { SaveClientDto } from "../../adapters/dtos/save-client.dto";
import { ResponseApi } from "../../../../kernel/types";
import { UpdateClientDto } from "../../adapters/dtos/update-client.dto";

export interface ClientRepository {
    saveClient(payload: SaveClientDto): Promise<ResponseApi<Client>>
    findAll(): Promise<ResponseApi<Client>>
    updateClient(payload: UpdateClientDto): Promise<ResponseApi<Client>>
    deleteClient(payload: number) : Promise<ResponseApi<Client>>
}