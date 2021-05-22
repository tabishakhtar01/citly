import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import shortnersApi from "apis/shortners";

const ShortLink = () => {
  const { code } = useParams();
  const history = useHistory();
  const [getLink, setGetLink] = useState("");

  const getLinkDetails = async () => {
    const response = await shortnersApi.show(code);
    const linkData = response.data.shortner.url;
    setGetLink(linkData);
    location.replace(getLink);
  };

  useEffect(() => {
    getLinkDetails();
  }, [getLink]);

  return <h1>{getLink}</h1>;
};

export default ShortLink;
