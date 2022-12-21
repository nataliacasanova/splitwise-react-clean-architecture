
type Id = number

export interface Expense{
    id: Id;
    description: string;
    amount: string;
    groupId: Id
    title: string;
    date: string;
    personId: Id;
}

export type ExpenseSummary = Expense
export type NewExpense = Omit<Expense, 'id'>;
