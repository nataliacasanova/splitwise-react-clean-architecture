import { inject, injectable } from "tsyringe";
import { EXPENSE_REPOSITORY } from "../../../../../core/token-keys";
import  ExpenseRepository from "../domain/interfaces/expense-repository";
import { Expense } from "../domain/models/expense";

@injectable()
export class GetExpensesByGroupQry {
    constructor(@inject(EXPENSE_REPOSITORY) private readonly repository: ExpenseRepository){}

    execute(groupId: number): Promise<Expense[]> {
        return this.repository.getExpenses(groupId)
    }
}