import React from "react";
import { Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react";

export default function WhoAreWe() {
  return (
    <>
      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(2, 1fr)",
        ]}
        marginTop="10%"
        bg="black"
        color="#D1C275"
      >
        <GridItem p="7%" textAlign="center">
          <Heading
            fontSize={["200%", "310%", "420%", "550%"]}
            fontFamily="Cormorant Garamond"
          >
            {" "}
            <q>
              {" "}
              طموحنا أن نبني وطنًا أكثر ازدهارًا؛ يجد فيه كل مواطن ما يتمناه{" "}
            </q>
          </Heading>

          <Text
            fontFamily="Cormorant Garamond"
            fontSize={["100%", "130%", "170%", "200%"]}
          >
            محمد بن سلمان بن عبدالعزيز{" "}
          </Text>
        </GridItem>
        <GridItem
          bg={`linear-gradient(0deg,
      rgba(0, 0, 0, 0.30),
      rgba(0, 0, 0, 0.30)
    ),
    url("${"/m.jpeg"}")`}
          h={["400px", "400px", "500px", "500px"]}
        ></GridItem>
      </Grid>

      <Box
        bg="black"
        color="#A8A283"
        padding="10% 0%"
        fontFamily="Cormorant Garamond"
        fontSize="190%"
        bg="#242323"
      >
        <Box
          width={["90%", "80%", "70%", "60%"]}
          margin="auto"
          bg="black"
          p="5%"
        >
          <Heading
            textAlign="center"
            fontFamily="Cormorant Garamond"
            color="#D1C275"
          >
            من نحن؟
          </Heading>
          <Box
            borderWidth="1px"
            bg="#D1C275"
            w="30%"
            margin="2% auto"
            borderColor="#D1C275"
            marginBottom="7%"
          />
          <Text>● وجهتي تأسست في معسكر طويق في منطقة القصيم.</Text>
          <Text>
            ● والتي جاءت لتلبي احتياجات المسافرين وأهل المنطقة في السعودية.
          </Text>
          <Text>
            ● وجهتي يساعدك انك تلقى وجهتك بحيث يوفر لك دليل سياحي متكامل يناسبك
            ويريح بالك من عناء البحث سواء رحلة ترفيهية - دينية- ثقافية- رياضية
            وين ماكانت وجهتك بالسعودية وبحسب ميزانيتك.
          </Text>
          <Text>
            ● وحتى راح يخدم أهل المنطقة والمدينه نفسها ! وجهتنا ماتقتصر على
            المسافرين راح نخليك تكتشف منطقتك اللي انت/انتِ فيها بحيث راح نسوي لك
            دليل باليوم اللي تختاره سوا مع عائلتك أصدقائك او حتى الزوار من
            ضيوفك.
          </Text>
          <Text>
            ● خطط لرحلتك في وجهتي يعطيك الخيار الكامل باختيار وجهتك وبحسب
            مبزانيتك.
          </Text>
          <Text>
            ● وجهتي تقدم لعملائها السهولة والراحة والحلول المتعددة لإجراء حجوزات
            الفنادق واتاحة خيار رحلات الطيران وخدمة المرشد السياحي .
          </Text>

          <Heading
            textAlign="center"
            fontFamily="Cormorant Garamond"
            color="#D1C275"
            marginTop="7%"
          >
            رؤيتنا
          </Heading>
          <Box
            borderWidth="1px"
            bg="#D1C275"
            w="30%"
            margin="2% auto"
            borderColor="#D1C275"
            marginBottom="7%"
          />

          <Text>
            ● تسعى وجهتي دائمًا إلى دراسة احتياجات المسافرين والاهتمام بالعملاء
            وخدمتهم والتحديث الدائم إلى أماكن في المملكة العربية السعودية بما
            يناسب ذائقتهم ويناسب ميزانيتهم من جميع شرائح المجتمع.
          </Text>

          <Heading
            textAlign="center"
            fontFamily="Cormorant Garamond"
            color="#D1C275"
            marginTop="7%"
          >
            رسالتنا
          </Heading>
          <Box
            borderWidth="1px"
            bg="#D1C275"
            w="30%"
            margin="2% auto"
            borderColor="#D1C275"
            marginBottom="7%"
          />

          <Text>
            ● الوفاء بمسؤوليتنا تجاه رؤيتنا وتسخير كافة إمكانياتنا لنخرج بوجه
            يدل على تاريخنا وتراثنا وخبرتنا في مجالنا لتقديم الأفضل دائمًا.
          </Text>
        </Box>
      </Box>
    </>
  );
}
