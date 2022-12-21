

export interface Expense{
    id: number;
    description: string;
    amount: string;
    title: string;
    date: string;
    personId: number | any;
}

export type ExpenseSummary = Pick<Expense, 'amount' | 'personId' | 'title'>
export type NewExpense = Omit<Expense, 'id'>;
