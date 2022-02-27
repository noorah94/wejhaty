import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Select,
  Image,
  Input,
  Heading,
  Button,
  Box,
  Textarea,
  useToast,
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
  cityRedux,
  numOfDaysRedux,
  hotelRedux,
  transportationRedux,
  flightRedux,
  touristGuideRedux,
  destinationRedux,
} from "./../../reducers/order";

export default function DestinationHotel({ city }) {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [hotels, setHotels] = useState([]);
  const [hotel, setHotel] = useState("");

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
        `${process.env.REACT_APP_BASE_URL}/hotels/getByCity/${city}`
      );

      setHotels(result.data);
      //console.log(city);
    } catch (err) {
      console.log(err);
    }
  };

  const selectHotelFun = async (id) => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/hotels/get/${id}`
      );

      setHotel(result.data);
      const data = {
        hotel: result.data,
      };
      dispatch(hotelRedux(data));
      //console.log(state.setOrder.hotel);
      //console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  const sortHotelFun = (val) => {
    if (val == 1) {
      let arr = [...hotels];
      for (let i = 0; i < arr.length; i++) {
        //console.log(arr[i].hotelInfo[0].price);
        let price1 =
          (arr[i].hotelInfo[0].price + arr[i].hotelInfo[1].price) / 2;
        for (let j = i + 1; j < arr.length; j++) {
          let price2 =
            (arr[j].hotelInfo[0].price + arr[j].hotelInfo[1].price) / 2;
          if (price1 > price2) {
            let swap = arr[i];
            arr[i] = arr[j];
            arr[j] = swap;
          }
        }
      }
      setHotels(arr);
    } else if (val == 2) {
      let arr = [...hotels];
      for (let i = 0; i < arr.length; i++) {
        //console.log(arr[i].hotelInfo[0].price);
        let price1 =
          (arr[i].hotelInfo[0].price + arr[i].hotelInfo[1].price) / 2;
        for (let j = i + 1; j < arr.length; j++) {
          let price2 =
            (arr[j].hotelInfo[0].price + arr[j].hotelInfo[1].price) / 2;
          if (price1 < price2) {
            let swap = arr[i];
            arr[i] = arr[j];
            arr[j] = swap;
          }
        }
      }
      setHotels(arr);
    } else if (val == 3) {
      let arr = [...hotels];
      for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i].hotelInfo[0].price);

        for (let j = i + 1; j < arr.length; j++) {
          if (arr[i].reviews > arr[j].reviews) {
            let swap = arr[i];
            arr[i] = arr[j];
            arr[j] = swap;
          }
        }
      }
      setHotels(arr);
    } else if (val == 4) {
      let arr = [...hotels];
      for (let i = 0; i < arr.length; i++) {
        //console.log(arr[i].hotelInfo[0].price);

        for (let j = i + 1; j < arr.length; j++) {
          if (arr[i].reviews < arr[j].reviews) {
            let swap = arr[i];
            arr[i] = arr[j];
            arr[j] = swap;
          }
        }
      }
      setHotels(arr);
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
        الفنادق
      </Button>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
        scrollBehavior="inside"
        w="50%"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton marginRight="90%" />
          <ModalHeader>الفندق</ModalHeader>

          <ModalBody>
            <Select
              placeholder="الكل"
              onChange={(e) => {
                if (e.target.value) selectHotelFun(e.target.value);
                toast({
                  title: "تم اختيار الفندق بنجاح",
                  // description: "We've created your account for you.",
                  status: "success",
                  duration: 3000,
                  isClosable: true,
                });
              }}
            >
              {hotels.map((item) => {
                return (
                  <>
                    <option value={item._id}>{item.name}</option>
                  </>
                );
              })}
            </Select>
            {hotel ? (
              <>
                <h1>{hotel.name}</h1>
                <h1>{hotel.desc}</h1>
                <h1>{hotel.moreInfo}</h1>
                <h1>{hotel.map}</h1>
                <h1>{hotel.city}</h1>
                <h1>{hotel.reviews}</h1>
                {hotel.hotelInfo.map((item) => {
                  return (
                    <h1>
                      {item.roomType} : {item.price}
                    </h1>
                  );
                })}

                {hotel.imges.map((item) => {
                  return <Image src={item} />;
                })}

                <h1>4صور عن الفندق </h1>
                <h1>معلومات الغرفة والسعر لكل منها </h1>
                <h1>قوقل ماب</h1>
                <h1>رابط معلومات مفصلة عن الفندق</h1>
                <h1>عرض الفنادق على حسب السعر والتقييمات</h1>
              </>
            ) : (
              <></>
            )}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              إغلاق
            </Button>
            {/* <Button variant="ghost">Secondary Action</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* 
      <Select
        placeholder="ترتيب الفنادق على حسب:"
        onChange={(e) => {
          if (e.target.value) sortHotelFun(e.target.value);
        }}
      >
        <option value="1">الترتيب على حسب السعر من الأقل الى الأعلى </option>
        <option value="2">الترتيب على حسب السعر من الأعلى الى الأقل</option>
        <option value="3">الترتيب على حسب التقييم من الأعلى الى الأقل</option>
        <option value="4">الترتيب على حسب التقييم من الأقل الى الأعلى</option>
      </Select> */}
    </div>
  );
}
