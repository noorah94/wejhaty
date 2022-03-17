import React from "react";
import {
  Text,
  Box,
  Center,
  Heading,
  Button,
  AspectRatio,
} from "@chakra-ui/react";

export default function YourActivityOnYourMoodInfo() {
  return (
    <>
      <Center>
        <Box marginTop="10%" w="90%" bg="white" p="3%">
          <Heading fontSize="25px">اسم الفعالية:</Heading>
          <Text mt={4} fontSize="20px">
            لعب كورة في ملعب الوجيعان
          </Text>
          <Heading mt={4} fontSize="25px">
            ما الذي سوف يحدث:
          </Heading>
          <Text mt={4} fontSize="20px">
            السلام عليكم محتاجين٥ لاعبين زياده في ملعب الوجيعان اللي بيحضر حياه
            الله في مدينة بريدة
          </Text>
          <Text mt={4}>
            المدينة: <>بريدة</>
          </Text>
          <Text mt={4}>
            الجنس: <>ذكر</>
          </Text>
          <Text mt={4}>
            العمر:<>20-30</>
          </Text>
          <Text mt={4}>
            عدد الأشخاص: <>5</>
          </Text>
          <Text mt={4}>
            التكلفة:<>مجانًا</>
          </Text>
          <Text mt={4}>الخريطة</Text>
          <AspectRatio ratio={3 / 3} w="40%">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng"
              alt="demo"
            />
          </AspectRatio>
          <Button mt={4}>الحجز</Button>
        </Box>
      </Center>
    </>
  );
}
