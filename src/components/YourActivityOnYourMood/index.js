import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, GridItem, Box, Center, Heading } from "@chakra-ui/react";

export default function YourActivityOnYourMood() {
  const [items, setItems] = useState([
    {
      name: "ثقافية",
      img: "https://fanack.com/wp-content/uploads/2021/02/000_Nic6471176-scaled.jpg",
    },
    {
      name: "مع الصحراء",
      img: "https://www.dlildubai.com/wp-content/uploads/2019/10/%D9%84%D9%8A%D9%88%D8%A7.jpg",
    },
    {
      name: "بحرية",
      img: "https://pbs.twimg.com/media/Et3roPTXAAQA-UJ?format=jpg&name=large",
    },
    {
      name: "رياضية",
      img: "https://data.arab48.com/data/news/2016/06/18/Croped/20160618165750.jpg",
    },
  ]);
  const navigate = useNavigate();

  return (
    <div>
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
            {/* <Heading
              marginBottom="5%"
              fontSize={["50%", "100%", "150%", "200%"]}
              fontFamily="Cormorant Garamond"
            >
              وجهتك اليومية خلها علينا !
            </Heading> */}
            <Heading
              marginBottom="5%"
              fontSize={["100%", "170%", "220%", "300%"]}
              fontFamily="Lemonada"
            >
              شاركهم أو شارك معهم
            </Heading>
          </Box>
        </Center>
      </Box>

      <Center>
        <Box display="flex" marginTop="10%" w="90%" bg="white" p="3%">
          <Grid
            templateColumns={[
              "repeat(1, 1fr)",
              "repeat(1, 1fr)",
              "repeat(2, 1fr)",
            ]}
            gap={6}
            marginTop="5%"
            w="70%"
            margin="auto"
          >
            {items.map((item) => (
              <GridItem
                w="100%"
                margin="auto"
                h={["300", "366", "432", "400"]}
                //backgroundImage={`url("https://www.wmadaat.com/upload/09-2021/article/6144ae26329b6.jpg")`}
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                //backgroundColor="red"
                p="2%"
                borderRadius={15}
                shadow="xl"
                //border="1px solid black"
                onClick={() => navigate(`/YourActivityOnYourMood/${item}`)}
              >
                <Box
                  backgroundImage={`linear-gradient(0deg,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.2)
    ),
    url("${item.img}")`} //
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                  h="100%"
                  borderRadius={15}
                  shadow="md"
                >
                  <Box
                    textAlign="center"
                    paddingTop="40%"
                    fontSize={["50%", "100%", "150%", "200%"]}
                    fontFamily="Cormorant Garamond"
                    color="white"
                  >
                    {item.name}
                  </Box>
                </Box>
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Center>
    </div>
  );
}
