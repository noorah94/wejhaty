import React from "react";
import DestinationHotel from "./../DestinationHotel";
import DestinationTouristGuides from "./../DestinationTouristGuides";
import DestinationTransportation from "./../DestinationTransportation";
import DestinationFlights from "./../DestinationFlights";
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
import { useNavigate } from "react-router-dom";

import Order from "./../Order";

export default function PlanYourTrip() {
  const navigate = useNavigate();

  return (
    <div>
      <Order
        type={"PlanYourTrip"}
        text1={"خطط لوجهتك الآن!"}
        text2={"وسهلناها لك, اختر وجهتك بحسب اختياراتك واماكانك المفضلة"}
        city={""}
      />
      {/* <PlanYourTripFestivals />
      <PlanYourTripTouristGuides />
      <PlanYourTripTransportation />
      <PlanYourTripFlights />
      <Select
        placeholder="الكل"
        onChange={(e) => {
          if (e.target.value) selectHotelFun(e.target.value);
        }}
      >
        {hotels.map((item) => {
          return (
            <>
              <option value={item._id}>{item.name}</option>
            </>
          );
        })}
      </Select> */}
    </div>
  );
}
