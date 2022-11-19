import { useEffect, useState } from "react";
import * as Api from "../api.js";
import MemberCard from "../components/MemberCard.js";
import Nav from "../components/nav/Nav.js";
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
      console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Nav></Nav>
      {profiles.map(function (data) {
        return <MemberCard memberInfo={data} />;
      })}
    </>
  );
};

export default Profiles;
