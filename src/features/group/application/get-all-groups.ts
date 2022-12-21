import { inject, injectable } from "tsyringe";
import { GROUP_REPOSITORY } from "../../../core/token-keys";
import GroupRepository from "../domain/interfaces/group-repository";

@injectable()

export class GetAllGroupsQry{
    constructor(@inject(GROUP_REPOSITORY) private readonly repository: GroupRepository){}

    execute() {
        return this.repository.getAllGroupsQry();
    }
}