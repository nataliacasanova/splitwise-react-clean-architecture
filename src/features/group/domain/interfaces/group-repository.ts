import { GroupSummary } from "../models/group.model";


export default interface GroupRepository{
    getAllGroupsQry(): Promise<GroupSummary[]>
    addGroupCmd(name: string): void;
    getGroupOverviewQry(groupCount: number):Promise<GroupSummary[]>;
}