import { injectable } from 'tsyringe';
import { generateRandomid } from '../../../../shared/providers/utils';
import GroupRepository from '../../domain/interfaces/group-repository';
import { GroupSummary } from "../../domain/models/group.model";


@injectable()
export class LocalGroupRepository implements GroupRepository {
    async addGroupCmd(name: string) {
        const groups = (await this.getAllGroupsQry()) || []  ;
        if(!this.isDuplicatedGroup(groups, name)){
            groups.push({
                name, id: generateRandomid(), transactions: []
            });
            localStorage.setItem('groups', JSON.stringify(groups));
        }

    }

    async getGroupOverviewQry(groupCount: number): Promise<GroupSummary[]>{
        const groups = await this.getAllGroupsQry();
        return groups.slice(Math.max(groups.length - groupCount, 0))
    }

    getAllGroupsQry(): Promise<GroupSummary[]> {
        return JSON.parse(localStorage.getItem('groups'));
    }


    private isDuplicatedGroup(array: GroupSummary[] , name: string){
        return array?.some(element => element?.name === name);
    }}