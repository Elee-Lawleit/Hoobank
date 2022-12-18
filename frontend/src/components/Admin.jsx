import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Table } from '@mantine/core';

const Admin = () => {
  const data = [
    {
      name: "Week 1",
      users: 40,
    },
    {
      name: "Week 2",
      users: 30,
    },
    {
      name: "Week 3",
      users: 15,
    },
    {
      name: "Week 4",
      users: 35,
    },
  ];
  return (
    <div className="grid grid-cols-2 mt-20 justify-center items-center p-3 ">
      <div className="flex flex-col gap-3 col-span-1">
        <h2 className="text-2xl font-bold text-center">Customer Analysis</h2>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="users"
              stroke="#00fcff"
              fill="#00fcff"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="col-span-1 flex flex-col  gap-20 items-center">
        <div>
          <h2 className="text-2xl font-bold text-center">
            Customer satisfaction rate
          </h2>
        </div>
        <div className="flex justify-center items-center">
          <div
            className="radial-progress color-primary"
            style={{ "--value": "70", "--size": "12rem", "--thickness": "2px" }}
          >
            70%
          </div>
          <div
            className="radial-progress color-primary"
            style={{
              "--value": "70",
              "--size": "12rem",
              "--thickness": "2rem",
            }}
          >
            70%
          </div>
        </div>
      </div>
      <div className="mt-10 col-span-2 p-3">
        {/* comeback to this for database call */}
        <Table highlightOnHover withBorder withColumnBorders>
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>Name</th>
              <th>Address</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>jd cghsd</td>
              <td>akfbad</td>
              <td>akbad</td>
              <td>adjhcsd</td>
              <td>ajdh csad</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Admin;
