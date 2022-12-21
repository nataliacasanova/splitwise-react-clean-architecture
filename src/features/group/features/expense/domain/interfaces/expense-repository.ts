import { NewExpense } from "../models/expense";


export interface ExpenseRepository{
    addExpenseCmd(idGroup: number, expense: NewExpense): void;
}