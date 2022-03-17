import React, { useState } from "react";
import {
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Box,
  Center,
  Heading,
  Avatar,
  Text,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { Search2Icon } from "@chakra-ui/icons";

export default function YourActivityOnYourMoodByCatg() {
  const { catg } = useParams();
  const navigate = useNavigate();
  const [items, setItems] = useState([
    "ثقافية",
    "مع الصحراء",
    "بحرية",
    "رياضية",
  ]);

  return (
    <>
      <Box
        bg={`linear-gradient(0deg,
      rgba(0, 0, 0, 0.30),
      rgba(0, 0, 0, 0.30)
    ),
    url("${"https://www.aleqt.com/sites/default/files/rbitem/2020/06/24/1413816-336340325.jpg"}")`}
        w="100%"
        h={["200px", "300px", "400px", "500px"]}
        p={4}
        color="white"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      >
        <Center>
          <Box marginTop="13%" alignItems="baseline" textAlign="center">
            <Heading
              marginBottom="2%"
              fontSize={["50%", "100%", "150%", "200%"]}
              fontFamily="Cormorant Garamond"
            >
              شاركهم فعالياتك أو شارك معهم!
            </Heading>
            <Heading
              marginBottom="5%"
              fontSize={["100%", "170%", "220%", "300%"]}
              fontFamily="Lemonada"
            >
              {catg === items[2]
                ? "اخلق مع امواج البحر قصة"
                : catg === items[0]
                ? "شاركهم علمك او تدريبك أو ثقافتك أو قرائتك أو شارك معهم في دخولك في إحدى مجالاتك !"
                : catg === items[1]
                ? "اكيد ان فعالياتك في صحراء مملكتنا بتكون غير!"
                : "شاركهم علمك او تدريبك أو ثقافتك أو قرائتك أو شارك معهم في دخولك في إحدى مجالاتك !"}
            </Heading>
          </Box>
        </Center>
      </Box>

      <Center>
        <Box display="flex" marginTop="10%" w="90%" bg="white" p="3%">
          <Box w="30%">
            <Box
              borderColor="rgba(102, 102, 153, 0.4)"
              borderWidth="1px"
              p="3%"
              marginLeft="10%"
              h="300"
            >
              <InputGroup>
                <Input
                  placeholder="البحث"
                  //onChange={(e) => searchFun(e)}
                  padding="10px"
                  borderRadius="none"
                />
                <InputLeftElement children={<Search2Icon color="gray.300" />} />
              </InputGroup>
              <Select
                placeholder="ترتيب على حسب:"
                //onChange={(e) => sortDFun(e.target.value)}
                padding="10px"
                borderRadius="none"
              >
                <option value="1">الأعلى تقييمًا</option>
                <option value="2">الأقل تقييمًا</option>
                <option value="3">الثمن من الأعلى الى الأقل </option>
                <option value="4">الثمن من الأقل الى الأعلى</option>
                <option value="5">الأفضل مبيعًا</option>
              </Select>

              <Select
                placeholder="المدينة"
                //onChange={(e) => cityFun(e.target.value)}
                padding="10px"
                borderRadius="none"
              >
                <option value="مكة">مكة</option>
                <option value="المدينة">المدينة</option>
                <option value="الرياض">الرياض </option>
                <option value="بريدة">بريدة</option>
                <option value="أبها">أبها</option>
                <option value="جدة">جدة</option>
              </Select>
              <Select
                placeholder="التصنيف"
                //onChange={(e) => catgFun(e.target.value)}
                padding="10px"
                borderRadius="none"
              >
                <option value="عائلي">عائلي</option>
                <option value="اصدقاء">اصدقاء</option>
                <option value="مع الضيوف">ضيوف</option>
                <option value="ثقافي">ثقافي</option>
              </Select>
            </Box>
          </Box>

          <Grid
            templateColumns={["repeat(1, 1fr)"]}
            gap={6}
            marginTop="5%"
            w="100%"
          >
            {items.map((item) => (
              <GridItem
                w="70%"
                h={["300", "366", "432", "200"]}
                // backgroundImage={`url("${image}")`}
                display="flex"
                p="2%"
                margin="auto"
                borderColor="rgba(102, 102, 153, 0.4)"
                borderWidth="1px"
                onClick={() =>
                  navigate(`/YourActivityOnYourMood/${catg}/${item}`)
                }
              >
                <Box>
                  <Avatar
                    size="2xl"
                    name="Segun Adebayo"
                    // src="https://bit.ly/sage-adebayo"
                  />
                  <Heading>فعاليات عزوز</Heading>
                </Box>

                <Box p="1% 6%">
                  <Text> لعب كورة في ملعب الوجيعان</Text>
                  <Text> بريدة</Text>
                  <Text> ذكر</Text>
                  <Text> 20-30</Text>
                  <Text> 5</Text>
                  <Text> مجانًا</Text>
                </Box>
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Center>
    </>
  );
}
