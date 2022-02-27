import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@chakra-ui/react";

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getAllItems();
  }, []);

  const getAllItems = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/orders/get`
      );

      setOrders(result.data);
      //console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  const acceptOrder = async (orderId, userId) => {
    try {
      const userId = localStorage.getItem("ID");
      const result = await axios.put(
        `${process.env.REACT_APP_BASE_URL}/orders/acceptOrder`,
        {
          orderId,
          process: "accept",
          userId,
        },
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      //console.log(result.data);
      getAllItems();
    } catch (err) {
      console.log(err);
    }
  };

  const rejectOrder = async (orderId, userId) => {
    try {
      const userId = localStorage.getItem("ID");
      const result = await axios.put(
        `${process.env.REACT_APP_BASE_URL}/orders/rejectOrder`,
        {
          orderId,
          process: "reject",
          userId,
        },
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      //console.log(result.data);
      getAllItems();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {orders.map((item) => (
        <>
          <h2>id : {item._id}</h2>
          <p>user : {item.userId}</p>

          <br />
          {item.process === "pending" ? (
            <>
              <Button onClick={() => acceptOrder(item._id, item.userId)}>
                {" "}
                قبول{" "}
              </Button>
              <Button onClick={() => rejectOrder(item._id, item.userId)}>
                {" "}
                رفض{" "}
              </Button>
            </>
          ) : (
            <h1> {item.process}</h1>
          )}

          <br />
          <hr />
          <br />
        </>
      ))}
    </div>
  );
}
