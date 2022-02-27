import React, { useState, useEffect } from "react";
import axios from "axios";
import { Input, Heading, Button, Box, Textarea } from "@chakra-ui/react";

export default function AdminDestinations() {
  const [destinationsIds, setDestinationsIds] = useState([]);
  const [festivalIds, setFestivalIds] = useState([]);
  const [festivalName, setFestivalName] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [desc, setDesc] = useState("");
  const [cost, setCost] = useState(0);
  const [days, setDays] = useState(0);
  const [startDate, setStartDate] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [catg, setCatg] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    getAllItems();
  }, []);

  const getAllItems = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/destinations/get`
      );

      setDestinationsIds(result.data);
      //console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  const addDestinations = async () => {
    const userId = localStorage.getItem("ID");
    try {
      const result = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/destinations/add`,
        {
          userId,
          name,
          city,
          desc,
          days,
          startDate,
          expiryDate,
          cost,
          catg,
          festivalIds,
          image,
        },
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      console.log(result.data);

      getAllItems();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteDestinations = async (destinationId) => {
    const userId = localStorage.getItem("ID");
    try {
      const result = await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/destinations/del`,
        {
          data: { destinationId, userId },
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
          الفعاليات:
        </Heading>

        <Input
          pr="4.5rem"
          type="text"
          placeholder="الفعاليات"
          onChange={(e) => setFestivalName(e.target.value)}
        />

        <Button
          marginTop="13%"
          w="100%"
          onClick={() => {
            setFestivalIds([...festivalIds, festivalName]);
            console.log(festivalIds);
          }}
        >
          الإضافة
        </Button>
        <Button
          marginTop="3%"
          w="100%"
          onClick={() => {
            setFestivalIds([]);
            //console.log(festivalIds);
          }}
        >
          مسح
        </Button>

        <h1>الأماكن</h1>
        {festivalIds.map((item) => (
          <>
            <h2>{item}</h2>

            <br />
            <hr />
            <br />
          </>
        ))}

        <Heading fontSize="l" marginTop="3%">
          الإسم:
        </Heading>

        <Input
          pr="4.5rem"
          type="text"
          placeholder="الإسم"
          onChange={(e) => setName(e.target.value)}
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
          الوصف:
        </Heading>

        <Textarea
          pr="4.5rem"
          type="text"
          placeholder="الوصف"
          onChange={(e) => setDesc(e.target.value)}
        />

        <Heading fontSize="l" marginTop="3%">
          رابط الصورة:
        </Heading>

        <Input
          pr="4.5rem"
          type="text"
          placeholder="رابط الصورة"
          onChange={(e) => setImage(e.target.value)}
        />
        <Heading fontSize="l" marginTop="3%">
          تاريخ بداية الفعالية:
        </Heading>
        <Input
          pr="4.5rem"
          type="text"
          placeholder="2000-01-01"
          onChange={(e) => setStartDate(e.target.value)}
        />
        <Heading fontSize="l" marginTop="3%">
          تاريخ نهاية الفعالية:
        </Heading>
        <Input
          pr="4.5rem"
          type="text"
          placeholder="2000-01-01"
          onChange={(e) => setExpiryDate(e.target.value)}
        />

        <Heading fontSize="l" marginTop="3%">
          عدد الأيام:
        </Heading>

        <Input
          pr="4.5rem"
          type="number"
          placeholder="عدد الأيام"
          onChange={(e) => setDays(e.target.value)}
        />

        <Heading fontSize="l" marginTop="3%">
          التكلفة:
        </Heading>

        <Input
          pr="4.5rem"
          type="number"
          placeholder="التكلفة"
          onChange={(e) => setCost(e.target.value)}
        />

        <Heading fontSize="l" marginTop="3%">
          التصنيف:
        </Heading>

        <Input
          pr="4.5rem"
          type="text"
          placeholder="التصنيف"
          onChange={(e) => setCatg(e.target.value)}
        />

        <Button marginTop="13%" w="100%" onClick={() => addDestinations()}>
          الإضافة
        </Button>
      </Box>

      <br />
      <h1>الوجهات</h1>
      {destinationsIds.map((item) => (
        <>
          <h2>id : {item._id}</h2>
          <h2>الصورة : {item.image}</h2>
          <h2>الإسم : {item.name}</h2>
          <p>المدينة : {item.city}</p>
          <p>الوصف : {item.desc}</p>
          <p>عدد الأيام : {item.days}</p>
          <p> التكلفة: {item.cost}</p>
          <p> تاريخ البداية: {item.startDate}</p>
          <p> تاريخ النهاية: {item.expiryDate}</p>
          <p> التصنيف: {item.catg}</p>
          <p> الأماكن: </p>
          {item.festivalIds.map((item) => (
            <>
              <h2>{item}</h2>

              <br />
              <hr />
              <br />
            </>
          ))}
          <br />
          <Button onClick={() => deleteDestinations(item._id)}> delete </Button>
          <br />
          <hr />
          <br />
        </>
      ))}
    </div>
  );
}
