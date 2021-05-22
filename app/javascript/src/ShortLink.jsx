import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import shortnersApi from "apis/shortners";
import PageLoader from "components/PageLoader";

const ShortLink = () => {
  const { code } = useParams();
  const history = useHistory();
  const [getLink, setGetLink] = useState("");
  const [loading, setLoading] = useState(true);

  const getLinkDetails = async () => {
    const response = await shortnersApi.show(code);
    if (!response) {
      setLoading(false);
      return history.push("/");
    }
    const linkData = response.data.shortner.url;
    setGetLink(linkData);
    location.replace(getLink);
  };

  useEffect(() => {
    getLinkDetails();
  }, [getLink]);

  if (loading) {
    return (
      <div className="w-screen h-screen">
        <PageLoader />
      </div>
    );
  }
};

export default ShortLink;
