import prismaClient from "../../prisma";

class ListLoginUserService {
    async execute () {
        const loginUser = await prismaClient.loginUser.findMany()
        return loginUser
    };
};

export {ListLoginUserService};