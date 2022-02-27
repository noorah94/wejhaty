import React from "react";
import {
  Box,
  Grid,
  GridItem,
  Image,
  Center,
  Heading,
  Text,
  Button,
  Spacer,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

export default function CardInHome({ name, text, image, link }) {
  const navigate = useNavigate();
  return (
    <Center>
      <Grid
        marginTop="10%"
        w="70%"
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(2, 1fr)"
        shadow="md"
        borderWidth="1px"
        padding="3"
        bg="white"
      >
        <GridItem colSpan={1}>
          <Image src={image} alt="wjhat" w="70%" />
        </GridItem>
        <GridItem colSpan={1}>
          <Box p={7}>
            <Heading fontSize="xl">{name}</Heading>
            <Text mt={4}>{text}</Text>
            <Button
              rightIcon={<ArrowBackIcon />}
              colorScheme="teal"
              variant="solid"
              marginTop="3%"
              onClick={() => {
                navigate(`${link}`);
              }}
            >
              اعرف أكثر
            </Button>
          </Box>
        </GridItem>
      </Grid>
    </Center>
  );
}
