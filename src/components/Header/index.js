import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Flex,
  Spacer,
  Box,
  Button,
  HStack,
  MenuList,
  MenuItem,
  Menu,
  MenuButton,
  IconButton,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  AddIcon,
  RepeatIcon,
  EditIcon,
  ExternalLinkIcon,
} from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { login2, logout2 } from "./../../reducers/login";
import Logout from "./../Logout";
import "./style.css";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <Box
        border="1px"
        fontWeight="semibold"
        borderColor="#ccd0d5"
        padding={["0.3%", "0.5%", "0.7%", "1%"]}
        position="fixed"
        zIndex="1"
        top="0"
        w="100%"
        bg="#FFFFF7"
        opacity=".9"
      >
        <Flex>
          <Box fontSize={["100%", "130%", "155%", "180%"]} w="20%">
            <span className="logo">وجهتي</span>
          </Box>
          <Spacer />
          <Box
            display="flex"
            justifyContent="space-between"
            width={["70%", "62%", "57%", "50%"]}

            // bg="green"
          >
            <HStack w="100%">
              <Box
                display="flex"
                justifyContent="space-between"
                width={["100%", "90%", "80%", "70%"]}
                marginLeft={["0%", "1%", "2%", "4%"]}
                fontSize={["40%", "60%", "80%", "100%"]}
                // width={[
                //   "100%", // 0-30em
                //   "50%", // 30em-48em
                //   "25%", // 48em-62em
                //   "15%", // 62em+
                // ]}
              >
                <Link to="/"> الرئيسية </Link>
                <Link to="/destinations"> الوجهات </Link>
                <Link to="/dayInYourCity"> يوم في مدينتك </Link>
                <Link to="/PlanYourTrip">خطط لرحلتك</Link>
                {/* <Link to="/travelTips"> ارشادات السفر </Link> */}
                <Link to="/whoAreWe"> من نحن </Link>
              </Box>

              {localStorage.getItem("ID") ? (
                <>
                  {localStorage.getItem("role") ===
                  "61a48ba362b112055163b918" ? (
                    <Link to="/admin"> Admin </Link>
                  ) : (
                    <></>
                  )}

                  <Menu>
                    <MenuButton
                      as={IconButton}
                      aria-label="Options"
                      icon={<HamburgerIcon />}
                      variant="outline"
                    />
                    <MenuList>
                      <MenuItem
                        icon={<AddIcon />}
                        command="⌘T"
                        onClick={() => navigate("/UserInfo")}
                      >
                        معلوماتي
                      </MenuItem>
                      <MenuItem
                        icon={<ExternalLinkIcon />}
                        command="⌘N"
                        onClick={() => navigate("/MyOrders")}
                      >
                        طلباتي
                      </MenuItem>
                      <MenuItem
                        icon={<RepeatIcon />}
                        command="⌘⇧N"
                        onClick={() => navigate("/MyFav")}
                      >
                        مفضلاتي
                      </MenuItem>
                      <MenuItem
                        icon={<EditIcon />}
                        command="⌘O"
                        onClick={() => {
                          const data = {
                            token: "",
                            role: "",
                            ID: "",
                            username: "",
                          };
                          dispatch(logout2(data));
                          navigate("/");
                        }}
                      >
                        تسجيل الخروج
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </>
              ) : (
                <>
                  <Button
                    bg="#7294BD"
                    color="white"
                    borderRadius="none"
                    variant="solid"
                    h={["50%", "57%", "63%", "70%"]}
                    w={["7%", "9%", "11%", "14%"]}
                    fontSize={["40%", "57%", "70%", "90%"]}
                    onClick={() => navigate("/login")}
                  >
                    تسجيل الدخول
                  </Button>
                  <Button
                    h={["50%", "57%", "63%", "70%"]}
                    w={["5%", "7%", "8%", "10%"]}
                    borderRadius="none"
                    colorScheme="blue"
                    variant="outline"
                    fontSize={["40%", "57%", "70%", "90%"]}
                    onClick={() => navigate("/signup")}
                  >
                    التسجيل
                  </Button>
                </>
              )}
            </HStack>
          </Box>
          {/* 
          <Box
            h="150px"
            w="8%"
            bg="black"
            opacity=".1"
            position="fixed"
            zIndex="1"
            marginRight="3%"
          ></Box> */}
        </Flex>
      </Box>
    </div>
  );
}
