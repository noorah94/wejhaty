import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Heading, Input, Button } from "@chakra-ui/react";

export default function CompleteResetPassword() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const reset = async () => {
    const result = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/users/completeResetPassword/${id}`,
      { id, password }
    );
    console.log(result);

    if (result.data === "Password not complex")
      alert("يجب ان تحتوي كلمة المرور على احرف صغيرة وكبيرة وارقام ورموز");
    else {
      alert("تم التعديل بنجاح");
      navigate(`/login`);
    }
  };

  return (
    <div>
      <Heading>اعادة تعيين كلمة المرور</Heading>

      <Input
        marginTop="6%"
        type="email"
        name="email"
        placeholder="اعادة تعيين كلمة المرور"
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button marginTop="6%" w="100%" onClick={() => reset()}>
        {" "}
        اعادة التعيين{" "}
      </Button>

      {/* <h1>CompleteResetPassword</h1>

      <input
        type="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      /> */}

      {/* <button onClick={() => reset()}> reset </button> */}
    </div>
  );
}
