import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lists from "./pages/list/List";
import NewSingle from "../src/pages/single/NewSingle";
// import RecentNew from "./pages/recentNew/RecentNew";
import AddNewItem from "./pages/addNewItem/AddNewItem";
import { productsInput, userInputs } from "./formSource";
import ViewProduct from "./pages/viewProduct/ViewProduct";
import DetailProduct from "./pages/detailProduct/DetailProduct";
import WebPage from "./pages/webPage/WebPage";
import FilterProduct from "./pages/filterProduct/FilterProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WebPage />}></Route>
          <Route path="/dashboard" element={<Home />} />
          <Route
            path="/addUser"
            element={<AddNewItem inputs={userInputs} title="Add New User" />}
          />
          <Route path="/users/:uid" element={<NewSingle />} />
          <Route path="/viewUsers" element={<Lists />} />
          <Route
            path="/addProducts"
            element={
              <AddNewItem inputs={productsInput} title="Add New Product" />
            }
          />
          <Route path="/viewProducts" element={<ViewProduct />}></Route>
          <Route path="/viewProducts/:pid" element={<DetailProduct />}></Route>
          <Route path="/filterProducts" element={<FilterProduct />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
