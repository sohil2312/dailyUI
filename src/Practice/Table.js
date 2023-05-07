import React from "react";

const Table = () => {
  const tableData = [
    {
      car: "hyundai",
      model: "venue",
      make: 2009,
    },
    {
      car: "Maruti",
      model: "Baleno",
      make: 2019,
    },
    {
      car: "Kia",
      model: "Seltos",
      make: 2004,
    },
    {
      car: "TATA",
      model: "Altroz",
      make: 2022,
    },
  ];
  const config = [
    { label: "MyCar", render: (info) => info.car },
    { label: "model", render: (info) => info.model },
    { label: "make", render: (info) => info.make },
  ];
  const renderedElements = tableData.map((tabledata) => {
    const renderedHeads = config.map((column)=>{
        return <th scope="row">{column.render(tabledata)}</th>
    })
    return (
      <tr key={tabledata.model}>
        {renderedHeads}
      </tr>
    );
  });
  const renderHead = config.map((head) => {
    return (
      <th scope="col" key={head.label}>
        {head.label}
      </th>
    );
  });
  return (
    <div className="container">
      <table className="table table-hover ">
        <thead className="table-danger">
          <tr>{renderHead}</tr>
        </thead>
        <tbody>{renderedElements}</tbody>
      </table>
    </div>
  );
};

export default Table;
