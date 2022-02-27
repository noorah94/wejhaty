import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Select,
  Avatar,
  Image,
  Input,
  Heading,
  Button,
  Box,
  Textarea,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  hotelRedux,
  transportationRedux,
  flightRedux,
  touristGuideRedux,
  destinationRedux,
} from "./../../reducers/order";

export default function DestinationFlights({ city }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [flights, setFlights] = useState([]);
  const [flight, setFlight] = useState("");
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return state;
  });

  useEffect(() => {
    getAllItemsByCity();
  }, []);

  const getAllItemsByCity = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/flights/getByCity/${city}`
      );

      setFlights(result.data);

      // console.log(state.setOrder.flight);
    } catch (err) {
      console.log(err);
    }
  };

  const selectFlightFun = async (id) => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/flights/get/${id}`
      );

      setFlight(result.data);
      const data = {
        flight: result.data,
      };
      dispatch(flightRedux(data));

      //console.log(state.setOrder.flight);
      //console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Button
        onClick={onOpen}
        w="100%"
        borderRadius="none"
        variant="outline"
        colorScheme="#000066"
      >
        تذاكر الطيران
      </Button>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>تذاكر الطيران</ModalHeader>
          <ModalCloseButton marginRight="90%" />
          <ModalBody>
            <Select
              placeholder="الكل"
              onChange={(e) => {
                if (e.target.value) selectFlightFun(e.target.value);
              }}
            >
              {flights.map((item) => {
                return (
                  <>
                    <option value={item._id}>
                      {item.from} الى {item.to}. نوع التذكرة:{item.flightClass}
                    </option>
                  </>
                );
              })}
            </Select>

            {flight ? (
              <>
                <h1>{flight.from}</h1>
                <h1>{flight.to}</h1>
                <h1>{flight.flightClass}</h1>
                <h1>{flight.adultTicketPrice}</h1>
                <h1>{flight.childTicketPrice}</h1>
                <h1>{flight.infantTicketPrice}</h1>
              </>
            ) : (
              <></>
            )}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              إغلاق
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
