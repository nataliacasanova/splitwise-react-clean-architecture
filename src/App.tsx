import {BrowserRouter, Route, Routes} from "react-router-dom";
import ExpenseDetail from "./features/group/features/expense/ui/expense-detail/expense-detail";
import GroupPage from "./features/group/ui/groups.page";


const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {/*<Route index path='/balance/:id' element={<Balance/>}/>*/}
                    <Route index path='/' element={<GroupPage/>}/>
                    <Route path='/expense-detail' element={<ExpenseDetail/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;