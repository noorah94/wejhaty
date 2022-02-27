import React from "react";

import { GridItem, Box, Button, Heading, Text } from "@chakra-ui/react";
import { StarIcon, ArrowBackIcon } from "@chakra-ui/icons";
import FavIcon from "../FavIcon";
import { useNavigate } from "react-router-dom";

export default function Card({
  id,
  catg,
  name,
  city,
  reviews,
  image,
  getAllItems,
  getUserItem,
  user,
  select,
  days,
  cost,
  startDate,
  expiryDate,
}) {
  //select {1="destinations",2="dayInYourCity"}
  const navigate = useNavigate();
  return (
    <GridItem
      w="100%"
      h={["300", "366", "432", "500"]}
      backgroundImage={`url("${image}")`}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      p="2%"
    >
      <Box display="flex">
        <Button
          rightIcon={<ArrowBackIcon />}
          bg="#666699"
          padding="1%"
          color="black"
          onClick={() => {
            if (select === 1) navigate(`/destinations/${city}/${id}`);
            else navigate(`/dayInYourCity/${id}`);
          }}
        ></Button>
        <Box
          marginRight={["60%", "62%", "70%", "80%"]}
          marginTop="3%"
          bg="rgba(255, 255, 255, 0.8)"
          borderRadius="full"
          p="1%"
        >
          <FavIcon
            idPro={id}
            getAllItems={getAllItems}
            user={user}
            getUserItem={getUserItem}
          />
        </Box>
      </Box>

      <Box
        w="72%"
        h="40%"
        bg="rgba(102, 102, 153, 0.8)"
        marginTop="50%"
        marginRight="27%"
        color="white"
        textAlign="center"
        p="3%"
      >
        <Heading fontSize={["70%", "80%", "90%", "100%"]}>{catg} </Heading>

        <Heading fontSize={["60%", "74%", "88%", "100%"]}>{name}</Heading>
        <Text fontSize={["50%", "60%", "70%", "80%"]}>{city}</Text>
        {/* <Text fontSize="80%">
          {item.startDate.split("T")[0]} الى {item.expiryDate.split("T")[0]}
        </Text> */}
        <Text fontSize={["50%", "60%", "70%", "80%"]}>
          {startDate.split("T")[0]} الى {expiryDate.split("T")[0]}
        </Text>
        <Text>
          <span style={{ fontSize: "70%" }}>الأسعار تبدأ من: </span>
          {select === 1 ? Number(cost) + Number(days) * 250 : Number(cost)} ريال
        </Text>
        {Array(5)
          .fill("")
          .map((_, i) => (
            <StarIcon
              width={["10px", "16px", "22px", "30px"]}
              key={i}
              color={i < reviews ? "yellow.500" : "gray.300"}
              zIndex={"1"}
            />
          ))}
        <Button
          borderRadius="none"
          bg="#666699"
          // colorScheme="blue"
          variant="outline"
          h={["17px", "25px", "32px", "40px"]}
          w={["30%", "30%"]}
          fontSize={["60%", "73%", "87%", "100%"]}
          onClick={() => {
            if (select === 1) navigate(`/destinations/${city}/${id}`);
            else navigate(`/dayInYourCity/${id}`);
          }}
        >
          احجز الآن
        </Button>
      </Box>
    </GridItem>
  );
}
