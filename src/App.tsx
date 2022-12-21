import { BrowserRouter, Routes, Route } from "react-router-dom";
import GroupPage from "./features/group/ui/groups.page";


 const App = () => {
    return (
      <>
          <BrowserRouter>
            <Routes>
              {/* <Route path='/card-detail' element={<CardDetail />} />
              <Route index path='/balance/:id' element={<Balance />} /> */}
              <Route index path='/' element={<GroupPage />} />
            </Routes>
          </BrowserRouter>
      </>
    );
  };

export default App;