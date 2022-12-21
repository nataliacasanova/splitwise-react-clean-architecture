import { useEffect, useState } from "react";
import { bind } from "../../../../../core/bind";
import { useResolve } from "../../../../../core/use-resolve";
import { GetAllGroupsOverviewQry } from "../../../application/get-all-groups-overview";
import { GroupSummary } from "../../../domain/models/group.model";
import GroupComponent from "../group/group.component";
import styles from './group-list.module.css';

const cx = bind(styles);

const GroupListComponent = () => {

    const [groups, setGroups] = useState([]);
    const getGroups = useResolve(GetAllGroupsOverviewQry);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getGroups.execute(5);
            setGroups(data);
        }

        fetchData()
            .catch(console.error);
    }, [groups]);

    return (<div className={cx('list-wrapper')}>
        {groups?.map((group: GroupSummary, index) => {
            return (
                <>
                    <GroupComponent key={index.toString()} {...group}></GroupComponent>
                </>
            );
        })}
    </div>)
};

export default GroupListComponent;