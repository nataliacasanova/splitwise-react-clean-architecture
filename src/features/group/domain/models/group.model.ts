import { Expense, ExpenseSummary } from "../../features/expense/domain/models/expense";


export interface Group{
    id: number;
    name: string;
    transactions: Expense[] | ExpenseSummary[];
    people: any[];
}

export type NewGroup = Pick<Group, 'name'>;

export type GroupSummary = Pick<Group,'id'| 'name' | 'transactions'>;

