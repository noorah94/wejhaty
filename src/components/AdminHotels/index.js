import React, { useState, useEffect } from "react";
import axios from "axios";
import { Input, Heading, Button, Box, Textarea } from "@chakra-ui/react";

export default function AdminHotels() {
  const [hotels, setHotels] = useState([]);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [desc, setDesc] = useState("");
  const [imge1, setImge1] = useState("");
  const [imge2, setImge2] = useState("");
  const [imge3, setImge3] = useState("");
  const [imge4, setImge4] = useState("");
  const [imge5, setImge5] = useState("");
  const [map, setMap] = useState("");
  const [moreInfo, setMoreInfo] = useState("");
  const [reviews, setReviews] = useState(0);
  const [roomType1, setRoomType1] = useState("");
  const [price1, setPrice1] = useState(0);
  const [roomType2, setRoomType2] = useState("");
  const [price2, setPrice2] = useState(0);

  useEffect(() => {
    getAllItems();
  }, []);

  const getAllItems = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/hotels/get`
      );

      setHotels(result.data);
      //console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  const addHotel = async () => {
    const userId = localStorage.getItem("ID");
    try {
      const result = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/hotels/add`,
        {
          userId,
          name,
          city,
          desc,
          imges: [imge1, imge2, imge3, imge4, imge5],
          map,
          moreInfo,
          reviews,
          hotelInfo: [
            { roomType: roomType1, price: price1 },
            { roomType: roomType2, price: price2 },
          ],
        },
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      //console.log(result.data);

      getAllItems();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteHotel = async (hotelId) => {
    const userId = localStorage.getItem("ID");
    try {
      const result = await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/hotels/del`,
        {
          data: { hotelId, userId },
          headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      getAllItems();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Box
        w="70%"
        margin="auto"
        marginTop="5%"
        borderRadius="md"
        border="1px"
        borderColor="#ccd0d5"
        padding="50"
      >
        <Heading fontSize="l" marginTop="3%">
          الإسم:
        </Heading>

        <Input
          pr="4.5rem"
          type="text"
          placeholder="الإسم"
          onChange={(e) => setName(e.target.value)}
        />
        <Heading fontSize="l" marginTop="3%">
          المدينة:
        </Heading>

        <Input
          pr="4.5rem"
          type="text"
          placeholder="المدينة"
          onChange={(e) => setCity(e.target.value)}
        />

        <Heading fontSize="l" marginTop="3%">
          الوصف:
        </Heading>

        <Textarea
          pr="4.5rem"
          type="text"
          placeholder="الوصف"
          onChange={(e) => setDesc(e.target.value)}
        />

        <Heading fontSize="l" marginTop="3%">
          رابط الصورة الأولى:
        </Heading>

        <Input
          pr="4.5rem"
          type="text"
          placeholder="رابط الصورة الأولى"
          onChange={(e) => setImge1(e.target.value)}
        />

        <Heading fontSize="l" marginTop="3%">
          رابط الصورة الثانية:
        </Heading>

        <Input
          pr="4.5rem"
          type="text"
          placeholder="رابط الصورة الثانية"
          onChange={(e) => setImge2(e.target.value)}
        />

        <Heading fontSize="l" marginTop="3%">
          رابط الصورة الثالثة:
        </Heading>

        <Input
          pr="4.5rem"
          type="text"
          placeholder="رابط الصورة الثالثة"
          onChange={(e) => setImge3(e.target.value)}
        />
        <Heading fontSize="l" marginTop="3%">
          رابط الصورة الرابعة:
        </Heading>

        <Input
          pr="4.5rem"
          type="text"
          placeholder="رابط الصورة الرابعة"
          onChange={(e) => setImge4(e.target.value)}
        />

        <Heading fontSize="l" marginTop="3%">
          رابط الصورة الخامسة:
        </Heading>

        <Input
          pr="4.5rem"
          type="text"
          placeholder="رابط الصورة الخامسة"
          onChange={(e) => setImge5(e.target.value)}
        />

        <Heading fontSize="l" marginTop="3%">
          رابط الخريطة:
        </Heading>

        <Input
          pr="4.5rem"
          type="text"
          placeholder="رابط الخريطة"
          onChange={(e) => setMap(e.target.value)}
        />
        <Heading fontSize="l" marginTop="3%">
          رابط معلومات اكثر:
        </Heading>

        <Input
          pr="4.5rem"
          type="text"
          placeholder="رابط معلومات اكثر"
          onChange={(e) => setMoreInfo(e.target.value)}
        />

        <Heading fontSize="l" marginTop="3%">
          التقييم:
        </Heading>

        <Input
          pr="4.5rem"
          type="number"
          placeholder="التقييم"
          onChange={(e) => setReviews(e.target.value)}
        />

        <Heading fontSize="l" marginTop="3%">
          نوع الغرفة1:
        </Heading>

        <Input
          pr="4.5rem"
          type="text"
          placeholder="نوع الغرفة1"
          onChange={(e) => setRoomType1(e.target.value)}
        />
        <Heading fontSize="l" marginTop="3%">
          السعر1:
        </Heading>

        <Input
          pr="4.5rem"
          type="number"
          placeholder="السعر1"
          onChange={(e) => setPrice1(e.target.value)}
        />

        <Heading fontSize="l" marginTop="3%">
          نوع الغرفة2:
        </Heading>

        <Input
          pr="4.5rem"
          type="text"
          placeholder="نوع الغرفة2"
          onChange={(e) => setRoomType2(e.target.value)}
        />
        <Heading fontSize="l" marginTop="3%">
          السعر2:
        </Heading>

        <Input
          pr="4.5rem"
          type="number"
          placeholder="السعر2"
          onChange={(e) => setPrice2(e.target.value)}
        />

        <Button marginTop="13%" w="100%" onClick={() => addHotel()}>
          الإضافة
        </Button>
      </Box>

      <h1>الفنادق</h1>
      {hotels.map((item) => (
        <>
          <h2>الإسم : {item.name}</h2>
          <p>المدينة : {item.city}</p>
          <p>الوصف : {item.desc}</p>
          <p>الخريطة : {item.map}</p>
          <p>معلومات أكثر: {item.moreInfo}</p>
          <p> التصنيف: {item.reviews}</p>
          <p>الصور: </p>
          {item.imges.map((item) => (
            <span>{item} </span>
          ))}
          <p>معلومات الفندق: </p>
          {item.hotelInfo.map((item) => (
            <p>
              {item.roomType} {item.price}
            </p>
          ))}

          <br />
          <Button onClick={() => deleteHotel(item._id)}> delete </Button>

          <br />
          <hr />
          <br />
        </>
      ))}
    </div>
  );
}
