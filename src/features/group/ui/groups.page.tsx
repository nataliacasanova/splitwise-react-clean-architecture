import { useEffect } from "react";
import GroupViewComponent from "./components/group-view/group-view.component";



const GroupPage = () => {

    useEffect(() => {
        console.log('ENTRA')
    },[])
    return (
    <GroupViewComponent></GroupViewComponent>);
}

export default GroupPage;