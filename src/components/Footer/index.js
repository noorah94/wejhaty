import React from "react";
import { Box } from "@chakra-ui/react";

export default function Footer() {
  return (
    <div>
      <Box
        marginTop="10%"
        h="150px"
        bg="black.100"
        fontWeight="semibold"
        borderColor="#ccd0d5"
        padding="1%"
        top="0"
        w="100%"
        bg="#242323"
      >
        <Box textAlign="center" color="white">
          جميع الحقوق محفوظة لمعسكر طويق 1000
          <br />
          تم انشاء الموقع بواسطة المتدربة نورة المحيميد
          {/* <Box borderWidth="2px" bg="black" w="50%" margin="5% auto" /> */}
        </Box>
        {/* <Box
          bg="black.100"
          fontWeight="semibold"
          borderColor="#ccd0d5"
          padding="1%"
          top="0"
          w="100%"
          bg="white"
        /> */}
      </Box>
    </div>
  );
}
