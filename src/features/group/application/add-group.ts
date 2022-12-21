import { injectable, inject } from "tsyringe";
import { GROUP_REPOSITORY } from "../../../core/token-keys";
import GroupRepository from "../domain/interfaces/group-repository";

@injectable()
export class AddGroupCmd {
    constructor(@inject(GROUP_REPOSITORY) private readonly repository: GroupRepository){}

    execute(newGroup: string) {
        return this.repository.addGroupCmd(newGroup);
    }
}