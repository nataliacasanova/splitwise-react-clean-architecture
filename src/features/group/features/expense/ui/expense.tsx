import { FC } from "react";
import Card from "../../../../../shared/components/card/card";
import { Expense } from "../domain/models/expense";


const ExpenseComponent: FC<{expense: Expense}> = ({ expense }) => {
    return (<>
    <Card expense={expense}></Card>
    </>)
}

export  default ExpenseComponent;