import React from "react";
import "./Table.css";

const Table = () => {
  const tableData = [
    { name: "Name", budget: "Budget", spend: "Spend", forecast: "Forecast" },
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
      name: "Bucket Name",
      budget: "Current Budget",
      requested: "Requested Budget",
      by: "Requested By",
    },
    {
      name: "AMCE Corp",
      budget: "$ 200,000",
      requested: "$ 250,000",
      by: "Joe Hilfinger",
      buttons: " ",
    },
  ];

  const ThirdTableData = [
    { name: "Name", budget: "Budget", spend: "Spend", forecast: "Forecast" },
    {
      name: "Longate",
      budget: "$ 200,000",
      spend: "$ 173,762",
      forecast: "$ 205,049",
    },
  ];

  const renderTable = (data, heading) => {
    return (
      <div className="table__wrapper">
        <h3>{heading}</h3>
        <table className="table__content">
          <thead>
            <tr>
              {Object.keys(data[0]).map((key, index) => (
                <th key={index}>{data[0][key]}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.slice(1).map((row, index) => (
              <tr key={index}>
                {Object.values(row).map((value, index) => (
                  <td
                    key={index}
                    className={
                      index === 0 || value === "Joe Hilfinger"
                        ? "highlighted"
                        : ""
                    }
                  >
                    {value}
                  </td>
                ))}
                {row.buttons && (
                  <td className="buttons">
                    <button>Approve</button>
                    <button>Reject</button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div>
      {renderTable(tableData, "Buckets you own")}

      {renderTable(secondTableData, "Approvals assigned to you")}

      {renderTable(ThirdTableData, "Buckets you are member of")}
    </div>
  );
};

export default Table;
