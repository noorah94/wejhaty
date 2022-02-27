import React, { useEffect, useState } from "react";

import {
  Grid,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Box,
  Center,
  Heading,
  Text,
} from "@chakra-ui/react";

export default function ItemCard({
  images,
  name,
  desc,
  cost,
  catg,
  days,
  orderCount,
  startDate,
  expiryDate,
  reviews,
  select,
}) {
  const [imgs, setImgs] = useState(images);
  const [index, setIndex] = useState(0);
  console.log(images);

  useEffect(() => {
    if (typeof imgs !== "string") {
      const id = setInterval(() => {
        setIndex(index + 1);
        if (index === imgs.length - 1) {
          setIndex(0);
        }
      }, 2000);
      return () => {
        clearInterval(id);
      };
    }
  });

  return (
    <Center>
      <Box display="flex" w="80%" marginTop="10%" marginBottom="10%">
        <Box bg="white" w="50%" p="4%">
          <Heading fontSize="xl">{name}</Heading>
          <Text mt={4}>{desc}</Text>
          <Text mt={4}> التكلفة لكل شخص : {cost}</Text>
          {select === "destination" || select === "dayInYourCity" ? (
            <>
              <Text> التصنيف : {catg}</Text>
              {select === "destination" ? (
                <Text>عدد الأيام: {days}</Text>
              ) : (
                <></>
              )}
              <Text>عدد مرات الطلب: {orderCount}</Text>
              <Text>تاريخ البداية : {startDate.split("T")[0]} </Text>
              <Text>تاريخ الإنتهاء : {expiryDate.split("T")[0]}</Text>
              <Text>التقييم :{reviews}</Text>
            </>
          ) : (
            <></>
          )}
        </Box>

        {typeof imgs === "string" ? (
          <Box
            bg={`linear-gradient(0deg,
      rgba(0, 0, 0, 0.0),
      rgba(0, 0, 0, 0.0)
    ),
    url("${imgs}")`}
            w="50%"
            p={4}
            color="white"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
          />
        ) : (
          <Box
            bg={`linear-gradient(0deg,
      rgba(0, 0, 0, 0.0),
      rgba(0, 0, 0, 0.0)
    ),
    url("${imgs[index]}")`}
            w="50%"
            p={4}
            color="white"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
          />
        )}
      </Box>
    </Center>
  );
}
