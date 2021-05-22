import React, { useEffect, useState } from "react";
import shortnersApi from "apis/shortners";
import Home from "./Home";
import { Switch, Route } from "react-router-dom";
import ShortLink from "./ShortLink";
const Index = () => {
  const [url, setUrl] = useState("");
  const fetchLinks = async () => {
    const response = await shortnersApi.list();
    // console.log(response)
  };

  const setLink = async () => {
    let code = new Date().getTime().toString();
    try {
      // console.log("Before")
      await shortnersApi.create({ shortner: { url: url, code: code } });
      alert("Your Shortened Links is --- http://localhost:3000/s/" + code);
      // console.log("After")
      setUrl("");
    } catch (error) {
      // console.log(error)
    }
  };

  useEffect(() => {
    fetchLinks();
  }, []);

  return (
    <>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Home onChange={setUrl} onClick={setLink} data={url} />}
        />
        <Route exact path="/s/:code" component={ShortLink} />
      </Switch>
    </>
  );
};

export default Index;
