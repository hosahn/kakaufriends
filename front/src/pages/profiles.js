import { useEffect, useState } from "react";
import * as Api from "../api.js";
import MemberCard from "../components/MemberCard.js";
import Nav from "../components/nav/Nav.js";
import * as style from "../styles/CommonStyle";

const Profiles = () => {
  const [profiles, setProfiles] = useState([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    getProfiles();
  }, []);

  const getProfiles = async () => {
    try {
      const result = await Api.get("/user/family");
      setProfiles(result.data);
      // console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Nav></Nav>
      <style.MainWrapper>
        <style.HorizontalContainer>
          {profiles.map(function (data) {
            return <MemberCard name={data.nickname} />;
          })}
        </style.HorizontalContainer>
      </style.MainWrapper>
    </>
  );
};

export default Profiles;
