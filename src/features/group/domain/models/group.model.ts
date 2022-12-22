export interface Group {
    id: number;
    name: string;
}

export type NewGroup = Pick<Group, 'name'>;

export type GroupSummary = Group;

