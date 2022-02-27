import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Search2Icon } from "@chakra-ui/icons";

import {
  Grid,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Box,
  Center,
  Heading,
  Button,
} from "@chakra-ui/react";

import Card from "../Card";

export default function Destinations() {
  const navigate = useNavigate();

  const [destinations, setDestinations] = useState([]);
  const [user, setUser] = useState("");
  const [id, setId] = useState(localStorage.getItem("ID"));
  const [select, setSelect] = useState(1);
  const [filterItems, setFilterItems] = useState([]);

  useEffect(() => {
    getUserItem();
    getAllItems();
  }, []);

  const getUserItem = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/users/get/${id}`
      );

      setUser(result.data);
      console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getAllItems = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/destinations/get`
      );

      setDestinations(result.data);
      setFilterItems(result.data);
      console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  const searchFun = (e) => {
    const searchWord = e.target.value;
    //console.log(searchWord);

    if (searchWord) {
      const newItems = destinations.filter(
        (item) =>
          item.name.includes(searchWord) ||
          item.city.includes(searchWord) ||
          item.catg.includes(searchWord)
      );

      setFilterItems(newItems);
    } else setFilterItems(destinations);
  };

  const bestReviews = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/destinations/getTop`
      );

      setFilterItems(result.data);
      // console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  const lowestReviews = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/destinations/getDown`
      );

      setFilterItems(result.data);
      //  console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getHPrice = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/destinations/getHPrice`
      );

      setFilterItems(result.data);
      console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getLPrice = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/destinations/getLPrice`
      );

      setFilterItems(result.data);
      //  console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getHNumOfOrders = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/destinations/getHNumOfOrders`
      );

      setFilterItems(result.data);
      //  console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  const sortDFun = (val) => {
    const arr = [...destinations];
    // console.log("ffd");

    if (val == 1) {
      bestReviews();
    } else if (val == 2) {
      lowestReviews();
    } else if (val == 3) {
      getHPrice();
    } else if (val == 4) {
      getLPrice();
    } else if (val == 5) {
      getHNumOfOrders();
    }
  };

  const cityFun = (val) => {
    //console.log(searchWord);

    if (val) {
      const newItems = destinations.filter(
        (item) =>
          item.name.includes(val) ||
          item.city.includes(val) ||
          item.catg.includes(val)
      );

      setFilterItems(newItems);
    } else setFilterItems(destinations);
  };

  const catgFun = (val) => {
    if (val) {
      const newItems = destinations.filter(
        (item) =>
          item.name.includes(val) ||
          item.city.includes(val) ||
          item.catg.includes(val)
      );

      setFilterItems(newItems);
    } else setFilterItems(destinations);
  };

  return (
    <div>
      <Box
        bg={`linear-gradient(0deg,
      rgba(0, 0, 0, 0.30),
      rgba(0, 0, 0, 0.30)
    ),
    url("https://static1.s123-cdn-static-a.com/ready_uploads/media/2666516/800_5e05374d7cdbf.jpg")`}
        w="100%"
        h={["200px", "300px", "400px", "500px"]}
        p={4}
        color="white"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      >
        <Center>
          <Box marginTop="13%" alignItems="baseline" textAlign="center">
            <Heading
              marginBottom="5%"
              fontSize={["50%", "100%", "150%", "200%"]}
              fontFamily="Cormorant Garamond"
            >
              وجهتك جاهزة معنا ،انت جاهز ؟
            </Heading>
            <Heading
              marginBottom="5%"
              fontSize={["100%", "170%", "220%", "300%"]}
              fontFamily="Lemonada"
            >
              السعودية الوجهة القادمة للعالم
            </Heading>
          </Box>
        </Center>
      </Box>

      <Center>
        <Box display="flex" marginTop="10%" w="90%" bg="white" p="3%">
          <Box w="30%">
            <Box
              borderColor="rgba(102, 102, 153, 0.4)"
              borderWidth="1px"
              p="3%"
              marginLeft="10%"
              h="300"
            >
              <InputGroup>
                <Input
                  placeholder="البحث"
                  onChange={(e) => searchFun(e)}
                  padding="10px"
                  borderRadius="none"
                />
                <InputLeftElement children={<Search2Icon color="gray.300" />} />
              </InputGroup>

              <Select
                placeholder="ترتيب على حسب: "
                onChange={(e) => sortDFun(e.target.value)}
                padding="10px"
                // fontSize="50%"
                // p="0%"
                // direction="rtl"
                borderRadius="none"
              >
                <option value="1" direction="ltr">
                  الأعلى تقييمًا
                </option>
                <option value="2">الأقل تقييمًا</option>
                {/* <option value="3">الثمن من الأعلى الى الأقل </option> */}
                <option value="4">الثمن من الأقل الى الأعلى</option>
                <option value="5">الأفضل مبيعًا</option>
              </Select>

              <Select
                placeholder="اختار المدينة:"
                onChange={(e) => cityFun(e.target.value)}
                borderRadius="none"
                padding="10px"
              >
                <option value="مكة">مكة</option>
                <option value="المدينة">المدينة</option>
                <option value="الرياض">الرياض </option>
                <option value="بريدة">بريدة</option>
                <option value="أبها">أبها</option>
                <option value="جدة">جدة</option>
              </Select>

              <Select
                placeholder="التصنيف:"
                onChange={(e) => catgFun(e.target.value)}
                padding="10px"
                borderRadius="none"
              >
                جميع الفئات
                <option value="جميع الفئات">جميع الفئات</option>
                <option value="عائلي">عائلي</option>
                <option value="اصدقاء">اصدقاء</option>
                <option value="ثقافي">ثقافي</option>
                <option value="رياضي">رياضي</option>
                <option value="ديني">ديني</option>
              </Select>
            </Box>
          </Box>

          <Grid
            templateColumns={[
              "repeat(1, 1fr)",
              "repeat(1, 1fr)",
              "repeat(2, 1fr)",
            ]}
            gap={6}
            marginTop="5%"
            w="100%"
          >
            {filterItems.map((item) => {
              return (
                <Card
                  id={item._id}
                  catg={item.catg}
                  name={item.name}
                  city={item.city}
                  reviews={item.reviews}
                  image={item.image}
                  getAllItems={getAllItems}
                  getUserItem={getUserItem}
                  user={user}
                  select={select}
                  cost={item.cost}
                  days={item.days}
                  startDate={item.startDate}
                  expiryDate={item.startDate}
                />
              );
            })}
          </Grid>
        </Box>
      </Center>
    </div>
  );
}
