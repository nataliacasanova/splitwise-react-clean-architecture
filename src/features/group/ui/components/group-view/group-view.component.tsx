import { bind } from "../../../../../core/bind";
import GroupActionsComponent from "../group-actions/group-actions.component";
import GroupListComponent from "../group-list/group-list.component";

import styles from './group-view.module.css';

const cx = bind(styles);

const GroupViewComponent = () => {

    return (<div className={cx('main')}>

       <div>
            <GroupActionsComponent></GroupActionsComponent>
        </div>
        <div>
            <GroupListComponent></GroupListComponent>
        </div>
    </div>)
}

export default GroupViewComponent;