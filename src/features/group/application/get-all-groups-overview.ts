import { inject, injectable } from "tsyringe";
import { GROUP_REPOSITORY } from "../../../core/token-keys";
import GroupRepository from "../domain/interfaces/group-repository";
import { GroupSummary } from "../domain/models/group.model";

@injectable()

export class GetAllGroupsOverviewQry{
    constructor(@inject(GROUP_REPOSITORY) private readonly repository: GroupRepository){}

    execute(groupCount: number): Promise<GroupSummary[]> {
        return this.repository.getGroupOverviewQry(groupCount);
    }
}