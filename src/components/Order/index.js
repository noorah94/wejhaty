import React from "react";
import DestinationHotel from "./../DestinationHotel";
import DestinationTouristGuides from "./../DestinationTouristGuides";
import DestinationTransportation from "./../DestinationTransportation";
import DestinationFlights from "./../DestinationFlights";
import {
  Box,
  Grid,
  GridItem,
  Heading,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";

export default function Order({ type, text1, text2 }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        bg={`linear-gradient(0deg,
      rgba(0, 0, 0, 0.30),
      rgba(0, 0, 0, 0.30)
    ),
    url("${"/plan.jpeg"}")`}
        w="100%"
        h={["600", "650", "700", "750"]}
        p={4}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        display="flex"
      >
        {/* <Heading
          marginBottom="5%"
          fontSize={["50%", "200%"]}
          fontFamily="Cormorant Garamond"
        >
          وجهتك جاهزة معنا ،انت جاهز ؟
        </Heading>
        <Heading
          marginBottom="5%"
          fontSize={["100%", "300%"]}
          fontFamily="Lemonada"
        >
          السعودية الوجهة القادمة للعالم
        </Heading> */}

        <Box
          marginTop="17%"
          alignItems="baseline"
          color="white"
          textAlign="center"
          marginRight={["0", "1%", "3%", "4%"]}
        >
          <Heading
            marginBottom="5%"
            fontSize={["100%", "270%", "450%", "600%"]}
            fontFamily="Cormorant Garamond"
          >
            {text1}
          </Heading>
          <Heading
            marginBottom="5%"
            fontSize={["50%", "83%", "120%", "150%"]}
            fontFamily="Cormorant Garamond"
            color="rgba(255, 255, 255, 0.70)"
          >
            {text2}
          </Heading>
        </Box>

        <Box
          w={["50%", "50%", "50%", "40%"]}
          marginTop="10%"
          marginRight="10%"
          h="450"
          bg="rgba(255, 255, 255, 0.60)"
          // shadow="md"
          // borderWidth="1px"
          padding="3%"
          borderRadius="none"
          // display="flex"
        >
          <Heading
            textAlign="center"
            color="#000066"
            marginBottom="5%"
            fontSize={["100%", "200%", "300%", "400%"]}
            fontFamily="Cormorant Garamond"
          >
            حدد وجهتك ؟
          </Heading>
          <Grid
            templateColumns={[
              "repeat(1, 1fr)",
              "repeat(2, 1fr)",
              "repeat(2, 1fr)",
              "repeat(3, 1fr)",
            ]}
            gap={[1, 1, 1, 3]}
          >
            <GridItem>
              <Button
                onClick={onOpen}
                w="100%"
                borderRadius="none"
                variant="outline"
                colorScheme="#000066"
              >
                الوجهة
              </Button>
              <Modal
                isCentered
                onClose={onClose}
                isOpen={isOpen}
                motionPreset="slideInBottom"
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>الوجهة</ModalHeader>
                  <ModalCloseButton marginRight="90%" />
                  <ModalBody>بريدة</ModalBody>
                  <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={onClose}>
                      إغلاق
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </GridItem>

            <GridItem>
              <Button
                w="100%"
                borderRadius="none"
                variant="outline"
                colorScheme="#000066"
                marginBottom="3%"
              >
                التاريخ
              </Button>
            </GridItem>
            <GridItem>
              <Button
                w="100%"
                borderRadius="none"
                variant="outline"
                colorScheme="#000066"
              >
                عدد الأشخاص
              </Button>
            </GridItem>
            <GridItem>
              <DestinationHotel city={"بريدة"} />
            </GridItem>
            <GridItem>
              <DestinationTouristGuides city={"القصيم"} />
            </GridItem>
            {/* <Box borderWidth="2px" bg="black" w="50%" margin="5% auto" /> */}
            <GridItem>
              <DestinationTransportation city={"بريدة"} />
            </GridItem>
            <GridItem>
              <DestinationFlights city={"القصيم"} />
            </GridItem>
          </Grid>

          <Button
            onClick={onOpen}
            bg="#000066"
            color="white"
            borderRadius="none"
            margin="10% 30%"
            w="40%"
          >
            احجز الآن
          </Button>
          <Modal
            isCentered
            onClose={onClose}
            isOpen={isOpen}
            motionPreset="slideInBottom"
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>الحجز</ModalHeader>
              <ModalCloseButton marginRight="90%" />
              <ModalBody>
                عذرًا خدمة الحجز غير متاحة حاليًا . الموقع قيد الإنشاء
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  إغلاق
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>
      </Box>
    </>
  );
}
