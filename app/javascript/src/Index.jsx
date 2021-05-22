import React, { useState } from "react";
import shortnersApi from "apis/shortners";
import Home from "./Home";
import { Switch, Route, useHistory } from "react-router-dom";
import ShortLink from "./ShortLink";

const Index = () => {
  const [url, setUrl] = useState("");
  const [isSelected, setIsSelected] = useState(false);
  const history = useHistory;

  const setLink = async () => {
    let code = new Date().getTime().toString();
    try {
      await shortnersApi.create({
        shortner: {
          url: url,
          code: code,
          short_url: `http://localhost:3000/s/${code}`,
        },
      });
      setUrl("");
      setIsSelected(true);
    } catch (error) {
      history.push("/");
    }
    setIsSelected(false);
  };

  return (
    <>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Home
              OnChange={setUrl}
              OnClick={setLink}
              data={url}
              state={isSelected}
            />
          )}
        />
        <Route path="/s/:code" component={ShortLink} />
      </Switch>
    </>
  );
};

export default Index;
