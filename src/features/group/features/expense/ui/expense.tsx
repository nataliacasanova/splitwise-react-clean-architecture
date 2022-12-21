import Card from "../../../../../shared/components/card/card";
import { Expense } from "../domain/models/expense";


const ExpenseComponent = ({...props}: Expense) => {
    const {amount, title, personId} = props;
    return (<>
    <Card amount={amount} title={title} personId={personId}  ></Card>
    </>)
}

export  default ExpenseComponent;