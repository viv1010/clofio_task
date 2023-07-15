import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Cards from "./Components/Cards/Cards";
import Table from "./Components/Table/Table";
import LeftSideBar from "./Components/Sidebar/LeftSideBar";

export const App = () => {
  return (
    <div className="App">
      <div className="container">
        <div className="content">
          <Header />
          <LeftSideBar />
          <Cards amount={"400,000"} description={"Total budget you own"} />
          <Cards
            amount={"299,762"}
            description={"Spent month-to-date"}
            bgcolor={"#94A9CC"}
          />
          <Cards
            amount={"2,874,582"}
            description={"Forecasted till month end"}
            bgcolor={"#B8EFCB"}
          />
          <Table />
        </div>
      </div>
    </div>
  );
};

export default App;
