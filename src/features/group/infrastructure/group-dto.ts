import { Expense } from "../features/expense/domain/models/expense";


export interface GroupDTO{
    id: number;
    name: string;
    transactions: Expense[];
    people: any[];
}