import express from 'express'

import { ClientRepository } from '../use-cases/ports/client.repository'
import { GetClientsInteractor } from '../use-cases/get-clients.interactor'
import { UpdateClientInteractor } from '../use-cases/update-client.interactor'

//dtos y entidades
import { SaveClientDto } from './dtos/save-client.dto'
import { UpdateClientDto } from './dtos/update-client.dto'

//repositorios de donde se va a sacar la funcion
import { ClientGateway } from './client.storage.gateway'
import { SaveClientInteractor } from '../use-cases/save-client.interactor';
import { SaveCategoryDto } from '../../category/adapters/dtos/save-category.dto';
import { DeleteClientInteractor } from './../use-cases/delete-client.interactor';

export class ClientController {

    async findAllClients(req : express.Request, res : express.Response){
        try {
            const repository : ClientRepository = new ClientGateway()
            const interactor : GetClientsInteractor = new GetClientsInteractor(repository)

            const response = await interactor.execute()

            return res.json(response)
        } catch (error) {
            return res.json(error)
        }
    }

    async updateClient(req: express.Request, res: express.Response) {
        try {
            const repository : ClientRepository = new ClientGateway()
            const interactor : UpdateClientInteractor = new UpdateClientInteractor(repository)

            const { id } = req.params

            const entity : UpdateClientDto = req.body

            const payload : UpdateClientDto = {
                id: parseInt(id),
                fullname: entity.fullname,
                email: entity.email
            }

            const response = await interactor.execute(payload)

            return res.json(response)
            
        } catch (error) {
            return res.json(error)
            
        }
    }

    async saveCient(req: express.Request, res: express.Response){
        try {
            const repository : ClientRepository = new ClientGateway()
            const interactor: SaveClientInteractor = new SaveClientInteractor(repository)

            const entity: SaveClientDto = req.body;

            const payload: SaveClientDto = {
                fullname: entity.fullname,
                email: entity.email,
                visits: entity.visits

            }

            const response = await interactor.execute(payload)

            return res.json(response)
        } catch (error) {
            return res.json(error)
        }
    }

    async DeleteClient (req: express.Request, res: express.Response) {
        try{
            const repository : ClientRepository = new ClientGateway();
            const interactor : DeleteClientInteractor = new DeleteClientInteractor(repository);

            const { id } = req.params;
            const response = await interactor.execute(parseInt(id));

            return res.json(response);
        }catch(error){
            return res.json(error);
        }
    }

    
}

const clientRouter = express.Router()
const clientController = new ClientController()

clientRouter.get('/', clientController.findAllClients)
clientRouter.post('/', clientController.saveCient)
clientRouter.put('/:id', clientController.updateClient)
clientRouter.delete('/:id', clientController.DeleteClient)

export default clientRouter