import React, { useState } from "react";
import shortnersApi from "apis/shortners";
import Home from "./Home";
import { Switch, Route, useHistory } from "react-router-dom";
import ShortLink from "./ShortLink";

const Index = () => {
  const [url, setUrl] = useState("");
  const [isSelected, setIsSelected] = useState(false);
  const history = useHistory();

  const setLink = async () => {
    if (!url) {
      alert("Url field can't be empty");
    } else {
      let code = new Date().getTime().toString();
      try {
        await shortnersApi.create({
          shortner: {
            url: url,
            code: code,
            short_url: `https://citly-short.herokuapp.com/s/${code}`,
          },
        });
        alert(
          `Well Done! url shorted --- https://citly-short.herokuapp.com/s/${code}`
        );
        setUrl("");
        setIsSelected(true);
      } catch (error) {
        alert(`Not a Valid Url or ${error}`);
        history.push("/");
      }
      setIsSelected(false);
    }
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
