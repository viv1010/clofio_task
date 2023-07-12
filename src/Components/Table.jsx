import React from "react";

const Table = ({ data, heading }) => {
  return (
    <div className="table__wrapper">
      <h3>{heading}</h3>
      <table className="table__content">
        <thead>
          <tr>
            <th>Name</th>
            <th>Budget</th>
            <th>Spend</th>
            <th>Forecast</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td className="highlighted">{row.name}</td>
              <td>{row.budget}</td>
              <td>{row.spend}</td>
              <td>{row.forecast}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
