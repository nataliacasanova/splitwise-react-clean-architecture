import { injectable } from "tsyringe";
import { generateRandomid } from "../../../../../../shared/providers/utils";
import { GetAllGroupsQry } from "../../../../application/get-all-groups";
import { GroupSummary } from "../../../../domain/models/group.model";
import { ExpenseRepository } from "../../domain/interfaces/expense-repository";
import { Expense, ExpenseSummary, NewExpense } from "../../domain/models/expense";


@injectable()
export class LocalExpenseRepository implements ExpenseRepository {

    constructor(private getAllGroups: GetAllGroupsQry) { }

    async addExpenseCmd(idGroup: number, expense: NewExpense) {
        const expenses = JSON.parse(localStorage.getItem('expenses')) || [];
        const groups = await this.getAllGroups.execute();
        const index = this.getCurrentGroupIndex(idGroup, groups);
        const id = generateRandomid();
        groups[index].transactions.push({ ...expense, id });
        expenses.push({ ...expense, id });

        localStorage.setItem('expenses', JSON.stringify(expense));
    }

 

    private getCurrentGroupIndex(idGroup: number, groups: GroupSummary[]) {
        return groups.findIndex(group => group.id === idGroup)
    }


}