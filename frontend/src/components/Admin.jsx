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
import { ActionIcon, Table, Menu } from '@mantine/core';
import useGetAllUsers from "../../hooks/user/use-get-all-users";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { useQuery } from "react-query";
import axios from "axios";

const Admin = () => {

  const {data: users, isLoading, isError} = useGetAllUsers();
  // const {data: transaction, isLoading: transactionLoading, isError: transactionError} = getTransactions();


  console.log(users)

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
              <th></th>
            </tr>
          </thead>
          <tbody>
           {
            users?.users?.map((user)=>{
              return (
                <tr>
                  <td>{user.ID}</td>
                  <td>{user.email}</td>
                  <td>{user.name}</td>
                  <td>{user.address}</td>
                  <td>{user.phone_no}</td>
                  <td>
                    <Menu width={200} shadow="sm">
                      <Menu.Target>
                        <ActionIcon>
                          <FontAwesomeIcon icon={faEllipsis} />
                        </ActionIcon>
                      </Menu.Target>

                      <Menu.Dropdown>
                        <Menu.Label>Change meeting state</Menu.Label>
                        <Menu.Item onClick={() => {
                          meeting.action = "held";
                          setStatusModal(meeting)
                        }}>
                          show account information
                        </Menu.Item>
                        <Menu.Item onClick={() => {
                          useQuery(["all-users"], async () => {
                            const res = await axios.get(`http://localhost:3000/api/users/transactions`);
                            console.log(res)

                          })
                        }}>
                          show all transactions
                        </Menu.Item>
                      </Menu.Dropdown>

                    </Menu>
                  </td>
                </tr>
              )
            })
           }
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Admin;
