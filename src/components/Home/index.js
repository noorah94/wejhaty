import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  GridItem,
  Image,
  Center,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import PopularItems from "../PopularItems";
import "./style.css";
import { useNavigate } from "react-router-dom";
const images = [
  "https://vid.alarabiya.net/images/2018/08/29/e883ce10-d54b-443c-96d3-74ec74bdb702/e883ce10-d54b-443c-96d3-74ec74bdb702_16x9_1200x676.jpg?width=1138",
  "https://d3rr2gvhjw0wwy.cloudfront.net/uploads/activity_galleries/285169/2000x2000-0-70-27bb87e7ae3dd27151fbc510fb8a9bb4.jpg",
  "https://www.experiencealula.com/getattachment/a7d5ff00-61df-4f6a-91ff-45257ed69ef0/raod_trip_panel_833x551.jpg",
  "/b.jpeg",
];

export default function Home() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setIndex(index + 1);
      if (index === images.length - 1) {
        setIndex(0);
      }
    }, 2000);
    return () => {
      clearInterval(id);
    };
  });
  return (
    <div class="home">
      <Box
        bg={`linear-gradient(0deg,
      rgba(0, 0, 0, 0.30),
      rgba(0, 0, 0, 0.30)
    ),
    url(${images[index]})`}
        w="100%"
        h={["200px", "700px"]}
        p={4}
        color="white"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      >
        <Center>
          <Box marginTop="17%" alignItems="baseline" textAlign="center">
            <Heading
              marginBottom="5%"
              fontSize={["50%", "200%"]}
              fontFamily="Cormorant Garamond"
              // class="home2"
            >
              دليل وجهتك معنا وبحسب ميزانيتك !
            </Heading>
            <Heading
              marginBottom="5%"
              fontSize={["100%", "300%"]}
              fontFamily="Lemonada"
            >
              في اي مكان بالسعودية
            </Heading>
            <Button
              backgroundColor="#7294BD"
              borderRadius="none"
              h={["13px", "40px"]}
              w={["20%", "30%"]}
              fontSize={["40%", "100%"]}
              onClick={() => navigate(`/destinations`)}
            >
              {" "}
              اعرف المزيد
            </Button>
          </Box>
        </Center>
      </Box>
      <Center>
        <Box bg="white" w="70%">
          <Box textAlign="center" margin="13%">
            <Heading fontSize={["70%", "170%"]} fontFamily="Courier New">
              المملكة هي وجهتك
            </Heading>
            <Text
              marginTop="1.5%"
              fontFamily="Courier New"
              fontSize={["40%", "140%"]}
            >
              عيش المتعة والجمال في جميع أنحاء الممكلة مابين دفء البحر الأحمر
              ومغامراته المائية.
            </Text>
            <Text fontFamily="Courier New" fontSize={["40%", "140%"]}>
              ومابين الطبيعة وأجوائها الجميلة , ومابين الجبال وتسلق جبالها ,
              ومابين أروع المناظر في تساقط الثلوج , والهروب من صخب المدينة الى
              صمت صحرائها كل هذا وأكثر بانتظاركم!{" "}
            </Text>
            {/* <hr class="line" /> */}
            <Box borderWidth="2px" bg="black" w="50%" margin="5% auto" />
          </Box>

          <Box
            w="120%"
            textAlign="center"
            bg="black"
            fontFamily="Courier New"
            padding={["0%", "1%"]}
          >
            <Grid
              templateRows="repeat(1, 1fr)"
              templateColumns="repeat(2, 1fr)"
              shadow="md"
              padding={["1", "3"]}
              zIndex="1"
            >
              <GridItem colSpan={1}>
                <Image
                  src="https://www.annahar.com/ContentFilesArchive/474054Image1.jpg?version=3884483"
                  alt="wjhat"
                  w="90%"
                />
              </GridItem>
              <GridItem colSpan={1}>
                <Box p={["0.5", "7"]} color="white">
                  <Heading
                    fontFamily="Courier New"
                    marginTop={["1%", "10%"]}
                    fontSize={["50%", "170%"]}
                  >
                    الوجهات
                  </Heading>
                  <Text mt={4} fontSize={["30%", "140%"]}>
                    تبي ترفه نفسك او احبابك بوجهة سياحية بدون بحث عن فندق او
                    تخطيط لطلعة او اماكن ترفيهة؟ وحتى قلق الميزانية ؟ عشان كذا
                    حنا جهزنا لك وجهة سياحية متكاملة مع مين ماكانت او تكون
                  </Text>
                  <Button
                    rightIcon={<ArrowBackIcon />}
                    colorScheme="teal"
                    variant="solid"
                    marginTop={["0%", "3%"]}
                    h={["13px", "40px"]}
                    w={["34%", "30%"]}
                    fontSize={["20%", "100%"]}
                    onClick={() => {
                      navigate(`destinations`);
                    }}
                  >
                    اعرف أكثر
                  </Button>
                </Box>
              </GridItem>
            </Grid>
          </Box>

          <Box>
            <Heading
              fontFamily="Courier New"
              marginTop="10%"
              textAlign="center"
              fontSize={["70%", "170%"]}
            >
              الوجهات الأكثر طلبًا
            </Heading>
            <Box borderWidth="2px" bg="black" w="50%" margin="auto" />

            <PopularItems link={"destinations"} />
          </Box>

          <Box
            w="120%"
            textAlign="center"
            bg="rbga(0,0,0,0.0)"
            fontFamily="Courier New"
            padding="1%"
            marginTop="10%"
          >
            <Grid
              templateRows="repeat(1, 1fr)"
              templateColumns="repeat(2, 1fr)"
              shadow="md"
              padding={["0%", "1%"]}
              zIndex="1"
              bg="rgb(224, 224, 235)"
            >
              <GridItem colSpan={1}>
                <Image
                  src="https://media-cdn.tripadvisor.com/media/photo-s/1c/d4/4e/ba/caption.jpg"
                  alt="wjhat"
                  w="90%"
                />
              </GridItem>
              <GridItem colSpan={1}>
                <Box p={["0.5", "7"]}>
                  <Heading
                    fontFamily="Courier New"
                    marginTop={["1%", "10%"]}
                    fontSize={["50%", "170%"]}
                  >
                    يوم في مدينتك
                  </Heading>
                  <Text mt={4} fontSize={["30%", "140%"]}>
                    اكتشف مدينتك من زاوية مختلفة، بحيث راح نسوي لك دليل سياحي مع
                    الناس اللي تختارها سواء اهلك او اصدقائك أو حتى ضيوفك وراح
                    تقضي أمتع الأوقات!
                  </Text>
                  <Button
                    rightIcon={<ArrowBackIcon />}
                    colorScheme="teal"
                    variant="solid"
                    marginTop={["0%", "3%"]}
                    h={["13px", "40px"]}
                    w={["34%", "30%"]}
                    fontSize={["20%", "100%"]}
                    onClick={() => {
                      navigate(`/dayInYourCity`);
                    }}
                  >
                    اعرف أكثر
                  </Button>
                </Box>
              </GridItem>
            </Grid>
          </Box>

          <Box>
            <Heading
              fontSize={["70%", "170%"]}
              fontFamily="Courier New"
              marginTop="10%"
              textAlign="center"
            >
              يوم في مدينتك الأكثر طلبًا
            </Heading>
            <Box borderWidth="2px" bg="black" w="50%" margin="auto" />

            <PopularItems link={"dayInYourCity"} />
          </Box>
        </Box>
      </Center>

      {/* <CardInHome
        name={"الوجهات"}
        text={`ندري انك تبي ترفه نفسك او احبابك بوجهة سياحية بدون بحث عن فندق
                او تخطيط لطلعة او اماكن ترفيهة وحتى قلق الميزانية عشان كذا حنا
                جهزنا لك وجهة سياحية متكاملة مع مين ماكانت او تكون.`}
        image={"/home2.jpeg"}
        link={"/destinations"}
      />
      <PopularItems link={"destinations"} />

      <CardInHome
        name={"شارك وجهتك الخاصة"}
        text={`عطنا وجهتك اللي كانت في غاية المتعة مع اهلك او زوجتك او اصدقائك
                وشاركها معنا.`}
        image={"/home1.jpeg"}
        link={""}
      />
      <PopularItems link={"dayInYourCity"} />
      <CardInHome
        name={"شارك وجهتك الخاصة"}
        text={`عطنا وجهتك اللي كانت في غاية المتعة مع اهلك او زوجتك او اصدقائك
                وشاركها معنا.`}
        image={"/home1.jpeg"}
        link={""} */}
      {/* /> */}
      {/* <Center>
        <Grid
          marginTop="10%"
          w="70%"
          templateRows="repeat(1, 1fr)"
          templateColumns="repeat(2, 1fr)"
          shadow="md"
          borderWidth="1px"
          padding="3"
          bg="white"
        >
          <GridItem colSpan={1}>
            <Image src="/home2.jpeg" alt="wjhat" w="70%" />
          </GridItem>
          <GridItem colSpan={1}>
            <Box p={7}>
              <Heading fontSize="xl">الوجهات</Heading>
              <Text mt={4}>
                ندري انك تبي ترفه نفسك او احبابك بوجهة سياحية بدون بحث عن فندق
                او تخطيط لطلعة او اماكن ترفيهة وحتى قلق الميزانية عشان كذا حنا
                جهزنا لك وجهة سياحية متكاملة مع مين ماكانت او تكون.
              </Text>
              <Button
                rightIcon={<ArrowBackIcon />}
                colorScheme="teal"
                variant="solid"
                marginTop="3%"
              >
                اعرف أكثر
              </Button>
            </Box>
          </GridItem>
        </Grid>
      </Center> */}
      {/* <Center>
        <Grid
          marginTop="10%"
          w="70%"
          templateRows="repeat(1, 1fr)"
          templateColumns="repeat(2, 1fr)"
          shadow="md"
          borderWidth="1px"
          padding="3"
        >
          <GridItem colSpan={1}>
            <Box p={7}>
              <Heading fontSize="xl">شارك وجهتك الخاصة</Heading>
              <Text mt={4}>
                عطنا وجهتك اللي كانت في غاية المتعة مع اهلك او زوجتك او اصدقائك
                وشاركها معنا.
              </Text>
              <Button
                rightIcon={<ArrowBackIcon />}
                colorScheme="teal"
                variant="solid"
                marginTop="3%"
              >
                اعرف أكثر
              </Button>
            </Box>
          </GridItem>

          <GridItem colSpan={1}>
            <Image src="/home1.jpeg" alt="wjhat" w="70%" />
          </GridItem>
        </Grid>
      </Center> */}
    </div>
  );
}
