import React, { useState, useEffect } from "react";
import axios from "axios";
import { Input, Heading, Button, Box } from "@chakra-ui/react";

export default function AdminTouristGuides() {
  const [TouristGuides, setTouristGuides] = useState([]);
  const [avter, setAvter] = useState("");
  const [city, setCity] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [mobile, setMobile] = useState("");

  useEffect(() => {
    getAllItems();
  }, []);

  const getAllItems = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/touristGuides/get`
      );

      setTouristGuides(result.data);
      //console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  const addTouristGuides = async () => {
    const userId = localStorage.getItem("ID");
    try {
      const result = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/touristGuides/add`,
        {
          userId,
          avter,
          city,
          fname,
          lname,
          mobile,
        },
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      // console.log(result.data);

      getAllItems();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTouristGuides = async (touristGuidesId) => {
    const userId = localStorage.getItem("ID");
    try {
      const result = await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/touristGuides/del`,
        {
          data: { touristGuidesId, userId },
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
          الصورة الشخصية:
        </Heading>

        <Input
          pr="4.5rem"
          type="text"
          placeholder="الإسم"
          onChange={(e) => setAvter(e.target.value)}
        />
        <Heading fontSize="l" marginTop="3%">
          المدينة:
        </Heading>

        <Input
          pr="4.5rem"
          type="text"
          placeholder="المدينة"
          onChange={(e) => setCity(e.target.value)}
        />

        <Heading fontSize="l" marginTop="3%">
          الإسم الأول:
        </Heading>

        <Input
          pr="4.5rem"
          type="text"
          placeholder="الإسم الأول"
          onChange={(e) => setFname(e.target.value)}
        />

        <Heading fontSize="l" marginTop="3%">
          الاسم الأخير:
        </Heading>

        <Input
          pr="4.5rem"
          type="text"
          placeholder="الاسم الأخير"
          onChange={(e) => setLname(e.target.value)}
        />

        <Heading fontSize="l" marginTop="3%">
          رقم الجوال:
        </Heading>

        <Input
          pr="4.5rem"
          type="text"
          placeholder="رقم الجوال"
          onChange={(e) => setMobile(e.target.value)}
        />

        <Button marginTop="13%" w="100%" onClick={() => addTouristGuides()}>
          الإضافة
        </Button>
      </Box>

      <h1>المرشد السياحي</h1>
      {TouristGuides.map((item) => (
        <>
          <h2>الصورة الشخصية : {item.avter}</h2>
          <p>المدينة : {item.city}</p>
          <p>الإسم الأول: {item.fname}</p>
          <p>الإسم الأخير : {item.lname}</p>
          <p>رقم الجوال: {item.mobile}</p>

          <br />
          <Button onClick={() => deleteTouristGuides(item._id)}>
            {" "}
            delete{" "}
          </Button>

          <br />
          <hr />
          <br />
        </>
      ))}
    </div>
  );
}
