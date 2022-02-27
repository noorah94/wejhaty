import React, { useState, useEffect } from "react";
import axios from "axios";
import { Input, Heading, Button, Box } from "@chakra-ui/react";

export default function AdminFlights() {
  const [flights, setFlights] = useState([]);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [flightClass, setFlightClass] = useState("");
  const [childTicketPrice, setChildTicketPrice] = useState(0);
  const [infantTicketPrice, setInfantTicketPrice] = useState(0);
  const [adultTicketPrice, setAdultTicketPrice] = useState(0);

  useEffect(() => {
    getAllItems();
  }, []);

  const getAllItems = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/flights/get`
      );

      setFlights(result.data);
      //console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  const addFlights = async () => {
    const userId = localStorage.getItem("ID");
    try {
      const result = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/flights/add`,
        {
          userId,
          from,
          to,
          flightClass,
          childTicketPrice,
          infantTicketPrice,
          adultTicketPrice,
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

  const deleteFlights = async (flightsId) => {
    const userId = localStorage.getItem("ID");
    try {
      const result = await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/flights/del`,
        {
          data: { flightsId, userId },
          headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      getAllItems();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Box
        w="70%"
        margin="auto"
        marginTop="5%"
        borderRadius="md"
        border="1px"
        borderColor="#ccd0d5"
        padding="50"
      >
        <Heading fontSize="l" marginTop="3%">
          من:
        </Heading>

        <Input
          pr="4.5rem"
          type="text"
          placeholder="من"
          onChange={(e) => setFrom(e.target.value)}
        />
        <Heading fontSize="l" marginTop="3%">
          الى:
        </Heading>

        <Input
          pr="4.5rem"
          type="text"
          placeholder="الى"
          onChange={(e) => setTo(e.target.value)}
        />

        <Heading fontSize="l" marginTop="3%">
          فئة الرحلة:
        </Heading>

        <Input
          pr="4.5rem"
          type="text"
          placeholder="فئة الرحلة"
          onChange={(e) => setFlightClass(e.target.value)}
        />

        <Heading fontSize="l" marginTop="3%">
          سعر تذكرة الطيران للبالغين:
        </Heading>

        <Input
          pr="4.5rem"
          type="number"
          placeholder="سعر تذكرة الطيران للبالغين"
          onChange={(e) => setAdultTicketPrice(e.target.value)}
        />

        <Heading fontSize="l" marginTop="3%">
          سعر تذكرة الطيران للأطفال:
        </Heading>

        <Input
          pr="4.5rem"
          type="number"
          placeholder="سعر تذكرة الطيران للأطفال"
          onChange={(e) => setChildTicketPrice(e.target.value)}
        />

        <Heading fontSize="l" marginTop="3%">
          سعر تذكرة الطيران للرضع:
        </Heading>

        <Input
          pr="4.5rem"
          type="number"
          placeholder="سعر تذكرة الطيران للرضع"
          onChange={(e) => setInfantTicketPrice(e.target.value)}
        />

        <Button marginTop="13%" w="100%" onClick={() => addFlights()}>
          الإضافة
        </Button>
      </Box>

      <h1>تذاكر الطيران</h1>
      {flights.map((item) => (
        <>
          <h2>من: {item.from}</h2>
          <p>الى : {item.to}</p>
          <p>فئة الرحلة: {item.flightClass}</p>
          <p>سعر تذكرة الطيران للبالغين: {item.adultTicketPrice}</p>
          <p>سعر تذكرة الطيران للأطفال: {item.childTicketPrice}</p>
          <p>سعر تذكرة الطيران للرضع: {item.infantTicketPrice}</p>

          <br />
          <Button onClick={() => deleteFlights(item._id)}> delete </Button>

          <br />
          <hr />
          <br />
        </>
      ))}
    </div>
  );
}
