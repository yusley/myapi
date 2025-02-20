import prismaClient from "../../prisma";
import { CategorySchema } from "./Schemas/CategorySchema";
import { z } from 'zod'
import { BaseError } from "../../utils/errors";

class CreateCategoryService {
    async execute (category: z.infer<typeof CategorySchema>) {
        const findCategory = await prismaClient.category.findFirst({
            where : {
                title : category.title
            }
        })
        if(findCategory){
            throw new BaseError('categoria já existe!',409)
        }
        const createdCategory = await prismaClient.category.create({
            data: {
                title: category.title
            }
        })
        return createdCategory
    }
};

export {CreateCategoryService};
