import { Expense, NewExpense } from "../models/expense";


export default interface ExpenseRepository {
    addExpense(idGroup: number, expense: NewExpense): void;
    getExpenses(groupdId: number): Promise<Expense[]>
}
