import React from "react";
import { useParams } from "react-router";

const ShortLink = () => {
  const { code } = useParams();
  return <h1>{code}</h1>;
};

export default ShortLink;
