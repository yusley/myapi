import { Request,Response,NextFunction } from "express";
import { ListCategoryService } from "../../services/category/ListCategoryService";

class ListCategoryController {
    async handle (req: Request, res: Response, next: NextFunction) {
        try{
            const listCategoryService = new ListCategoryService()
            const listCategory = await listCategoryService.execute()
            console.log(listCategory)
            res.status(200).send(listCategory)
        }catch(err){
            next(err)
        }
    }
}

export {ListCategoryController};