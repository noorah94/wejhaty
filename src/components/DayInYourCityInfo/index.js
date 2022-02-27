import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react";

import Comments from "./../Comments";
import { useParams } from "react-router-dom";
import ItemCard from "./../ItemCard";

export default function DayInYourCityInfo() {
  const { id } = useParams();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [dayInYourCity, setDayInYourCity] = useState({});
  useEffect(() => {
    getItem();
  }, []);

  const getItem = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/dayInYourCity/getDayInYourCityById/${id}`
      );

      setDayInYourCity(result.data);
      console.log(result.data.images[0]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Tabs variant="enclosed" marginTop="10%" bg="white">
        <TabList>
          <Tab>عن الرحلة</Tab>
          <Tab>الحجز</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            {dayInYourCity.images ? (
              <>
                <ItemCard
                  images={dayInYourCity.images}
                  name={dayInYourCity.name}
                  desc={dayInYourCity.desc}
                  cost={dayInYourCity.cost}
                  catg={dayInYourCity.catg}
                  orderCount={dayInYourCity.orderCount}
                  startDate={dayInYourCity.startDate}
                  expiryDate={dayInYourCity.expiryDate}
                  reviews={dayInYourCity.reviews}
                  select={"dayInYourCity"}
                />
                {/* <h1>{dayInYourCity.name}</h1>
                <p>{dayInYourCity.desc}</p>
                <Image src={dayInYourCity.imge} alt={dayInYourCity.name} />
                <h1>{dayInYourCity.cost}</h1>
                <h1>{dayInYourCity.map}</h1> */}
                {/* <Image src={dayInYourCity.images[0]} alt={dayInYourCity.name} /> */}
              </>
            ) : (
              <></>
            )}
          </TabPanel>
          <TabPanel>
            <p>التكلفة الكلية</p>

            <Button onClick={onOpen}>الحجز</Button>
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
          </TabPanel>
        </TabPanels>
      </Tabs>

      <Comments id={id} />
    </div>
  );
}
