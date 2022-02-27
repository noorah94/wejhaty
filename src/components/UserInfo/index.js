import React, { useState, useEffect } from "react";
import axios from "axios";
import Logout from "./../Logout";
import {
  Button,
  Text,
  Box,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
} from "@chakra-ui/react";

import { useDispatch } from "react-redux";
import { logout2 } from "./../../reducers/login";
import { useNavigate } from "react-router-dom";

export default function UserInfo() {
  const [user, setUser] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [id, setId] = useState(localStorage.getItem("ID"));

  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef();

  useEffect(() => {
    getUserItem();
  }, []);

  const getUserItem = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/users/get/${id}`
      );

      setUser(result.data);
      console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteUser = async () => {
    const userId = localStorage.getItem("ID");

    try {
      const result = await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/users/del`,
        {
          data: { id, userId },
          headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      console.log("ffff");

      //getAllItems();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {user ? (
        <>
          <Box
            bg="white"
            w="100%"
            shadow="md"
            p="4%"
            // marginTop=""
            w="70%"
            margin="7% auto"
          >
            <Text> معرف الحساب:</Text>
            <Text>{user._id}</Text>
            <Text> اسم المستخدم:</Text>
            <Text>{user.username}</Text>
            <Text>رقم الجوال:</Text>
            <Text>{user.phoneNumber}</Text>
            <Text>الإيميل:</Text>
            <Text>{user.email}</Text>

            <>
              <Button colorScheme="red" onClick={() => setIsOpen(true)}>
                حذف الحساب
              </Button>

              <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
              >
                <AlertDialogOverlay>
                  <AlertDialogContent>
                    <AlertDialogHeader fontSize="lg" fontWeight="bold">
                      حذف الحساب
                    </AlertDialogHeader>

                    <AlertDialogBody>
                      هل أنت متأكد من أنك تريد حذف حسابك؟
                    </AlertDialogBody>

                    <AlertDialogFooter>
                      <Button ref={cancelRef} onClick={onClose}>
                        إلغاء
                      </Button>
                      <Button
                        colorScheme="red"
                        onClick={() => {
                          deleteUser();
                          onClose();
                          const data = {
                            token: "",
                            role: "",
                            ID: "",
                          };
                          dispatch(logout2(data));
                          navigate("/");
                        }}
                        ml={3}
                      >
                        حذف
                      </Button>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialogOverlay>
              </AlertDialog>
            </>
          </Box>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
