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
  AspectRatio,
  Spacer,
} from "@chakra-ui/react";
import Signup from "./../Signup";
import Login from "./../Login";
import ResetPass from "./../ResetPass";
import CompleteResetPassword from "./../CompleteResetPassword";

export default function LoginSignupDesign({ type }) {
  return (
    <Box display="flex" h="760">
      <Box
        bg={`linear-gradient(0deg,
      rgba(0, 0, 0, 0.30),
      rgba(0, 0, 0, 0.30)
    ),
    url("/order.jpeg")`}
        w="60%"
        p={4}
        color="white"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      />

      <Box bg="white" w="40%" p="4%" paddingTop="10%">
        {type === "Signup" ? (
          <Signup />
        ) : type === "completeResetPassword" ? (
          <CompleteResetPassword />
        ) : type === "ResetPass" ? (
          <ResetPass />
        ) : (
          <Login />
        )}
      </Box>
    </Box>
  );
}
