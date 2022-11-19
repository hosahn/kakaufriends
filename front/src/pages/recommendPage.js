import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as Api from "../api.js";

const Recommend = () => {
  const [profiles, setProfiles] = useState([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  let params = useParams();
  const nickname = params.nickname;
  useEffect(() => {
    renderRecommend();
  }, []);
  const renderRecommend = async () => {
    try {
      const result = await Api.get(`/user/family/${nickname}`);
      console.log(result);
      console.log("Asdf");
      setProfiles(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {profiles.map(function (data) {
        return (
          <>
            <a
              href={"https://www.google.com/search?q=" + data.title + " movie"}
            >
              <img src="https://assets.cdn.moviepilot.de/files/13f4e0f8306cbf15cb16914e96514891a378c1bcadbaa7becd0a8701eab3/limit/500/1000/82927-2.jpg"></img>
            </a>
            <h1>{data.title}</h1>
            <h2>{data.description}</h2>
          </>
        );
      })}
    </>
  );
};

export default Recommend;
