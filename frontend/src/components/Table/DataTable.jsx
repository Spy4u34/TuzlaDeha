// src/components/Table/DataTable.jsx

import "./DataTable.css";

function DataTable({ columns, children }) {
  return (
    <div className="table-wrapper">

      <table>

        <thead>

          <tr>

            {columns.map((column, index) => (
              <th key={index}>{column}</th>
            ))}

          </tr>

        </thead>

        <tbody>

          {children}

        </tbody>

      </table>

    </div>
  );
}

export default DataTable;