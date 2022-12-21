import { inject, injectable } from "tsyringe";
import { EXPENSE_REPOSITORY } from "../../../../../core/token-keys";
import { ExpenseRepository } from "../domain/interfaces/expense-repository";
import { NewExpense } from "../domain/models/expense";


@injectable()
export class AddExpenseCmd {
    constructor(@inject(EXPENSE_REPOSITORY) private readonly repository: ExpenseRepository){}

    execute(idGroup:number, newExpense: NewExpense) {
        return this.repository.addExpenseCmd(idGroup, newExpense);
    }
}