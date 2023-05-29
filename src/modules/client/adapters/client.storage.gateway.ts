import { Client } from './../entities/client';
import { ResponseApi } from './../../../kernel/types';
import { ClientRepository} from "../use-cases/ports/client.repository";
import { SaveClientDto } from './dtos/save-client.dto';
import client from "../../../utils/db.config";
import { UpdateClientDto } from "./dtos/update-client.dto";


export class ClientGateway implements ClientRepository{

    getError(): ResponseApi<Client>{
        return{
            status: 500,
            error: true,
            message: "Error en el servidor"
        } as ResponseApi<Client>
    }

    async findAll(): Promise<ResponseApi<Client>> {
        return await client.query('SELECT * FROM clients ').then(({rows}) =>{
            return {
                status:200,
                error: false,
                message: rows.length > 0 ? "OK" : "No hay datos registrados",
                data: rows
            } as ResponseApi<Client>
        }).catch((error)=>{
            console.log(error)
            return this.getError()
        })
    }

    async saveClient(payload: SaveClientDto): Promise<ResponseApi<Client>> {
        return await client.query('INSERT INTO clients(fullname, email, visits) values($1, $2, $3)', [payload.fullname, payload.email, 0])
        .then(({rows}) =>{
            return {
                status: 200,
                error: false,
                message: "Cliente registrado correctamente",
                data: rows[0]
            } as ResponseApi<Client>
        }).catch((error) => {
            console.log(error)
            return this.getError()
        })
    }

    async updateClient(payload: UpdateClientDto): Promise<ResponseApi<Client>> {
        return await client.query('UPDATE clients SET fullname = $1, email = $2 WHERE id_client = $3', [payload.fullname, payload.email, payload.id]).then(({rows}) =>{
            return {
                status: 200,
                error: false,
                message: "Datos actualizados correctamente",
                data: rows[0]
            } as ResponseApi<Client>
        }).catch((error) =>{
            console.log(error)
            return this.getError()
        })
    }

    async deleteClient(payload: number) : Promise<ResponseApi<Client>> {
        return await client.query('DELETE FROM clients WHERE id_client = $1', [payload])
        .then(({rows}) => {
            return {
                status: 200,
                error: false,
                message: "Cliente eliminado correctamente"
            } as ResponseApi<Client>
        }).catch((error) =>{
            return this.getError()
        })
    }
}