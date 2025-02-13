import { Request, Response, NextFunction } from "express";
import { CreateCategoryService } from "../../services/category/CreateCategoryService";
import { CategorySchema } from "../../services/category/validCategorySchema/CategorySchema";

class CreateCategoryController {
    async handle (req: Request, res: Response, next: NextFunction) {
        try{
            const category = CategorySchema.parse(req.body)
            const createCategoryService = new CreateCategoryService()
            const createdCategory = await createCategoryService.execute(category)
            res.status(201).send(createdCategory)
        }catch(err){
            next(err);
        }
    };
};

export {CreateCategoryController}