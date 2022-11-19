import { useEffect, useState } from "react";
import { useRadioGroup } from "@mui/material/RadioGroup";
import * as Api from "../api.js";
const Parent = () => {
  const [forbiddenA, setForbiddenA] = useState("");
  const [forbiddenB, setForbiddenB] = useState("");
  const [forbiddenC, setForbiddenC] = useState("");
  const handleChangeA = ({ target: { value } }) => setForbiddenA(value);
  const handleChangeB = ({ target: { value } }) => setForbiddenB(value);
  const handleChangeC = ({ target: { value } }) => setForbiddenC(value);
  const submitHandler = () => {
    sendResult();
  };
  const sendResult = async () => {
    const result = await Api.post("/user/family/parents/forbidden", {
      one: forbiddenA,
      two: forbiddenB,
      three: forbiddenC,
    });
    if (result) {
      console.log(true);
    }
  };
  return (
    <>
      <form>
        <input
          type="first option"
          name="choose a dangerous keyword for your kids"
          value={forbiddenA}
          onChange={handleChangeA}
        />
        <input
          type="second option"
          name="choose a dangerous keyword for your kids"
          value={forbiddenB}
          onChange={handleChangeB}
        />
        <input
          type="third option"
          name="choose a dangerous keyword for your kids"
          value={forbiddenC}
          onChange={handleChangeC}
        />
        <button type="submit" onClick={submitHandler}>
          비밀번호 변경
        </button>
      </form>
    </>
  );
};

export default Parent;
