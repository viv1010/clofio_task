import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Cards from "./Components/Cards";
import Table from "./Components/Table";
import Table2 from "./Components/Table2";
import LeftSideBar from "./Components/LeftSideBar";

export const App = () => {
  const firstTableData = [
    {
      name: "AMCE Corp",
      budget: "$ 200,000",
      spend: "$ 173,762",
      forecast: "$ 205,049",
    },
    {
      name: "Raman Inc",
      budget: "$ 200,000",
      spend: "$ 124,762",
      forecast: "$ 292,629",
    },
  ];

  const secondTableData = [
    {
      name: "Longate",
      budget: "$ 200,000",
      spend: "$ 173,762",
      forecast: "$ 205,049",
    },
  ];

  const rowData = {
    bucket: "AMCE Corp",
    current: "$ 200,000",
    budget: "$ 250,000",
    by: "Joe Hilfinger",
  };

  return (
    <div className="App">
      <div className="container">
        <div className="content">
          <Header />
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
          <Table heading={"Buckets you own"} data={firstTableData} />
          <Table2 heading={"Approvals assigned to you"} data={rowData} />
          <Table heading={"Buckets you are member of"} data={secondTableData} />
        </div>

        <LeftSideBar />
      </div>
    </div>
  );
};

export default App;
