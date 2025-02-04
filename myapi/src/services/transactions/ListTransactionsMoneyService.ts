import prismaClient from "../../prisma";

class listTransactionsMoneyService {
    async execute() {
        const transactions = await prismaClient.transactionsMoney.findMany()
        return transactions
    }

}

export { listTransactionsMoneyService };