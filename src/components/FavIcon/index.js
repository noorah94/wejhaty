import React, { useState, useEffect } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import axios from "axios";
import { Button } from "@chakra-ui/button";

export default function FavIcon({ idPro, getAllItems, user, getUserItem }) {
  const [id, setId] = useState(localStorage.getItem("ID"));

  const addToFav = async (fav) => {
    const userId = localStorage.getItem("ID");
    try {
      const result = await axios.put(
        `${process.env.REACT_APP_BASE_URL}/users/updateFavUser`,
        { id, fav, userId },
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      //console.log(result.data);
      getUserItem();
      getAllItems();
    } catch (err) {
      console.log(err);
    }
  };

  const removeFav = async (arr) => {
    const userId = localStorage.getItem("ID");
    const fav = arr.filter((item) => {
      return item !== idPro;
    });

    try {
      const result = await axios.put(
        `${process.env.REACT_APP_BASE_URL}/users/updateFavUser`,
        { id, fav, userId },
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      //console.log(result.data);
      getUserItem();
      getAllItems();
    } catch (err) {
      console.log(err);
    }

    console.log("removeFav");
  };

  return (
    <div>
      {localStorage.getItem("ID") ? (
        user ? (
          user.fav.find((item2) => {
            return item2 === idPro;
          }) ? (
            <AiFillHeart
              size={40}
              color={"rgba(105, 12, 12, 0.8)"}
              onClick={() => removeFav(user.fav)}
            />
          ) : (
            <AiFillHeart
              size={[40]}
              color={"#C0C0C0"}
              onClick={() => addToFav([...user.fav, idPro])}
            />
          )
        ) : (
          <AiFillHeart size={40} color={"#C0C0C0"} />
        )
      ) : (
        <>
          <AiFillHeart size={40} color={"#C0C0C0"} />
        </>
      )}
    </div>
  );
}
