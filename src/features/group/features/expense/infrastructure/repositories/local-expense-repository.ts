import { injectable } from "tsyringe";
import { generateRandomid } from "../../../../../../shared/providers/utils";
import { GroupSummary } from "../../../../domain/models/group.model";
import ExpenseRepository from "../../domain/interfaces/expense-repository";
import { Expense, NewExpense } from "../../domain/models/expense";


@injectable()
export class LocalExpenseRepository implements ExpenseRepository {
    async getExpenses(groupdId: number): Promise<Expense[]> {
        const expenses: Expense[] = JSON.parse(localStorage.getItem('expenses')) ?? [];
        return expenses.filter(x => x.groupId === groupdId)
    }

    async addExpense(idGroup: number, expense: NewExpense) {
        const expenses = JSON.parse(localStorage.getItem('expenses')) ?? [];
        const id = generateRandomid();
        expenses.push({ ...expense, id });

        localStorage.setItem('expenses', JSON.stringify(expense));
    }

 

    private getCurrentGroupIndex(idGroup: number, groups: GroupSummary[]) {
        return groups.findIndex(group => group.id === idGroup)
    }


}