import { container } from "tsyringe";
import { LocalExpenseRepository } from "../features/group/features/expense/infrastructure/repositories/local-expense-repository";
import { LocalGroupRepository } from "../features/group/infrastructure/repositories/local-group-repository";
import { EXPENSE_REPOSITORY, GROUP_REPOSITORY} from './token-keys';


container.registerSingleton(GROUP_REPOSITORY, LocalGroupRepository);
container.registerSingleton(EXPENSE_REPOSITORY, LocalExpenseRepository);



export {container}