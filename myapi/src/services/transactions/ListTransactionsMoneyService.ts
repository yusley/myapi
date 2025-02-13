import prismaClient from "../../prisma";

class listTransactionsMoneyService {
    async execute() {
        const transactions = await prismaClient.transactionsMoney.findMany({
            include: {category: true}
        })
        return transactions
    };
};

export { listTransactionsMoneyService };