import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Grid,
  GridItem,
  Heading,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Switch,
  Box,
  Badge,
  Image,
  Button,
  Spacer,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Search2Icon, StarIcon } from "@chakra-ui/icons";
import FavIcon from "../FavIcon";
import Card from "../Card";

export default function PopularItems({ link }) {
  const [items, setItems] = useState([]);
  const [user, setUser] = useState("");
  const [id, setId] = useState(localStorage.getItem("ID"));
  const [select, setSelect] = useState(link === "destinations" ? 1 : 2);
  const navigate = useNavigate();

  useEffect(() => {
    getUserItem();
    getAllItems();
  }, []);

  const getUserItem = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/users/get/${id}`
      );

      //   for (let i = 0; i < result.length; i++) {
      //     for (let j = i + 1; j < arr.result; j++) {
      //       console.log(result[i].reviews);
      //       if (result[i].reviews > result[j].reviews) {
      //         let swap = result[i];
      //         result[i] = result[j];
      //         result[j] = swap;
      //       }
      //       console.log(result[i]);
      //     }
      //   }

      setUser(result.data);
      console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getAllItems = async () => {
    try {
      console.log(link);
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/${link}/getTop`
      );

      setItems([result.data[0], result.data[1], result.data[2]]);
      console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
        gap={[1, 3, 6]}
        marginTop="5%"
      >
        {items.map((item) => {
          return (
            <GridItem
              w={["100%"]}
              h={["200", "300", "400", "500"]}
              backgroundImage={
                link === "destinations"
                  ? `url("${item.image}")`
                  : item.images[0]
              }
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              onClick={() => {
                if (link === "destinations")
                  navigate(`/${link}/${item.city}/${item._id}`);
                else navigate(`/${link}/${item._id}`);
              }}
            >
              <Box display="flex">
                <Button
                  rightIcon={<ArrowBackIcon />}
                  borderRadius="none"
                  bg="rgba(0, 0, 0, 0.0)"
                  padding="1%"
                  color="black"
                  bg="rgba(255,255,255,0.7)"
                  onClick={() => {
                    navigate(`${link}`);
                  }}
                ></Button>
              </Box>
              <GridItem
                w={["70%"]}
                h={["52%", "44%", "34%", "27%"]}
                bg="rgba(102, 102, 153, 0.8)"
                marginTop={["20%", "45%", "70%", "96%"]}
                color="white"
                p="4%"
              >
                <Heading fontSize={["80%", "87%", "94%", "100%"]}>
                  {item.name}
                </Heading>
                <Text>{item.city}</Text>
                <Text fontSize={["60%", "80%"]}>
                  {item.startDate.split("T")[0]} الى{" "}
                  {item.expiryDate.split("T")[0]}
                </Text>
                <Text>
                  <span style={{ fontSize: "70%" }}>الأسعار تبدأ من: </span>
                  {link === "destinations"
                    ? Number(item.cost) + Number(item.days) * 250
                    : Number(item.cost)}{" "}
                  ريال
                </Text>
              </GridItem>
            </GridItem>
          );
        })}
      </Grid>

      {/* <GridItem colSpan={4} rowSpan={1}>
        <Grid templateColumns="repeat(3, 1fr)" margin="7%" gap={4}>
          {items.map((item) => {
            return (
              <Card
                id={item._id}
                catg={item.catg}
                name={item.name}
                city={item.city}
                reviews={item.reviews}
                image={link === "destinations" ? item.image : item.images[0]}
                getAllItems={getAllItems}
                getUserItem={getUserItem}
                user={user}
                select={select}
              />
            );
          })}
        </Grid>
      </GridItem> */}
    </div>
  );
}
