import React from "react";

const Table2 = ({ data, heading }) => {
  return (
    <div className="table__wrapper">
      <h3>{heading}</h3>
      <table className="table__content">
        <thead>
          <tr>
            <th>Bucket Name</th>
            <th>Current Budget</th>
            <th>Requested Budget</th>
            <th>Requested By</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="highlighted">{data.bucket}</td>
            <td>{data.current}</td>
            <td>{data.budget}</td>
            <td className="highlighted">{data.by}</td>
            <td>
              <div className="buttons">
                <button>Approve</button>
                <button>Reject</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table2;
