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
      const result = [
        {
          family_id: 1,
          id: 1,
          nickname: "Hosan",
          auth: 1,
          forbidden1: "1",
          forbidden2: "2",
          forbidden3: "3",
          pw: null,
          img: "/logo512.png",
        },
        {
          family_id: 1,
          id: 2,
          nickname: "Jack",
          auth: 1,
          forbidden1: "1",
          forbidden2: "2",
          forbidden3: "3",
          pw: null,
          img: "/d2.jpg",
        },
        {
          family_id: 1,
          id: 3,
          nickname: "Nayeong",
          auth: 1,
          forbidden1: "1",
          forbidden2: "2",
          forbidden3: "3",
          pw: null,
        },
      ];
      // await Api.get("/user/family");
      setProfiles(result.data);
      // console.log(result.data);
      setProfiles(result);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Nav></Nav>
      <style.HorizontalContainer>
        {profiles.map(function (data) {
          return <MemberCard memberInfo={data} />;
        })}
      </style.HorizontalContainer>
    </>
  );
};

export default Profiles;
