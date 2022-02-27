import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Card from "../Card";

import {
  Grid,
  Tab,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";

export default function Myfav() {
  const navigate = useNavigate();
  const [select1, setSelect1] = useState(1);
  const [select2, setSelect2] = useState(2);

  const [dayInYourCity, setDayInYourCity] = useState([]);
  const [destinations, setDestinations] = useState([]);
  const [user, setUser] = useState("");
  const [id, setId] = useState(localStorage.getItem("ID"));
  useEffect(() => {
    getUserItem();
    getAllItemsDestinations();
    getAllItemsForDay();
  }, []);

  const getAllItemsDestinations = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/destinations/get`
      );

      setDestinations(result.data);
      console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getAllItemsForDay = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/dayInYourCity/get`
      );

      setDayInYourCity(result.data);
      console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };

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

  return (
    <Tabs variant="enclosed" margin="5%">
      <TabList>
        <Tab>الوجهات</Tab>
        <Tab>يوم في مدينتك</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Grid templateColumns="repeat(3, 1fr)" margin="7%" gap={4}>
            {destinations.map((item) => {
              if (user && user.fav.includes(item._id))
                return (
                  <Card
                    id={item._id}
                    catg={item.catg}
                    name={item.name}
                    city={item.city}
                    reviews={item.reviews}
                    image={item.image}
                    getAllItems={getAllItemsDestinations}
                    getUserItem={getUserItem}
                    user={user}
                    select={select1}
                    cost={item.cost}
                    days={item.days}
                    startDate={item.startDate}
                    expiryDate={item.startDate}

                    // id={item._id}
                    // catg={item.catg}
                    // name={item.name}
                    // city={item.city}
                    // reviews={item.reviews}
                    // image={item.image}
                    // getAllItems={getAllItemsDestinations}
                    // getUserItem={getUserItem}
                    // user={user}
                    // select={select1}
                  />
                );
              else return <></>;
            })}
          </Grid>
        </TabPanel>
        <TabPanel>
          <Grid templateColumns="repeat(3, 1fr)" margin="7%" gap={4}>
            {dayInYourCity.map((item) => {
              if (user && user.fav.includes(item._id))
                return (
                  <Card
                    id={item._id}
                    catg={item.catg}
                    name={item.name}
                    city={item.city}
                    reviews={item.reviews}
                    image={item.images[0]}
                    getAllItems={getAllItemsForDay}
                    getUserItem={getUserItem}
                    user={user}
                    select={select2}
                    startDate={item.startDate}
                    expiryDate={item.startDate}
                  />
                );
              else return <></>;
            })}
          </Grid>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
