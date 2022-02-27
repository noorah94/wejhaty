import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Textarea,
  Heading,
  Button,
  useToast,
  Box,
  Text,
  Center,
  CloseButton,
} from "@chakra-ui/react";

export default function Comments({ id }) {
  const [comments, setComments] = useState([]);
  const [users, setUsers] = useState([]);
  const [text, setText] = useState("");
  const toast = useToast();

  useEffect(() => {
    getUsers();
    getAllComments();
  }, []);

  const getAllComments = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/comments/getCommentsForArticle/${id}`
      );

      setComments(result.data);
      //console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getUsers = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/users/getUsers`
      );

      setUsers(result.data);
      console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  const addComment = async () => {
    try {
      const userId = localStorage.getItem("ID");
      const articleId = id;
      const result = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/comments/add`,
        {
          userId,
          articleId,
          text,
        },
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      //console.log(result.data);

      getAllComments();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteComment = async (commentId) => {
    try {
      const userId = localStorage.getItem("ID");
      const result = await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/comments/del`,
        {
          data: { commentId, userId },
          headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      getAllComments();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Center>
        <Box w="70%" bg="white" p="3%" marginTop="3%">
          <Heading fontSize="l" margin="2%">
            التعليقات:
          </Heading>

          <Heading fontSize="l" margin="2%">
            إضافة تعليق:
          </Heading>
          <Textarea
            pr="4.5rem"
            type="text"
            placeholder="إضافة تعليق"
            onChange={(e) => setText(e.target.value)}
            bg="white"
          />
          <Button
            marginTop="1%"
            marginBottom="5%"
            w="100%"
            onClick={() => {
              if (localStorage.getItem("ID")) {
                addComment();
                toast({
                  title: "إضافة تعليق",
                  description: "تم بنجاح إضافة التعليق",
                  status: "success",
                  position: "top",
                  duration: 3000,
                  isClosable: true,
                });
              } else {
                toast({
                  title: "إضافة تعليق",
                  description:
                    "عذرًا لايمكنك إضافة تعليق. الرجاء تسجيل الدخول أولًا",
                  status: "success",
                  position: "top",
                  duration: 3000,
                  isClosable: true,
                });
              }
            }}
          >
            الإضافة
          </Button>
          {comments.map((item) => {
            return (
              <>
                {/* //shadow="md" */}
                <Box bg="white" w="100%" p="4%" marginTop="4%">
                  {localStorage.getItem("ID") &&
                  (item.userId === localStorage.getItem("ID") ||
                    localStorage.getItem("role") ===
                      "61a48ba362b112055163b918") ? (
                    <CloseButton
                      marginRight="90%"
                      onClick={() => deleteComment(item._id)}
                    />
                  ) : (
                    // <Button
                    //   marginTop="3%"
                    //   w="100%"
                    //   onClick={() => deleteComment(item._id)}
                    // >
                    //   الحذف
                    // </Button>
                    <></>
                  )}
                  <Text>
                    {users.length ? (
                      users.find((item2) => item.userId === item2._id).username
                    ) : (
                      <></>
                    )}
                  </Text>
                  <Box
                    borderWidth="2px"
                    bg="black.900"
                    w="100%"
                    marginBottom="2%"
                  />
                  {item.text}
                </Box>
              </>
            );
          })}
        </Box>
      </Center>
    </div>
  );
}
