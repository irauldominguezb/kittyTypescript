import { Category } from './../entities/category';
import  express  from "express";
import { SaveCategoryInteractor } from "../use-cases/get-category.interactor"
import { SaveCategoryDto } from "./dtos/save-category.dto"

import { CategoryRepository } from "../use-cases/ports/category.repository"
import { CategoryGateway } from "./category.storage.gateway"
import { GetPeopleInteractor } from '../use-cases/get-categories.interactor';
export class CategoryController {
    async saveCategory(req: express.Request, res: express.Response){
        try {
            const repository : CategoryRepository = new CategoryGateway()
            const interactor : SaveCategoryInteractor = new SaveCategoryInteractor(repository)

            const entity : SaveCategoryDto = req.body

            const payload : SaveCategoryDto = {
                title: entity.title
            }

            const response = await interactor.execute(payload)

            return res.json(response)
        } catch (error) {
            return res.json(error)
        }
    }

    async getAll(req: express.Request, res: express.Response){
        try {
            const repository : CategoryRepository = new CategoryGateway()
            const interactor : GetPeopleInteractor = new GetPeopleInteractor(repository)

            const response = await interactor.execute()
            return res.json(response)

        } catch (error) {
            return res.json(error)
        }
    }
}
const categoryRouter = express.Router()
const categoryController = new CategoryController()

categoryRouter.post('/', categoryController.saveCategory)
categoryRouter.get('/', categoryController.getAll)
export default categoryRouter